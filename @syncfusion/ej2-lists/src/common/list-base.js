define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-data"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssClass = {
        li: 'e-list-item',
        ul: 'e-list-parent e-ul',
        group: 'e-list-group-item',
        icon: 'e-list-icon',
        text: 'e-list-text',
        check: 'e-list-check',
        checked: 'e-checked',
        selected: 'e-selected',
        expanded: 'e-expanded',
        textContent: 'e-text-content',
        hasChild: 'e-has-child',
        level: 'e-level',
        url: 'e-list-url',
        collapsible: 'e-icon-collapsible',
        disabled: 'e-disabled',
        image: 'e-list-img',
        iconWrapper: 'e-icon-wrapper'
    };
    var ListBase;
    (function (ListBase) {
        ListBase.defaultMappedFields = {
            id: 'id',
            text: 'text',
            url: 'url',
            value: 'value',
            isChecked: 'isChecked',
            enabled: 'enabled',
            expanded: 'expanded',
            selected: 'selected',
            iconCss: 'iconCss',
            child: 'child',
            isVisible: 'isVisible',
            hasChildren: 'hasChildren',
            tooltip: 'tooltip',
            htmlAttributes: 'htmlAttributes',
            urlAttributes: 'urlAttributes',
            imageAttributes: 'imageAttributes',
            imageUrl: 'imageUrl',
            groupBy: null
        };
        var defaultAriaAttributes = {
            level: 1,
            listRole: 'presentation',
            itemRole: 'presentation',
            groupItemRole: 'group',
            itemText: 'list-item',
            wrapperRole: 'presentation'
        };
        var defaultListBaseOptions = {
            showCheckBox: false,
            showIcon: false,
            expandCollapse: false,
            fields: ListBase.defaultMappedFields,
            ariaAttributes: defaultAriaAttributes,
            listClass: '',
            itemClass: '',
            processSubChild: false,
            sortOrder: 'None',
            template: null,
            groupTemplate: null,
            expandIconClass: 'e-icon-collapsible',
            moduleName: 'list',
            expandIconPosition: 'right'
        };
        function createList(dataSource, options, isSingleLevel) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var type = typeofData(dataSource).typeof;
            if (type === 'string' || type === 'number') {
                return createListFromArray(dataSource, isSingleLevel, options);
            }
            else {
                return createListFromJson(dataSource, options, ariaAttributes.level, isSingleLevel);
            }
        }
        ListBase.createList = createList;
        function createListFromArray(dataSource, isSingleLevel, options) {
            var subChild = createListItemFromArray(dataSource, isSingleLevel, options);
            return generateUL(subChild, null, options);
        }
        ListBase.createListFromArray = createListFromArray;
        function createListItemFromArray(dataSource, isSingleLevel, options) {
            var subChild = [];
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var id = genUID();
            for (var i = 0; i < dataSource.length; i++) {
                if (ej2_base_1.isNullOrUndefined(dataSource[i])) {
                    continue;
                }
                var li = void 0;
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i],
                        options: curOpt
                    };
                    curOpt.itemCreating(curData);
                }
                if (isSingleLevel) {
                    li = generateSingleLevelLI(dataSource[i], null, null, [], null, id, i, options);
                }
                else {
                    li = generateLI(dataSource[i], null, null, options);
                }
                if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i],
                        item: li,
                        options: curOpt
                    };
                    curOpt.itemCreated(curData);
                }
                subChild.push(li);
            }
            return subChild;
        }
        ListBase.createListItemFromArray = createListItemFromArray;
        function createListItemFromJson(dataSource, options, level, isSingleLevel) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var fields = ej2_base_1.extend({}, ListBase.defaultMappedFields, curOpt.fields);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var id;
            if (level) {
                ariaAttributes.level = level;
            }
            var child = [];
            var li;
            if (Object.keys(dataSource).length && !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
                id = genUID();
            }
            for (var i = 0; i < dataSource.length; i++) {
                if (ej2_base_1.isNullOrUndefined(dataSource[i])) {
                    continue;
                }
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i][fields.text],
                        options: curOpt,
                        fields: fields
                    };
                    curOpt.itemCreating(curData);
                }
                var curItem = dataSource[i];
                if (Object.keys(dataSource).length && dataSource[i].hasOwnProperty(fields.id)
                    && !ej2_base_1.isNullOrUndefined(dataSource[i][fields.id])) {
                    id = dataSource[i].id;
                }
                var innerEle = [];
                if (curOpt.showCheckBox) {
                    innerEle.push(ej2_base_2.createElement('input', { className: exports.cssClass.check, attrs: { type: 'checkbox' } }));
                }
                if (isSingleLevel === true) {
                    if (curOpt.showIcon && curItem.hasOwnProperty(fields.iconCss)) {
                        if (!ej2_base_1.isNullOrUndefined(curItem[fields.iconCss])) {
                            innerEle.push(ej2_base_2.createElement('span', { className: exports.cssClass.icon + ' ' + curItem[fields.iconCss] }));
                        }
                    }
                    li = generateSingleLevelLI(curItem, fields, curOpt.itemClass, innerEle, (curItem.hasOwnProperty('isHeader') &&
                        curItem.isHeader) ? true : false, id, i, options);
                }
                else {
                    li = generateLI(curItem, fields, curOpt.itemClass, options);
                    li.classList.add(exports.cssClass.level + '-' + ariaAttributes.level);
                    li.setAttribute('aria-level', ariaAttributes.level.toString());
                    if (curItem.hasOwnProperty(fields.tooltip)) {
                        li.setAttribute('title', curItem[fields.tooltip]);
                    }
                    if (curItem.hasOwnProperty(fields.htmlAttributes) && curItem[fields.htmlAttributes]) {
                        setAttribute(li, curItem[fields.htmlAttributes]);
                    }
                    if (curItem.hasOwnProperty(fields.enabled) && curItem[fields.enabled] === false) {
                        li.classList.add(exports.cssClass.disabled);
                    }
                    if (curItem.hasOwnProperty(fields.isVisible) && curItem[fields.isVisible] === false) {
                        li.style.display = 'none';
                    }
                    if (curItem.hasOwnProperty(fields.imageUrl) && !ej2_base_1.isNullOrUndefined(curItem[fields.imageUrl])) {
                        var attr = { src: curItem[fields.imageUrl] };
                        if (curItem.hasOwnProperty(fields.imageUrl)) {
                            ej2_base_1.merge(attr, curItem[fields.imageAttributes]);
                        }
                        ej2_base_2.prepend([ej2_base_2.createElement('img', { className: exports.cssClass.image, attrs: attr })], li.firstElementChild);
                    }
                    if (curOpt.showIcon && curItem.hasOwnProperty(fields.iconCss) && !curOpt.template) {
                        if (!ej2_base_1.isNullOrUndefined(curItem[fields.iconCss])) {
                            ej2_base_2.prepend([ej2_base_2.createElement('div', { className: exports.cssClass.icon + ' ' + curItem[fields.iconCss] })], li.firstElementChild);
                        }
                    }
                    if (innerEle.length) {
                        ej2_base_2.prepend(innerEle, li.firstElementChild);
                    }
                    processSubChild(curItem, fields, dataSource, curOpt, li, ariaAttributes.level);
                }
                if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i][fields.text],
                        item: li,
                        options: curOpt,
                        fields: fields
                    };
                    curOpt.itemCreated(curData);
                }
                child.push(li);
            }
            return child;
        }
        ListBase.createListItemFromJson = createListItemFromJson;
        function createListFromJson(dataSource, options, level, isSingleLevel) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var li = createListItemFromJson(dataSource, options, level, isSingleLevel);
            return generateUL(li, curOpt.listClass, options);
        }
        ListBase.createListFromJson = createListFromJson;
        function getSiblingLI(elementArray, element, isPrevious) {
            exports.cssClass = getModuleClass(defaultListBaseOptions.moduleName);
            if (!elementArray || !elementArray.length) {
                return void 0;
            }
            var siblingLI;
            var liIndex;
            var liCollections = Array.prototype.slice.call(elementArray);
            if (element) {
                liIndex = indexOf(element, liCollections);
            }
            else {
                liIndex = (isPrevious === true ? liCollections.length : -1);
            }
            siblingLI = liCollections[liIndex + (isPrevious === true ? -1 : 1)];
            while (siblingLI && (!ej2_base_2.isVisible(siblingLI) || siblingLI.classList.contains(exports.cssClass.disabled))) {
                liIndex = liIndex + (isPrevious === true ? -1 : 1);
                siblingLI = liCollections[liIndex];
            }
            return siblingLI;
        }
        ListBase.getSiblingLI = getSiblingLI;
        function indexOf(item, elementArray) {
            if (!elementArray || !item) {
                return void 0;
            }
            else {
                var liCollections = elementArray;
                liCollections = Array.prototype.slice.call(elementArray);
                return liCollections.indexOf(item);
            }
        }
        ListBase.indexOf = indexOf;
        function groupDataSource(dataSource, fields, sortOrder) {
            if (sortOrder === void 0) { sortOrder = 'None'; }
            var cusQuery = new ej2_data_1.Query().group(fields.groupBy);
            cusQuery = addSorting(sortOrder, 'key', cusQuery);
            var ds = getDataSource(dataSource, cusQuery);
            dataSource = [];
            for (var j = 0; j < ds.length; j++) {
                var itemObj = ds[j].items;
                var grpItem = {};
                var hdr = 'isHeader';
                grpItem[fields.text] = ds[j].key;
                grpItem[hdr] = true;
                grpItem.items = itemObj;
                dataSource.push(grpItem);
                for (var k = 0; k < itemObj.length; k++) {
                    dataSource.push(itemObj[k]);
                }
            }
            return dataSource;
        }
        ListBase.groupDataSource = groupDataSource;
        function addSorting(sortOrder, sortBy, query) {
            if (query === void 0) { query = new ej2_data_1.Query(); }
            if (sortOrder === 'Ascending') {
                query.sortBy(sortBy, 'ascending', true);
            }
            else if (sortOrder === 'Descending') {
                query.sortBy(sortBy, 'descending', true);
            }
            return query;
        }
        ListBase.addSorting = addSorting;
        function getDataSource(dataSource, query) {
            return new ej2_data_1.DataManager(dataSource)
                .executeLocal(query);
        }
        ListBase.getDataSource = getDataSource;
        function createJsonFromElement(element, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var fields = ej2_base_1.extend({}, ListBase.defaultMappedFields, curOpt.fields);
            var curEle = element.cloneNode(true);
            var jsonAr = [];
            curEle.classList.add('json-parent');
            var childs = curEle.querySelectorAll('.json-parent>li');
            curEle.classList.remove('json-parent');
            var _loop_1 = function (i) {
                var li = childs[i];
                var anchor = li.querySelector('a');
                var ul = li.querySelector('ul');
                var json = {};
                var childNodes = anchor ? anchor.childNodes : li.childNodes;
                Object.keys(childNodes).forEach(function (key) {
                    if (!(childNodes[Number(key)]).hasChildNodes()) {
                        json[fields.text] = childNodes[Number(key)].textContent;
                    }
                });
                json[fields.id] = genUID();
                var attributes_1 = getAllAttributes(li);
                if (Object.keys(attributes_1).length) {
                    json[fields.htmlAttributes] = attributes_1;
                }
                if (anchor) {
                    attributes_1 = getAllAttributes(anchor);
                    if (Object.keys(attributes_1).length) {
                        json[fields.urlAttributes] = attributes_1;
                    }
                }
                if (ul) {
                    json[fields.child] = createJsonFromElement(ul, options);
                }
                jsonAr.push(json);
            };
            for (var i = 0; i < childs.length; i++) {
                _loop_1(i);
            }
            return jsonAr;
        }
        ListBase.createJsonFromElement = createJsonFromElement;
        function typeofData(data) {
            var match = { typeof: null, item: null };
            for (var i = 0; i < data.length; i++) {
                if (!ej2_base_1.isNullOrUndefined(data[i])) {
                    return match = { typeof: typeof data[i], item: data[i] };
                }
            }
            return match;
        }
        function setAttribute(element, elementAttributes) {
            var attr = {};
            ej2_base_1.merge(attr, elementAttributes);
            if (attr.class) {
                ej2_base_2.addClass([element], attr.class.split(' '));
                delete attr.class;
            }
            ej2_base_2.attributes(element, attr);
        }
        function getAllAttributes(element) {
            var attributes = {};
            var attr = element.attributes;
            for (var index = 0; index < attr.length; index++) {
                attributes[attr[index].nodeName] = attr[index].nodeValue;
            }
            return attributes;
        }
        function renderContentTemplate(template, dataSource, fields) {
            exports.cssClass = getModuleClass(defaultListBaseOptions.moduleName);
            var ulElement = ej2_base_2.createElement('ul', { className: exports.cssClass.ul, attrs: { role: 'presentation' } });
            var compiledString = ej2_base_3.compile(template);
            var liCollection = [];
            var id = genUID();
            for (var i = 0; i < dataSource.length; i++) {
                var item = dataSource[i];
                var isHeader = item.isHeader;
                var li = ej2_base_2.createElement('li', {
                    id: id + '-' + i,
                    className: isHeader ? exports.cssClass.group : exports.cssClass.li, attrs: { role: 'presentation' }
                });
                if (isHeader) {
                    li.innerText = item[fields.text];
                }
                else {
                    ej2_base_2.append(compiledString(item), li);
                    var value = item[fields.value];
                    li.setAttribute('data-value', value);
                    li.setAttribute('role', 'option');
                }
                liCollection.push(li);
            }
            ej2_base_2.append(liCollection, ulElement);
            return ulElement;
        }
        ListBase.renderContentTemplate = renderContentTemplate;
        function renderGroupTemplate(groupTemplate, groupDataSource, fields, headerItems) {
            var compiledString = ej2_base_3.compile(groupTemplate);
            var category = fields.groupBy;
            var headerData = {};
            for (var _i = 0, headerItems_1 = headerItems; _i < headerItems_1.length; _i++) {
                var header = headerItems_1[_i];
                headerData[category] = header.textContent;
                header.innerHTML = '';
                ej2_base_2.append(compiledString(headerData), header);
            }
            return headerItems;
        }
        ListBase.renderGroupTemplate = renderGroupTemplate;
        function genUID() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        function processSubChild(curItem, fields, ds, options, element, level) {
            var subDS = curItem[fields.child] || [];
            var hasChildren = curItem[fields.hasChildren];
            if (subDS.length) {
                hasChildren = true;
                element.classList.add(exports.cssClass.hasChild);
                if (options.processSubChild) {
                    var subLi = createListFromJson(subDS, options, ++level);
                    element.appendChild(subLi);
                }
            }
            if (!!options.expandCollapse && hasChildren && !options.template) {
                if (element.firstElementChild.classList.contains(exports.cssClass.textContent)) {
                    element.firstElementChild.classList.add(exports.cssClass.iconWrapper);
                }
                var expandElement = options.expandIconPosition === 'left' ? ej2_base_2.prepend : ej2_base_2.append;
                expandElement([ej2_base_2.createElement('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + exports.cssClass.textContent));
            }
        }
        function generateSingleLevelLI(item, fields, className, innerElements, grpLI, id, index, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var text = item;
            var value = item;
            var dataSource;
            if (typeof item !== 'string' && typeof item !== 'number') {
                dataSource = item;
                text = item[fields.text] || '';
                value = item[fields.value];
            }
            var elementID;
            if (!ej2_base_1.isNullOrUndefined(dataSource) && !ej2_base_1.isNullOrUndefined(dataSource[fields.id])
                && dataSource[fields.id] !== '') {
                elementID = id;
            }
            else {
                elementID = id + '-' + index;
            }
            var li = ej2_base_2.createElement('li', {
                className: (grpLI === true ? exports.cssClass.group : exports.cssClass.li) + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                id: elementID, attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                    { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
            });
            if (dataSource && dataSource.hasOwnProperty(fields.enabled) && dataSource[fields.enabled].toString() === 'false') {
                li.classList.add(exports.cssClass.disabled);
            }
            if (grpLI) {
                li.innerText = text;
            }
            else {
                if (!ej2_base_1.isNullOrUndefined(value)) {
                    li.setAttribute('data-value', value);
                }
                li.setAttribute('role', 'option');
                if (dataSource && dataSource.hasOwnProperty(fields.htmlAttributes) && dataSource[fields.htmlAttributes]) {
                    setAttribute(li, dataSource[fields.htmlAttributes]);
                }
                if (innerElements.length) {
                    ej2_base_2.append(innerElements, li);
                }
                if (dataSource && dataSource.hasOwnProperty(fields.url) && dataSource[fields.url]) {
                    li.appendChild(anchorTag(dataSource, fields, text));
                }
                else {
                    li.appendChild(document.createTextNode(text));
                }
            }
            return li;
        }
        function getModuleClass(moduleName) {
            var moduleClass;
            return moduleClass = {
                li: "e-" + moduleName + "-item",
                ul: "e-" + moduleName + "-parent e-ul",
                group: "e-" + moduleName + "-group-item",
                icon: "e-" + moduleName + "-icon",
                text: "e-" + moduleName + "-text",
                check: "e-" + moduleName + "-check",
                checked: 'e-checked',
                selected: 'e-selected',
                expanded: 'e-expanded',
                textContent: 'e-text-content',
                hasChild: 'e-has-child',
                level: 'e-level',
                url: "e-" + moduleName + "-url",
                collapsible: 'e-icon-collapsible',
                disabled: 'e-disabled',
                image: "e-" + moduleName + "-img",
                iconWrapper: 'e-icon-wrapper'
            };
        }
        function anchorTag(dataSource, fields, text) {
            var attr = { href: dataSource[fields.url] };
            if (dataSource.hasOwnProperty(fields.urlAttributes) && dataSource[fields.urlAttributes]) {
                ej2_base_1.merge(attr, dataSource[fields.urlAttributes]);
            }
            var anchorTag = ej2_base_2.createElement('a', { className: exports.cssClass.text + ' ' + exports.cssClass.url, innerHTML: text });
            setAttribute(anchorTag, attr);
            return anchorTag;
        }
        function generateLI(item, fields, className, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var text = item;
            var uID;
            var grpLI;
            var dataSource;
            if (typeof item !== 'string') {
                dataSource = item;
                text = item[fields.text] || '';
                uID = item[fields.id];
                grpLI = (item.hasOwnProperty('isHeader') && item.isHeader)
                    ? true : false;
            }
            var li = ej2_base_2.createElement('li', {
                className: (grpLI === true ? exports.cssClass.group : exports.cssClass.li) + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                    { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
            });
            if (uID) {
                li.setAttribute('data-uid', uID);
            }
            if (grpLI && options && options.groupTemplate) {
                var compiledString = ej2_base_3.compile(options.groupTemplate);
                ej2_base_2.append(compiledString(item), li);
            }
            else if (!grpLI && options && options.template) {
                var compiledString = ej2_base_3.compile(options.template);
                ej2_base_2.append(compiledString(item), li);
            }
            else {
                var innerDiv = ej2_base_2.createElement('div', { className: exports.cssClass.textContent,
                    attrs: (ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {}) });
                if (dataSource && dataSource.hasOwnProperty(fields.url) && dataSource[fields.url]) {
                    innerDiv.appendChild(anchorTag(dataSource, fields, text));
                }
                else {
                    innerDiv.appendChild(ej2_base_2.createElement('span', { className: exports.cssClass.text, innerHTML: text,
                        attrs: (ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {}) }));
                }
                li.appendChild(innerDiv);
            }
            return li;
        }
        function generateUL(liElement, className, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var ulElement = ej2_base_2.createElement('ul', {
                className: exports.cssClass.ul + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                attrs: (ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {})
            });
            ej2_base_2.append(liElement, ulElement);
            return ulElement;
        }
        ListBase.generateUL = generateUL;
        function generateIcon(liElement, className, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var expandElement = curOpt.expandIconPosition === 'left' ? ej2_base_2.prepend : ej2_base_2.append;
            expandElement([ej2_base_2.createElement('div', { className: 'e-icons ' + curOpt.expandIconClass + ' ' +
                        (ej2_base_1.isNullOrUndefined(className) ? '' : className) })], liElement.querySelector('.' + exports.cssClass.textContent));
            return liElement;
        }
        ListBase.generateIcon = generateIcon;
    })(ListBase = exports.ListBase || (exports.ListBase = {}));
});
