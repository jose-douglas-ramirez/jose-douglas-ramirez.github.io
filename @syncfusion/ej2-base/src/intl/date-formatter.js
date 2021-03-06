define(["require", "exports", "./parser-base", "./intl-base", "../util"], function (require, exports, parser_base_1, intl_base_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi;
    var standalone = 'stand-alone';
    var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    exports.basicPatterns = ['short', 'medium', 'long', 'full'];
    var timeSetter = {
        m: 'getMinutes',
        h: 'getHours',
        H: 'getHours',
        s: 'getSeconds',
        d: 'getDate',
    };
    var datePartMatcher = {
        'M': 'month',
        'd': 'day',
        'E': 'weekday',
        'c': 'weekday',
        'y': 'year',
        'm': 'minute',
        'h': 'hour',
        'H': 'hour',
        's': 'second',
        'L': 'month',
        'a': 'designator',
        'z': 'timeZone',
        'Z': 'timeZone',
        'G': 'era'
    };
    var timeSeparator = 'timeSeparator';
    var DateFormat = (function () {
        function DateFormat() {
        }
        DateFormat.dateFormat = function (culture, option, cldr) {
            var _this = this;
            var dependable = intl_base_1.IntlBase.getDependables(cldr, culture);
            var formatOptions = {};
            var resPattern = option.format || intl_base_1.IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type);
            formatOptions.dateSeperator = intl_base_1.IntlBase.getDateSeparator(dependable.dateObject);
            if (util_1.isUndefined(resPattern)) {
                util_1.throwError('Format options or type given must be invalid');
            }
            else {
                formatOptions.pattern = resPattern;
                formatOptions.numMapper = parser_base_1.ParserBase.getNumberMapper(dependable.parserObject, parser_base_1.ParserBase.getNumberingSystem(cldr));
                var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
                for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                    var str = patternMatch_1[_i];
                    var len = str.length;
                    var char = str[0];
                    if (char === 'K') {
                        char = 'h';
                    }
                    var charKey = datePartMatcher[char];
                    switch (char) {
                        case 'E':
                        case 'c':
                            formatOptions.weekday = dependable.dateObject[intl_base_1.IntlBase.days][standalone][intl_base_1.IntlBase.monthIndex[len]];
                            break;
                        case 'M':
                        case 'L':
                            formatOptions.month = dependable.dateObject[intl_base_1.IntlBase.month][standalone][intl_base_1.IntlBase.monthIndex[len]];
                            break;
                        case 'a':
                            formatOptions.designator = util_1.getValue('dayPeriods.format.wide', dependable.dateObject);
                            break;
                        case 'G':
                            var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                            formatOptions.era = util_1.getValue('eras.' + eText, dependable.dateObject);
                            break;
                        case 'z':
                            formatOptions.timeZone = util_1.getValue('dates.timeZoneNames', dependable.parserObject);
                            break;
                    }
                }
            }
            return function (value) {
                if (isNaN(value.getDate())) {
                    return null;
                }
                return _this.intDateFormatter(value, formatOptions);
            };
        };
        DateFormat.intDateFormatter = function (value, options) {
            var pattern = options.pattern;
            var ret = '';
            var matches = pattern.match(intl_base_1.IntlBase.dateParseRegex);
            for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                var match = matches_1[_i];
                var length_1 = match.length;
                var char = match[0];
                if (char === 'K') {
                    char = 'h';
                }
                var curval = void 0;
                var isNumber = void 0;
                var processNumber = void 0;
                var curstr = '';
                switch (char) {
                    case 'M':
                    case 'L':
                        curval = value.getMonth() + 1;
                        if (length_1 > 2) {
                            ret += options.month[curval];
                        }
                        else {
                            isNumber = true;
                        }
                        break;
                    case 'E':
                    case 'c':
                        ret += options.weekday[weekdayKey[value.getDay()]];
                        break;
                    case 'H':
                    case 'h':
                    case 'm':
                    case 's':
                    case 'd':
                        isNumber = true;
                        curval = value[timeSetter[char]]();
                        if (char === 'h') {
                            curval = curval % 12 || 12;
                        }
                        break;
                    case 'y':
                        processNumber = true;
                        curstr += value.getFullYear();
                        if (length_1 === 2) {
                            curstr = curstr.substr(curstr.length - 2);
                        }
                        break;
                    case 'a':
                        var desig = value.getHours() < 12 ? 'am' : 'pm';
                        ret += options.designator[desig];
                        break;
                    case 'G':
                        var dec = value.getFullYear() < 0 ? 0 : 1;
                        ret += options.era[dec];
                        break;
                    case '\'':
                        ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                        break;
                    case 'z':
                        var timezone = value.getTimezoneOffset();
                        var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                        pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                        if (timezone === 0) {
                            ret += options.timeZone.gmtZeroFormat;
                        }
                        else {
                            processNumber = true;
                            curstr = this.getTimeZoneValue(timezone, pattern_1);
                        }
                        curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                        break;
                    case ':':
                        ret += options.numMapper.numberSymbols[timeSeparator];
                        break;
                    case '/':
                        ret += options.dateSeperator;
                        break;
                    default:
                        ret += match;
                }
                if (isNumber) {
                    processNumber = true;
                    curstr = this.checkTwodigitNumber(curval, length_1);
                }
                if (processNumber) {
                    ret += parser_base_1.ParserBase.convertValueParts(curstr, intl_base_1.IntlBase.latnParseRegex, options.numMapper.mapper);
                }
            }
            return ret;
        };
        DateFormat.checkTwodigitNumber = function (val, len) {
            var ret = val + '';
            if (len === 2 && ret.length !== 2) {
                return '0' + ret;
            }
            return ret;
        };
        DateFormat.getTimeZoneValue = function (tVal, pattern) {
            var _this = this;
            var splt = pattern.split(';');
            var curPattern = splt[tVal > 0 ? 1 : 0];
            var no = Math.abs(tVal);
            return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
                var len = str.length;
                var ishour = str.indexOf('H') !== -1;
                return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
            });
        };
        return DateFormat;
    }());
    exports.DateFormat = DateFormat;
});
