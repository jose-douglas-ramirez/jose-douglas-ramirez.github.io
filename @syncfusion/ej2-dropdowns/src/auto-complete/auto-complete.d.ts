/// <reference path="../combo-box/combo-box-model.d.ts" />
import { KeyboardEventArgs, EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '../drop-down-list/drop-down-list';
import { ComboBox } from '../combo-box/combo-box';
import { AutoCompleteModel } from '../auto-complete/auto-complete-model';
import { FieldSettings } from '../drop-down-base/drop-down-base';
import { Query } from '@syncfusion/ej2-data';
export declare type FilterType = 'Contains' | 'StartsWith' | 'EndsWith';
/**
 * The AutoComplete component provides the matched suggestion list when type into the input,
 * from which the user can select one.
 * ```html
 * <input id="list" type="text"/>
 * ```
 * ```typescript
 *   let atcObj:AutoComplete = new AutoComplete();
 *   atcObj.appendTo("#list");
 * ```
 */
export declare class AutoComplete extends ComboBox {
    private isFiltered;
    /**
     * The `fields` property maps the columns of the data table and binds the data to the component.
     * @default { value: null, iconCss: null, groupBy: null}
     */
    fields: FieldSettings;
    /**
     * When set to ‘false’, consider the case-sensitive on performing the search to find suggestions.
     * By default not consider the casing.
     * @default true.
     */
    ignoreCase: boolean;
    /**
     * Allows you to either show or hide the popup button on the component.
     * @default false.
     */
    showPopupButton: boolean;
    /**
     * When set to ‘true’, highlight the searched characters on suggested list items.
     * @default false.
     */
    highlight: boolean;
    /**
     * Display the specified number of list items on the suggestion popup.
     * @default 20.
     */
    suggestionCount: number;
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
    htmlAttributes: {
        [key: string]: string;
    };
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
    query: Query;
    /**
     * Allows you to set the minimum search character length, the search action will perform after typed minimum characters.
     * @default 1.
     */
    minLength: number;
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
    filterType: FilterType;
    /**
     * Triggers on typing a character in the component.
     * @event
     */
    filtering: EmitType<FilteringArgs>;
    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    index: number;
    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    valueTemplate: string;
    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    filterBarPlaceholder: string;
    /**
     * Not applicable to this component.
     * @default false.
     * @private
     */
    allowFiltering: boolean;
    /**
     * Not applicable to this component.
     * @default null.
     * @private
     */
    text: string;
    /**
     * * Constructor for creating the widget
     */
    constructor(options?: AutoCompleteModel, element?: string | HTMLElement);
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void;
    protected getNgDirective(): string;
    protected getQuery(query: Query): Query;
    protected searchLists(e: KeyboardEventArgs): void;
    private filterAction(dataSource, query?, fields?);
    protected clear(property?: string): void;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    private postBackAction();
    protected setSelection(li: Element, e: MouseEvent | KeyboardEventArgs | TouchEvent): void;
    protected showSpinner(): void;
    protected hideSpinner(): void;
    protected isFiltering(): boolean;
    protected renderPopup(): void;
    protected isEditTextBox(): boolean;
    protected isPopupButton(): boolean;
    protected isSelectFocusItem(element: Element): boolean;
    /**
     * Search the entered text and show it in the suggestion list if available.
     * @returns void.
     */
    showPopup(): void;
    /**
     * Hides the popup if it is in open state.
     * @returns void.
     */
    hidePopup(): void;
    /**
     * Dynamically change the value of properties.
     * @private
     */
    onPropertyChanged(newProp: AutoCompleteModel, oldProp: AutoCompleteModel): void;
    /**
     * Return the module name of this component.
     * @private
     */
    getModuleName(): string;
    /**
     * To initialize the control rendering
     * @private
     */
    render(): void;
}
export interface FilteringArgs extends FilteringEventArgs {
    /**
     * To prevent the internal filtering action.
     */
    preventDefaultAction: boolean;
}
