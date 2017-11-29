import { extend } from './util';
import { defaultCulture } from './internationalization';
var L10n = (function () {
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || defaultCulture);
    }
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    L10n.load = function (localeObject) {
        this.locale = extend(this.locale, localeObject, {}, true);
    };
    L10n.prototype.getConstant = function (prop) {
        return this.currentLocale[prop] || this.localeStrings[prop] || '';
    };
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if (curObject[locale]) {
            return curObject[locale][this.controlName];
        }
        return null;
    };
    return L10n;
}());
export { L10n };
L10n.locale = {};
