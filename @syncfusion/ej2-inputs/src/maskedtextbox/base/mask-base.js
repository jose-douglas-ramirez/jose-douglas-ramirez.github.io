define(["require", "exports", "@syncfusion/ej2-base", "../../input/input"], function (require, exports, ej2_base_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERROR = 'e-error';
    var INPUTGROUP = 'e-input-group';
    var FLOATINPUT = 'e-float-input';
    var UTILMASK = 'e-utility-mask';
    var TOPLABEL = 'e-label-top';
    var BOTTOMLABEL = 'e-label-bottom';
    exports.regularExpressions = {
        '0': '[0-9]',
        '9': '[0-9 ]',
        '#': '[0-9 +-]',
        'L': '[A-Za-z]',
        '?': '[A-Za-z ]',
        '&': '[^\x7f ]+',
        'C': '[^\x7f]+',
        'A': '[A-Za-z0-9]',
        'a': '[A-Za-z0-9 ]',
    };
    function createMask() {
        ej2_base_1.attributes(this.element, { 'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
            'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': '' });
        if (this.mask) {
            var splitMask = this.mask.split(']');
            for (var i = 0; i < splitMask.length; i++) {
                if (splitMask[i][splitMask[i].length - 1] === '\\') {
                    splitMask[i] = splitMask[i] + ']';
                    var splitInnerMask = splitMask[i].split('[');
                    for (var j = 0; j < splitInnerMask.length; j++) {
                        if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
                            splitInnerMask[j] = splitInnerMask[j] + '[';
                        }
                        pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                    }
                }
                else {
                    var splitInnerMask = splitMask[i].split('[');
                    if (splitInnerMask.length > 1) {
                        var chkSpace = false;
                        for (var j = 0; j < splitInnerMask.length; j++) {
                            if (splitInnerMask[j] === '\\') {
                                this.customRegExpCollec.push('[');
                                this.hiddenMask += splitInnerMask[j] + '[';
                            }
                            else if (splitInnerMask[j] === '') {
                                chkSpace = true;
                            }
                            else if ((splitInnerMask[j] !== '' && chkSpace) || j === splitInnerMask.length - 1) {
                                this.customRegExpCollec.push('[' + splitInnerMask[j] + ']');
                                this.hiddenMask += this.promptChar;
                                chkSpace = false;
                            }
                            else {
                                pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                            }
                        }
                    }
                    else {
                        pushIntoRegExpCollec.call(this, splitInnerMask[0]);
                    }
                }
            }
            this.escapeMaskValue = this.hiddenMask;
            this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
            if (!ej2_base_1.isNullOrUndefined(this.customCharacters)) {
                for (var i = 0; i < this.promptMask.length; i++) {
                    if (!ej2_base_1.isNullOrUndefined(this.customCharacters[this.promptMask[i]])) {
                        this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[i], 'g'), this.promptChar);
                    }
                }
            }
            var escapeNumber = 0;
            if (this.hiddenMask.match(new RegExp(/\\/))) {
                for (var i = 0; i < this.hiddenMask.length; i++) {
                    var j = 0;
                    if (i >= 2) {
                        j = i;
                    }
                    escapeNumber = this.hiddenMask.length - this.promptMask.length;
                    j = j - escapeNumber;
                    if ((i > 0 && this.hiddenMask[i - 1] !== '\\') && (this.hiddenMask[i] === '>' ||
                        this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|')) {
                        this.promptMask = this.promptMask.substring(0, j) +
                            this.promptMask.substring((i + 1) - escapeNumber, this.promptMask.length);
                        this.escapeMaskValue = this.escapeMaskValue.substring(0, j) +
                            this.escapeMaskValue.substring((i + 1) - escapeNumber, this.escapeMaskValue.length);
                    }
                    if (this.hiddenMask[i] === '\\') {
                        this.promptMask = this.promptMask.substring(0, j) + this.hiddenMask[i + 1] +
                            this.promptMask.substring((i + 2) - escapeNumber, this.promptMask.length);
                        this.escapeMaskValue = this.escapeMaskValue.substring(0, j) + this.escapeMaskValue[i + 1] +
                            this.escapeMaskValue.substring((i + 2) - escapeNumber, this.escapeMaskValue.length);
                    }
                }
            }
            else {
                this.promptMask = this.promptMask.replace(/[>|<]/g, '');
                this.escapeMaskValue = this.hiddenMask.replace(/[>|<]/g, '');
            }
            ej2_base_1.attributes(this.element, { 'aria-invalid': 'false' });
        }
    }
    exports.createMask = createMask;
    function applyMask() {
        setElementValue.call(this, this.promptMask);
        setMaskValue.call(this, this.value);
    }
    exports.applyMask = applyMask;
    function wireEvents() {
        ej2_base_1.EventHandler.add(this.element, 'keydown', maskInputKeyDownHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'keypress', maskInputKeyPressHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'keyup', maskInputKeyUpHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'focus', maskInputFocusHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'blur', maskInputBlurHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'paste', maskInputPasteHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'cut', maskInputCutHandler, this);
        ej2_base_1.EventHandler.add(this.element, 'drop', maskInputDropHandler, this);
    }
    exports.wireEvents = wireEvents;
    function unwireEvents() {
        ej2_base_1.EventHandler.remove(this.element, 'keydown', maskInputKeyDownHandler);
        ej2_base_1.EventHandler.remove(this.element, 'keypress', maskInputKeyPressHandler);
        ej2_base_1.EventHandler.remove(this.element, 'keyup', maskInputKeyUpHandler);
        ej2_base_1.EventHandler.remove(this.element, 'focus', maskInputFocusHandler);
        ej2_base_1.EventHandler.remove(this.element, 'blur', maskInputBlurHandler);
        ej2_base_1.EventHandler.remove(this.element, 'paste', maskInputPasteHandler);
        ej2_base_1.EventHandler.remove(this.element, 'cut', maskInputCutHandler);
    }
    exports.unwireEvents = unwireEvents;
    function unstrippedValue(element) {
        return element.value;
    }
    exports.unstrippedValue = unstrippedValue;
    function strippedValue(element) {
        var value = '';
        var k = 0;
        var checkMask = false;
        if (!ej2_base_1.isNullOrUndefined(element) && !ej2_base_1.isNullOrUndefined(this) && element.value !== this.promptMask) {
            for (var i = 0; i < this.customRegExpCollec.length; i++) {
                if (checkMask) {
                    checkMask = false;
                }
                if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' ||
                    this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
                    --i;
                    checkMask = true;
                }
                if (!checkMask) {
                    if ((element.value[i] !== this.promptChar) && (!ej2_base_1.isNullOrUndefined(this.customRegExpCollec[k]) &&
                        ((!ej2_base_1.isNullOrUndefined(this.regExpCollec[this.customRegExpCollec[k]])) ||
                            (this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' &&
                                this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']') ||
                            (!ej2_base_1.isNullOrUndefined(this.customCharacters) &&
                                (!ej2_base_1.isNullOrUndefined(this.customCharacters[this.customRegExpCollec[k]])))))) {
                        value += element.value[i];
                    }
                }
                ++k;
            }
        }
        return value;
    }
    exports.strippedValue = strippedValue;
    function pushIntoRegExpCollec(value) {
        for (var k = 0; k < value.length; k++) {
            this.hiddenMask += value[k];
            if (value[k] !== '\\') {
                this.customRegExpCollec.push(value[k]);
            }
        }
    }
    function maskInputFocusHandler(event) {
        var _this = this;
        if (this.mask) {
            this.isFocus = true;
            if (this.placeholder && this.element.value === '') {
                setElementValue.call(this, this.promptMask);
                this.element.setSelectionRange(0, this.element.value.length);
                setTimeout(function () {
                    _this.element.setSelectionRange(0, _this.element.value.length);
                }, 1);
            }
        }
    }
    exports.maskInputFocusHandler = maskInputFocusHandler;
    function maskInputBlurHandler(event) {
        if (this.mask) {
            this.isFocus = false;
            if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
                setElementValue.call(this, '');
                var labelElement = this.element.parentNode.querySelector('.e-float-text');
                if (this.floatLabelType === 'Auto' && !ej2_base_1.isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL)) {
                    ej2_base_1.removeClass([labelElement], TOPLABEL);
                }
            }
        }
    }
    exports.maskInputBlurHandler = maskInputBlurHandler;
    function maskInputPasteHandler(event) {
        var _this = this;
        if (this.mask) {
            var sIndex_1 = this.element.selectionStart;
            var eIndex_1 = this.element.selectionEnd;
            var oldValue_1 = this.element.value;
            setElementValue.call(this, '');
            setTimeout(function () {
                var value = _this.element.value;
                if (_this.redoCollec.length > 0 && _this.redoCollec[0].value === _this.element.value) {
                    value = strippedValue.call(_this, _this.element);
                }
                setElementValue.call(_this, oldValue_1);
                _this.element.selectionStart = sIndex_1;
                _this.element.selectionEnd = eIndex_1;
                var i = 0;
                _this.maskKeyPress = true;
                do {
                    validateValue.call(_this, value[i], false, null);
                    ++i;
                } while (i < value.length);
                _this.maskKeyPress = false;
            }, 1);
        }
    }
    function maskInputCutHandler(event) {
        var _this = this;
        if (this.mask) {
            var sIndex_2 = this.element.selectionStart;
            var eIndex = this.element.selectionEnd;
            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
            var value_1 = this.element.value.substring(0, sIndex_2) + this.promptMask.substring(sIndex_2, eIndex) +
                this.element.value.substring(eIndex);
            setTimeout(function () {
                setElementValue.call(_this, value_1);
                _this.element.selectionStart = _this.element.selectionEnd = sIndex_2;
            }, 0);
        }
    }
    function maskInputDropHandler(event) {
        event.preventDefault();
    }
    exports.maskInputDropHandler = maskInputDropHandler;
    function maskInputKeyDownHandler(event) {
        var _this = this;
        if (this.mask) {
            if (event.keyCode !== 229) {
                if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                    event.preventDefault();
                }
                removeMaskInputValues.call(this, event);
            }
            else {
                setTimeout(function () {
                    removeMaskInputValues.call(_this, event);
                }, 0);
            }
            var startValue = this.element.value;
            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                var collec = void 0;
                if (event.keyCode === 90 && this.undoCollec.length > 0 && startValue !== this.undoCollec[this.undoCollec.length - 1].value) {
                    collec = this.undoCollec[this.undoCollec.length - 1];
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                    setElementValue.call(this, collec.value);
                    this.element.selectionStart = collec.startIndex;
                    this.element.selectionEnd = collec.endIndex;
                    this.undoCollec.splice(this.undoCollec.length - 1, 1);
                }
                else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
                    collec = this.redoCollec[0];
                    this.undoCollec.push({
                        value: this.element.value, startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                    setElementValue.call(this, collec.value);
                    this.element.selectionStart = collec.startIndex;
                    this.element.selectionEnd = collec.endIndex;
                    this.redoCollec.splice(0, 1);
                }
            }
        }
    }
    function mobileRemoveFunction() {
        var collec;
        var sIndex = this.element.selectionStart;
        var eIndex = this.element.selectionEnd;
        if (this.redoCollec.length > 0) {
            collec = this.redoCollec[0];
            setElementValue.call(this, collec.value);
            if ((collec.startIndex - sIndex) === 1) {
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
            }
            else {
                this.element.selectionStart = sIndex + 1;
                this.element.selectionEnd = eIndex + 1;
            }
        }
        else {
            setElementValue.call(this, this.promptMask);
            this.element.selectionStart = this.element.selectionEnd = sIndex;
        }
    }
    exports.mobileRemoveFunction = mobileRemoveFunction;
    function removeMaskInputValues(event) {
        var isRemove = false;
        var oldEventVal;
        var isDeleted = false;
        if (this.element.value.length < this.promptMask.length) {
            isRemove = true;
            mobileRemoveFunction.call(this);
            oldEventVal = this.element.value;
        }
        var initStartIndex = this.element.selectionStart;
        var initEndIndex = this.element.selectionEnd;
        var startIndex = this.element.selectionStart;
        var endIndex = this.element.selectionEnd;
        var maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
        var curMask = maskValue[startIndex - 1];
        var parentElement = this.element.parentNode;
        if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
            var multipleDel = false;
            if (startIndex > 0 || ((event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length
                && ((this.element.selectionEnd - startIndex) !== this.element.value.length))) {
                var index = startIndex;
                if (startIndex !== endIndex) {
                    startIndex = endIndex;
                    if (event.keyCode === 46) {
                        multipleDel = true;
                    }
                }
                else if (event.keyCode === 46) {
                    ++index;
                }
                else {
                    --index;
                }
                for (var k = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? k > index : k < index; (event.keyCode === 8 || isRemove || multipleDel) ? k-- : k++) {
                    for (var i = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? i > 0 : i < this.element.value.length; (event.keyCode === 8 || isRemove || multipleDel) ? i-- : i++) {
                        var sIndex = void 0;
                        if (((event.keyCode === 8 || multipleDel) && ((initStartIndex !== initEndIndex && initStartIndex !== startIndex) ||
                            (initStartIndex === initEndIndex))) || isRemove) {
                            curMask = maskValue[i - 1];
                            sIndex = startIndex - 1;
                        }
                        else {
                            curMask = maskValue[i];
                            sIndex = startIndex;
                            ++startIndex;
                        }
                        var oldValue = this.element.value[sIndex];
                        if ((ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && (!ej2_base_1.isNullOrUndefined(this.customCharacters)
                            && ej2_base_1.isNullOrUndefined(this.customCharacters[curMask]))
                            && ((this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '['
                                && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']')))
                            || (this.promptMask[sIndex] !== this.promptChar && ej2_base_1.isNullOrUndefined(this.customCharacters))) {
                            this.element.selectionStart = this.element.selectionEnd = sIndex;
                            event.preventDefault();
                            if (event.keyCode === 46 && !multipleDel) {
                                ++this.element.selectionStart;
                            }
                        }
                        else {
                            var value = this.element.value;
                            var prompt_1 = this.promptChar;
                            var elementValue = value.substring(0, sIndex) + prompt_1 + value.substring(startIndex, value.length);
                            setElementValue.call(this, elementValue);
                            event.preventDefault();
                            this.element.selectionStart = this.element.selectionEnd = sIndex;
                            isDeleted = true;
                        }
                        startIndex = this.element.selectionStart;
                        if ((!isDeleted && event.keyCode === 8) || multipleDel || (!isDeleted && !(event.keyCode === 46))) {
                            sIndex = startIndex - 1;
                        }
                        else {
                            sIndex = startIndex;
                            isDeleted = false;
                        }
                        oldValue = this.element.value[sIndex];
                        if (((initStartIndex !== initEndIndex) && (this.element.selectionStart === initStartIndex))
                            || (this.promptMask[sIndex] === this.promptChar) || ((oldValue !== this.promptMask[sIndex]) &&
                            (this.promptMask[sIndex] !== this.promptChar) && !ej2_base_1.isNullOrUndefined(this.customCharacters))) {
                            break;
                        }
                    }
                }
            }
            if (this.element.selectionStart === 0 && (this.element.selectionEnd === this.element.value.length)) {
                setElementValue.call(this, this.promptMask);
                event.preventDefault();
                this.element.selectionStart = this.element.selectionEnd = startIndex;
            }
            this.redoCollec.unshift({
                value: this.element.value, startIndex: this.element.selectionStart,
                endIndex: this.element.selectionEnd
            });
            triggerMaskChangeEvent.call(this, event, oldEventVal);
        }
    }
    function maskInputKeyPressHandler(event) {
        if (this.mask) {
            var oldValue = this.element.value;
            if ((!event.ctrlKey) || (event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY'
                && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV')) {
                this.maskKeyPress = true;
                var key = event.key;
                if (key === 'Spacebar') {
                    key = String.fromCharCode(event.keyCode);
                }
                if (!key) {
                    this.isIosInvalid = true;
                    validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
                    event.preventDefault();
                    this.isIosInvalid = false;
                }
                else if (key && key.length === 1) {
                    validateValue.call(this, key, event.ctrlKey, event);
                    event.preventDefault();
                }
            }
            triggerMaskChangeEvent.call(this, event, oldValue);
        }
    }
    function triggerMaskChangeEvent(event, oldValue) {
        if (!ej2_base_1.isNullOrUndefined(this.changeEventArgs)) {
            var eventArgs = {};
            this.changeEventArgs = { value: this.element.value, maskedValue: this.element.value, isInteraction: false };
            if (this.mask) {
                this.changeEventArgs.value = strippedValue.call(this, this.element);
            }
            if (!ej2_base_1.isNullOrUndefined(event)) {
                this.changeEventArgs.isInteraction = true;
                this.changeEventArgs.event = event;
            }
            ej2_base_1.merge(eventArgs, this.changeEventArgs);
            this.trigger('change', eventArgs);
        }
        ej2_base_1.attributes(this.element, { 'aria-valuenow': this.element.value });
    }
    function maskInputKeyUpHandler(event) {
        if (this.mask) {
            var collec = void 0;
            if (!this.maskKeyPress && event.keyCode === 229) {
                var oldEventVal = void 0;
                if (this.element.value.length === 1) {
                    this.element.value = this.element.value + this.promptMask;
                    this.element.setSelectionRange(1, 1);
                }
                if (this.element.value.length > this.promptMask.length) {
                    var startIndex = this.element.selectionStart;
                    var addedValues = this.element.value.length - this.promptMask.length;
                    var val_1 = this.element.value.substring(startIndex - addedValues, startIndex);
                    if (this.undoCollec.length > 0) {
                        collec = this.undoCollec[this.undoCollec.length - 1];
                        var startIndex_1 = this.element.selectionStart;
                        oldEventVal = collec.value;
                        var oldVal = collec.value.substring(startIndex_1 - addedValues, startIndex_1);
                        collec = this.redoCollec[0];
                        val_1 = val_1.trim();
                        var isSpace = ej2_base_1.Browser.isAndroid && val_1 === '';
                        if (!isSpace && oldVal !== val_1 && collec.value.substring(startIndex_1 - addedValues, startIndex_1) !== val_1) {
                            validateValue.call(this, val_1, event.ctrlKey, event);
                        }
                        else if (isSpace) {
                            preventUnsupportedValues.call(this, event, startIndex_1 - 1, this.element.selectionEnd - 1, val_1, event.ctrlKey, false);
                        }
                    }
                    else {
                        oldEventVal = this.promptMask;
                        validateValue.call(this, val_1, event.ctrlKey, event);
                    }
                    this.maskKeyPress = false;
                    triggerMaskChangeEvent.call(this, event, oldEventVal);
                }
            }
            else {
                removeMaskError.call(this);
            }
            var val = strippedValue.call(this, this.element);
            if (!((this.element.selectionStart === 0) && (this.promptMask === this.element.value) && val === '')) {
                this.prevValue = val;
                this.value = val;
            }
        }
        else {
            triggerMaskChangeEvent.call(this, event);
            this.value = this.element.value;
        }
    }
    function mobileSwipeCheck(key) {
        if (key.length > 1 && ((this.promptMask.length + key.length) < this.element.value.length)) {
            var elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key +
                this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
            setElementValue.call(this, elementValue);
            this.element.selectionStart = this.element.selectionEnd = this.redoCollec[0].startIndex + key.length;
        }
        this.element.selectionStart = this.element.selectionStart - key.length;
        this.element.selectionEnd = this.element.selectionEnd - key.length;
    }
    function validateValue(key, isCtrlKey, event) {
        if (!this.maskKeyPress) {
            mobileSwipeCheck.call(this, key);
        }
        var startIndex = this.element.selectionStart;
        var initStartIndex = startIndex;
        var endIndex = this.element.selectionEnd;
        var curMask;
        var allowText = false;
        var value = this.element.value;
        var eventOldVal;
        var prevSupport = false;
        for (var k = 0; k < key.length; k++) {
            var keyValue = key[k];
            startIndex = this.element.selectionStart;
            endIndex = this.element.selectionEnd;
            if (!this.maskKeyPress && initStartIndex === startIndex) {
                startIndex = startIndex + k;
            }
            if ((!this.maskKeyPress || startIndex < this.promptMask.length)) {
                for (var i = startIndex; i < this.promptMask.length; i++) {
                    var maskValue = this.escapeMaskValue;
                    curMask = maskValue[startIndex];
                    if ((ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && (ej2_base_1.isNullOrUndefined(this.customCharacters)
                        || (!ej2_base_1.isNullOrUndefined(this.customCharacters) && ej2_base_1.isNullOrUndefined(this.customCharacters[curMask])))
                        && ((this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '['
                            && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']')))
                        || ((this.promptMask[startIndex] !== this.promptChar) && ej2_base_1.isNullOrUndefined(this.customCharacters))
                        || (this.promptChar === curMask && this.escapeMaskValue === this.mask)) {
                        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
                        startIndex = this.element.selectionStart;
                        curMask = this.hiddenMask[startIndex];
                    }
                }
                if (!ej2_base_1.isNullOrUndefined(this.customCharacters) && !ej2_base_1.isNullOrUndefined(this.customCharacters[curMask])) {
                    var customValStr = this.customCharacters[curMask];
                    var customValArr = customValStr.split(',');
                    for (var i = 0; i < customValArr.length; i++) {
                        if (keyValue.match(new RegExp('[' + customValArr[i] + ']'))) {
                            allowText = true;
                            break;
                        }
                    }
                }
                else if (!ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask]))
                    && this.promptMask[startIndex] === this.promptChar) {
                    allowText = true;
                }
                else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '['
                    && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']'
                    && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
                    allowText = true;
                }
                if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
                    if (k === 0) {
                        if (this.maskKeyPress) {
                            this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
                        }
                        else {
                            var sIndex = this.element.selectionStart;
                            var eIndex = this.element.selectionEnd;
                            if (this.redoCollec.length > 0) {
                                eventOldVal = this.redoCollec[0].value;
                                setElementValue.call(this, eventOldVal);
                                this.undoCollec.push(this.redoCollec[0]);
                            }
                            else {
                                this.undoCollec.push({ value: this.promptMask, startIndex: startIndex, endIndex: startIndex });
                                eventOldVal = this.promptMask;
                                setElementValue.call(this, eventOldVal);
                            }
                            this.element.selectionStart = sIndex;
                            this.element.selectionEnd = eIndex;
                        }
                    }
                    startIndex = this.element.selectionStart;
                    applySupportedValues.call(this, event, startIndex, keyValue, eventOldVal);
                    prevSupport = true;
                    if (k === key.length - 1) {
                        this.redoCollec.unshift({
                            value: this.element.value, startIndex: this.element.selectionStart,
                            endIndex: this.element.selectionEnd
                        });
                    }
                    allowText = false;
                }
                else {
                    startIndex = this.element.selectionStart;
                    preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
                }
                if (k === key.length - 1 && !allowText) {
                    if (!ej2_base_1.Browser.isAndroid || (ej2_base_1.Browser.isAndroid && startIndex < this.promptMask.length)) {
                        this.redoCollec.unshift({
                            value: this.element.value,
                            startIndex: this.element.selectionStart,
                            endIndex: this.element.selectionEnd
                        });
                    }
                }
            }
            else {
                if (key.length === 1 && !isCtrlKey && !ej2_base_1.isNullOrUndefined(event)) {
                    addMaskErrorClass.call(this);
                }
            }
        }
    }
    function applySupportedValues(event, startIndex, keyValue, eventOldVal) {
        if (this.hiddenMask.length > this.promptMask.length) {
            keyValue = changeToLowerUpperCase.call(this, keyValue, this.element.value);
        }
        var value = this.element.value;
        var elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
        setElementValue.call(this, elementValue);
        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
        triggerMaskChangeEvent.call(this, event, eventOldVal);
    }
    function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
        if (!this.maskKeyPress) {
            var eventOldVal = void 0;
            var value = this.element.value;
            if (sIdx >= this.promptMask.length) {
                setElementValue.call(this, value.substring(0, sIdx));
            }
            else {
                if (idx === sIdx) {
                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
                }
                else {
                    if (this.promptMask.length === this.element.value.length) {
                        setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
                    }
                    else {
                        setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
                    }
                }
                this.element.selectionStart = this.element.selectionEnd = (chkSupport ||
                    this.element.value[idx] !== this.promptChar) ? sIdx : idx;
            }
            eventOldVal = this.element.value;
            triggerMaskChangeEvent.call(this, event, eventOldVal);
            addMaskErrorClass.call(this);
        }
        if (key.length === 1 && !ctrl && !ej2_base_1.isNullOrUndefined(event)) {
            addMaskErrorClass.call(this);
        }
    }
    function addMaskErrorClass() {
        var _this = this;
        var parentElement = this.element.parentNode;
        var timer = 200;
        if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
            ej2_base_1.addClass([parentElement], ERROR);
        }
        else {
            ej2_base_1.addClass([this.element], ERROR);
        }
        if (this.isIosInvalid === true) {
            timer = 400;
        }
        ej2_base_1.attributes(this.element, { 'aria-invalid': 'true' });
        setTimeout(function () {
            if (!_this.maskKeyPress) {
                removeMaskError.call(_this);
            }
        }, timer);
    }
    function removeMaskError() {
        var parentElement = this.element.parentNode;
        ej2_base_1.removeClass([parentElement], ERROR);
        ej2_base_1.removeClass([this.element], ERROR);
        ej2_base_1.attributes(this.element, { 'aria-invalid': 'false' });
    }
    function changeToLowerUpperCase(key, value) {
        var promptMask;
        var i;
        var j = 0;
        var curVal = value;
        var caseCount = 0;
        for (i = 0; i < this.hiddenMask.length; i++) {
            if (this.hiddenMask[i] === '\\') {
                promptMask = curVal.substring(0, i) + '\\' + curVal.substring(i, curVal.length);
            }
            if (this.hiddenMask[i] === '>' || this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|') {
                if (this.hiddenMask[i] !== curVal[i]) {
                    promptMask = curVal.substring(0, i) + this.hiddenMask[i] + curVal.substring(i, curVal.length);
                }
                ++caseCount;
            }
            if (promptMask) {
                if (((promptMask[i] === this.promptChar) && (i > this.element.selectionStart)) ||
                    (this.element.value.indexOf(this.promptChar) < 0 && (this.element.selectionStart + caseCount) === i)) {
                    caseCount = 0;
                    break;
                }
                curVal = promptMask;
            }
        }
        while (i >= 0 && promptMask) {
            if (i === 0 || promptMask[i - 1] !== '\\') {
                var val = this.element.value;
                if (promptMask[i] === '>') {
                    key = key.toUpperCase();
                    break;
                }
                else if (promptMask[i] === '<') {
                    key = key.toLowerCase();
                    break;
                }
                else if (promptMask[i] === '|') {
                    break;
                }
            }
            --i;
        }
        return key;
    }
    function setMaskValue(val) {
        if (this.mask && !ej2_base_1.isNullOrUndefined(val) && (val === '' || this.prevValue !== val)) {
            this.maskKeyPress = true;
            setElementValue.call(this, this.promptMask);
            if (val !== '') {
                this.element.selectionStart = 0;
                this.element.selectionEnd = 0;
            }
            for (var i = 0; i < val.length; i++) {
                validateValue.call(this, val[i], false, null);
            }
            this.value = strippedValue.call(this, this.element);
            this.maskKeyPress = false;
            var labelElement = this.element.parentNode.querySelector('.e-float-text');
            if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' &&
                !ej2_base_1.isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
                ej2_base_1.removeClass([labelElement], TOPLABEL);
                ej2_base_1.addClass([labelElement], BOTTOMLABEL);
                setElementValue.call(this, '');
            }
        }
    }
    exports.setMaskValue = setMaskValue;
    function setElementValue(val, element) {
        if (!this.isFocus && this.floatLabelType === 'Auto' && ej2_base_1.isNullOrUndefined(this.value)) {
            val = '';
        }
        input_1.Input.setValue(val, (element ? element : this.element), this.floatLabelType);
    }
    exports.setElementValue = setElementValue;
    function maskInput(args) {
        var inputEle = getMaskInput(args);
        applyMask.call(inputEle);
        var val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (args.mask) {
            unwireEvents.call(inputEle);
            wireEvents.call(inputEle);
        }
    }
    exports.maskInput = maskInput;
    function getMaskInput(args) {
        ej2_base_1.addClass([args.element], UTILMASK);
        var inputEle = {
            element: args.element,
            mask: args.mask,
            promptMask: '',
            hiddenMask: '',
            escapeMaskValue: '',
            promptChar: args.promptChar ? (args.promptChar.length > 1) ? args.promptChar = args.promptChar[0]
                : args.promptChar : '_',
            value: args.value ? args.value : null,
            regExpCollec: exports.regularExpressions,
            customRegExpCollec: [],
            customCharacters: args.customCharacters,
            undoCollec: [],
            redoCollec: [],
            maskKeyPress: false,
            prevValue: ''
        };
        createMask.call(inputEle);
        return inputEle;
    }
    function getVal(args) {
        return strippedValue.call(getUtilMaskEle(args), args.element);
    }
    exports.getVal = getVal;
    function getMaskedVal(args) {
        return unstrippedValue.call(getUtilMaskEle(args), args.element);
    }
    exports.getMaskedVal = getMaskedVal;
    function getUtilMaskEle(args) {
        var value = '';
        var inputEle;
        if (!ej2_base_1.isNullOrUndefined(args) && args.element.classList.contains(UTILMASK)) {
            inputEle = getMaskInput(args);
        }
        return inputEle;
    }
    var MaskUndo = (function () {
        function MaskUndo() {
        }
        return MaskUndo;
    }());
    exports.MaskUndo = MaskUndo;
    var maskUndo = new MaskUndo();
});
