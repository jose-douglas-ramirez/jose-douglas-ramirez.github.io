import { EventHandler, Property, Event, EmitType, addClass, Browser, KeyboardEventArgs, removeClass } from '@syncfusion/ej2-base';import { isNullOrUndefined, NotifyPropertyChanges } from '@syncfusion/ej2-base';import { DropDownList, dropDownListClasses, FilteringEventArgs } from '../drop-down-list/drop-down-list';import { FieldSettings, SPINNER_SIZE } from '../drop-down-base/drop-down-base';import { Search } from '../common/incremental-search';import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';import { Input, InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';import { SortOrder } from '@syncfusion/ej2-lists';import { DataManager, Query } from '@syncfusion/ej2-data';
import {CustomValueSpecifierEventArgs} from "./combo-box";
import {DropDownListModel} from "../drop-down-list/drop-down-list-model";

/**
 * Interface for a class ComboBox
 */
export interface ComboBoxModel extends DropDownListModel{

    /**
     * Specifies whether suggest a first matched item in input when searching. No action happens when no matches found.
     * @default false.
     */
    autofill?: boolean;

    /**
     * Specifies whether the component allows user defined value which does not exist in data source.    
     * @default true.
     */
    allowCustom?: boolean;

    /**
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let games: ComboBox = new ComboBox({
     *      dataSource: ['Tennis', 'FootBall', 'Cricket'],
     *      htmlAttributes: { title: 'List of games available here.' }
     *   });
     *   games.appendTo("#list");
     * ```
     * @default {}.
     */
    htmlAttributes?: { [key: string]: string; };

    /**
     * When allowFiltering is set to true, show the filter bar (search box) of the component.
     * The filter action retrieves matched items through the `filtering` event based on
     * the characters typed in the search TextBox.
     * If no match is found, the value of the `noRecordsTemplate` property will be displayed.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let searchData: { [key: string]: Object; }[] = [ {id: 's1', country: 'California'}, {id: 's2', country: 'India'},
     * {id: 's3', country: 'USA'}, {id: 's4', country: 'England'}]   
     *   let countries: ComboBox = new ComboBox({
     *      dataSource: searchData,
     *      fields: { text: "country", value: "id" },
     *      allowFiltering: true,
     *      filtering: function (e: FilteringEventArgs) {
     *          let query = new Query();
     *          query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;
     *          e.updateData(searchData, query);
     *      }
     *   });
     *   countries.appendTo("#list");
     * ```
     * @default false.
     */
    allowFiltering?: boolean;

    /**
     * Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
     * that execute along with data processing.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let searchData: { [key: string]: Object; }[] = [ {id: 's1', country: 'California'}, {id: 's2', country: 'India'},
     * {id: 's3', country: 'USA'}, {id: 's4', country: 'England'}]   
     *   let customers: ComboBox = new ComboBox({
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
     * Specifies whether to show or hide the clear button. 
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
     * @default true.
     */
    showClearButton?: boolean;

    /**
     * Triggers on set a custom value to this component.
     * @event
     */
    customValueSpecifier?: EmitType<CustomValueSpecifierEventArgs>;

    /**
     * Triggers on typing a character in the component.
     * @event
     */
    filtering?: EmitType<FilteringEventArgs>;

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

}