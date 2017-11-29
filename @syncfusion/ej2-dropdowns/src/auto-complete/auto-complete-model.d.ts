import { Property, addClass, EventHandler, KeyboardEventArgs, isNullOrUndefined, detach, Event, EmitType } from '@syncfusion/ej2-base';import { removeClass, attributes, NotifyPropertyChanges } from '@syncfusion/ej2-base';import { dropDownListClasses, FilteringEventArgs } from '../drop-down-list/drop-down-list';import { ComboBox } from '../combo-box/combo-box';import { highlightSearch } from '../common/highlight-search';import { Search } from '../common/incremental-search';import { FieldSettings, SPINNER_SIZE } from '../drop-down-base/drop-down-base';import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';import { FloatLabelType, Input } from '@syncfusion/ej2-inputs';import { SortOrder } from '@syncfusion/ej2-lists';import { DataManager, Query } from '@syncfusion/ej2-data';
import {FilterType,FilteringArgs} from "./auto-complete";
import {ComboBoxModel} from "../combo-box/combo-box-model";

/**
 * Interface for a class AutoComplete
 */
export interface AutoCompleteModel extends ComboBoxModel{

    /**
     * The `fields` property maps the columns of the data table and binds the data to the component.
     * @default { value: null, iconCss: null, groupBy: null}
     */
    fields?: FieldSettings;

    /**
     * When set to ‘false’, consider the case-sensitive on performing the search to find suggestions.
     * By default not consider the casing.
     * @default true.
     */
    ignoreCase?: boolean;

    /**
     * Allows you to either show or hide the popup button on the component.
     * @default false.
     */
    showPopupButton?: boolean;

    /**
     * When set to ‘true’, highlight the searched characters on suggested list items.
     * @default false.
     */
    highlight?: boolean;

    /**
     * Display the specified number of list items on the suggestion popup.
     * @default 20.
     */
    suggestionCount?: number;

    /**
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let games: AutoComplete = new AutoComplete({
     *      dataSource: ['Tennis', 'FootBall', 'Cricket'],
     *      htmlAttributes: { title: 'List of games available here.' }
     *   });
     *   games.appendTo("#list");
     * ```
     * @default {}.
     */
    htmlAttributes?: { [key: string]: string; };

    /**
     * Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
     * that execute along with data processing.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let searchData: { [key: string]: Object; }[] = [ {id: 's1', country: 'California'}, {id: 's2', country: 'India'},
     * {id: 's3', country: 'USA'}, {id: 's4', country: 'England'}]   
     *   let customers: AutoComplete = new AutoComplete({
     *      dataSource:new DataManager({ url:'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/' }),
     *      query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(5),
     *      fields: { text: 'ContactName', value: 'CustomerID' },
     *      placeholder: 'Select a customer'
     *   });
     *   customers.appendTo("#list");
     * ```
     * @default null.
     */
    query?: Query;

    /**
     * Allows you to set the minimum search character length, the search action will perform after typed minimum characters.
     * @default 1.
     */
    minLength?: number;

    /**
     * Determines on which filter type, the component needs to be considered on search action. 
     * The available `filterType` and its supported data types are 
     * 
     * <table> 
     * <tr> 
     * <td colSpan=1 rowSpan=1> 
     * FilterType<br/></td><td colSpan=1 rowSpan=1> 
     * Description<br/></td><td colSpan=1 rowSpan=1> 
     * Supported Types<br/></td></tr> 
     * <tr> 
     * <td colSpan=1 rowSpan=1> 
     * StartsWith<br/></td><td colSpan=1 rowSpan=1> 
     * Checks whether a value begins with the specified value.<br/></td><td colSpan=1 rowSpan=1> 
     * String<br/></td></tr> 
     * <tr> 
     * <td colSpan=1 rowSpan=1> 
     * EndsWith<br/></td><td colSpan=1 rowSpan=1> 
     * Checks whether a value ends with specified value.<br/><br/></td><td colSpan=1 rowSpan=1> 
     * <br/>String<br/></td></tr> 
     * <tr> 
     * <td colSpan=1 rowSpan=1> 
     * Contains<br/></td><td colSpan=1 rowSpan=1> 
     * Checks whether a value contains with specified value.<br/><br/></td><td colSpan=1 rowSpan=1> 
     * <br/>String<br/></td></tr> 
     * </table> 
     * 
     * The default value set to ‘Contains’, all the suggestion items which contain typed characters to listed in the suggestion popup.
     * @default 'Contains'.
     */
    filterType?: FilterType;

    /**
     * Triggers on typing a character in the component.
     * @event
     */
    filtering?: EmitType<FilteringArgs>;

    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    index?: number;

    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    valueTemplate?: string;

    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    filterBarPlaceholder?: string;

    /**
     * Not applicable to this component. 
     * @default false.
     * @private
     */
    allowFiltering?: boolean;

    /**
     * Not applicable to this component. 
     * @default null.
     * @private
     */
    text?: string;

}