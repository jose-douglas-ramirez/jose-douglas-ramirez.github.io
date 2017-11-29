/// <reference path="../drop-down-list/drop-down-list-model.d.ts" />
import { EmitType, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { DropDownList, FilteringEventArgs } from '../drop-down-list/drop-down-list';
import { ComboBoxModel } from '../combo-box/combo-box-model';
import { InputObject } from '@syncfusion/ej2-inputs';
import { Query } from '@syncfusion/ej2-data';
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```html
 * <select id="list">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 *   let games:ComboBox = new ComboBox();
 *   games.appendTo("#list");
 * ```
 */
export declare class ComboBox extends DropDownList {
    /**
     * Specifies whether suggest a first matched item in input when searching. No action happens when no matches found.
     * @default false.
     */
    autofill: boolean;
    /**
     * Specifies whether the component allows user defined value which does not exist in data source.
     * @default true.
     */
    allowCustom: boolean;
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
    htmlAttributes: {
        [key: string]: string;
    };
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
    allowFiltering: boolean;
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
    query: Query;
    /**
     * Specifies whether to show or hide the clear button.
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
     * @default true.
     */
    showClearButton: boolean;
    /**
     * Triggers on set a custom value to this component.
     * @event
     */
    customValueSpecifier: EmitType<CustomValueSpecifierEventArgs>;
    /**
     * Triggers on typing a character in the component.
     * @event
     */
    filtering: EmitType<FilteringEventArgs>;
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
     * *Constructor for creating the component
     */
    constructor(options?: ComboBoxModel, element?: string | HTMLElement);
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void;
    protected wireEvent(): void;
    private preventBlur(e);
    protected targetElement(): HTMLElement | HTMLInputElement;
    protected setOldText(text: string): void;
    protected setOldValue(value: string | number): void;
    private valueMuteChange(value);
    protected updateValues(): void;
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    protected searchLists(e: KeyboardEventArgs): void;
    protected getNgDirective(): string;
    protected setSearchBox(): InputObject;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    protected getFocusElement(): Element;
    protected setValue(e?: KeyboardEventArgs): boolean;
    protected showSpinner(): void;
    protected hideSpinner(): void;
    protected setAutoFill(activeElement: Element, isHover?: boolean): void;
    private isAndroidAutoFill(value);
    protected isSelectFocusItem(element: Element): boolean;
    private inlineSearch(e?);
    protected incrementalSearch(e: KeyboardEventArgs): void;
    private setAutoFillSelection(currentValue);
    protected getValueByText(text: string): string | number;
    protected unWireEvent(): void;
    protected setSelection(li: Element, e: MouseEvent | KeyboardEventArgs | TouchEvent): void;
    protected selectCurrentItem(e: KeyboardEventArgs): void;
    protected setHoverList(li: Element): void;
    private targetFocus(e);
    protected dropDownClick(e: MouseEvent): void;
    private customValue();
    /**
     * Dynamically change the value of properties.
     * @private
     */
    onPropertyChanged(newProp: ComboBoxModel, oldProp: ComboBoxModel): void;
    /**
     * To initialize the control rendering.
     * @private
     */
    render(): void;
    /**
     * Return the module name of this component.
     * @private
     */
    getModuleName(): string;
    /**
     * Hides the popup if it is in open state.
     * @returns void.
     */
    hidePopup(): void;
    /**
     * Sets the focus to the component for interaction.
     * @returns void.
     */
    focusIn(): void;
}
export interface CustomValueSpecifierEventArgs {
    /**
     * Gets the typed custom text to make a own text format and assign it to `item` argument.
     */
    text: string;
    /**
     * Sets the text custom format data for set a `value` and `text`.
     */
    item: {
        [key: string]: string | Object;
    };
}
