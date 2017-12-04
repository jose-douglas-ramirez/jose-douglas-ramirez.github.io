/// <reference path="../drop-down-base/drop-down-base-model.d.ts" />
import { EmitType } from '@syncfusion/ej2-base';
import { KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { IInput, InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';
import { DropDownBase, SelectEventArgs, FieldSettings } from '../drop-down-base/drop-down-base';
import { DropDownListModel } from '../drop-down-list';
import { DataManager, Query } from '@syncfusion/ej2-data';
export interface ChangeEventArgs extends SelectEventArgs {
    /**
     * Returns the selected value
     */
    value: number | string;
}
export declare const dropDownListClasses: DropDownListClassList;
/**
 * The DropDownList component contains a list of predefined values from which you can
 * choose a single value.
 * ```html
 * <input type="text" tabindex="1" id="list"> </input>
 * ```
 * ```typescript
 *   let dropDownListObj:DropDownList = new DropDownList();
 *   dropDownListObj.appendTo("#list");
 * ```
 */
export declare class DropDownList extends DropDownBase implements IInput {
    protected inputWrapper: InputObject;
    protected inputElement: HTMLInputElement;
    private valueTempElement;
    private listObject;
    private header;
    private footer;
    protected selectedLI: HTMLElement;
    private listHeight;
    protected hiddenElement: HTMLSelectElement;
    protected isPopupOpen: boolean;
    private isDocumentClick;
    protected isInteracted: boolean;
    private isFilterFocus;
    protected beforePopupOpen: boolean;
    protected initial: boolean;
    private initRemoteRender;
    private searchBoxHeight;
    private popupObj;
    private backIconElement;
    private clearIconElement;
    private containerStyle;
    protected previousValue: string | number;
    protected activeIndex: number;
    protected filterInput: HTMLInputElement;
    private searchKeyModule;
    private tabIndex;
    private isNotSearchList;
    protected isTyped: boolean;
    protected isSelected: boolean;
    protected preventFocus: boolean;
    protected preventAutoFill: boolean;
    protected queryString: string;
    protected isValidKey: boolean;
    protected typedString: string;
    protected isEscapeKey: boolean;
    private isPreventBlur;
    protected isTabKey: boolean;
    private actionCompleteData;
    protected prevSelectPoints: {
        [key: string]: number;
    };
    protected isSelectCustom: boolean;
    protected isDropDownClick: boolean;
    protected preventAltUp: boolean;
    private searchKeyEvent;
    private filterInputObj;
    protected spinnerElement: HTMLElement;
    protected keyConfigure: {
        [key: string]: string;
    };
    /**
     * Sets CSS classes to the root element of the component that helps customize the UI styles.
     * @default null.
     */
    cssClass: string;
    /**
     * Specifies the width of the component. By default, the component width sets based on the width of
     * its parent container. You can also set the width in pixel values.
     * @default '100%'.
     */
    width: string | number;
    /**
     * Specifies the height of the popup list.
     * @default '300px'.
     */
    popupHeight: string | number;
    /**
     * Specifies the width of the popup list. By default, the popup width sets based on the width of
     * the component.
     * @default '100%'.
     */
    popupWidth: string | number;
    /**
     * Accepts the value to be displayed as a watermark text on the component input.
     * @default null.
     */
    placeholder: string;
    /**
     * Accepts the value to be displayed as a watermark text on the filter bar.
     * @default null.
     */
    filterBarPlaceholder: string;
    /**
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let dropDownListObj: DropDownList = new DropDownList({
     *      dataSource: ['Tennis', 'FootBall', 'Cricket'],
     *      htmlAttributes: { title: 'List of games available here.' }
     *   });
     *   dropDownListObj.appendTo("#list");
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
     *   let customers: DropDownList = new DropDownList({
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
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * @default null.
     */
    valueTemplate: string;
    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * @default null.
     */
    headerTemplate: string;
    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * @default null.
     */
    footerTemplate: string;
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
     *   let listObj: DropDownList = new DropDownList({
     *      dataSource: searchData,
     *      fields: { text: "country", value: "id" },
     *      allowFiltering: true,
     *      filtering: function (e: FilteringEventArgs) {
     *          let query = new Query();
     *          query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;
     *          e.updateData(searchData, query);
     *      }
     *   });
     *   listObj.appendTo("#list");
     * ```
     * @default false.
     */
    allowFiltering: boolean;
    /**
     * When set to true, the user interactions on the component are disabled.
     * @default false.
     */
    readonly: boolean;
    /**
     * Gets or sets the display text of the selected item in the component.
     * @default null.
     */
    text: string;
    /**
     * Gets or sets the value of the selected item in the component.
     * @default null.
     */
    value: number | string;
    /**
     * Gets or sets the index of the selected item in the component.
     * @default null.
     */
    index: number;
    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     * @default 'Never'.
     */
    floatLabelType: FloatLabelType;
    /**
     * Specifies whether to show or hide the clear button.
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
     * @default false.
     */
    showClearButton: boolean;
    /**
     * Triggers on typing a character in the filter bar.
     * @event
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Triggers when an item in a popup is selected or when the model value is changed.
     * @event
     */
    change: EmitType<ChangeEventArgs>;
    /**
     * Triggers when the popup opens.
     * @event
     */
    open: EmitType<PopupEventArgs>;
    /**
     * Triggers when the popup is closed.
     * @event
     */
    close: EmitType<PopupEventArgs>;
    /**
     * Triggers when focus moves out from the component.
     * @event
     */
    blur: EmitType<Object>;
    /**
     * Triggers when the component is focused.
     * @event
     */
    focus: EmitType<Object>;
    /**
     * * Constructor for creating the DropDownList component.
     */
    constructor(options?: DropDownListModel, element?: string | HTMLElement);
    /**
     * Initialize the event handler.
     * @private
     */
    protected preRender(): void;
    protected renderList(isEmptyData?: boolean): void;
    private floatLabelChange();
    protected resetHandler(e: MouseEvent): void;
    protected resetFocusElement(): void;
    protected clear(property?: string): void;
    private resetSelection();
    private setHTMLAttributes();
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    protected setEnableRtl(): void;
    private setEnable();
    /**
     * Get the properties to be maintained in the persisted state.
     */
    protected getPersistData(): string;
    private preventTabIndex(element);
    protected targetElement(): HTMLElement | HTMLInputElement;
    protected getNgDirective(): string;
    protected getElementByText(text: string): Element;
    protected getElementByValue(value: string | number): Element;
    private initValue();
    protected updateValues(): void;
    protected onBlur(e: MouseEvent): void;
    protected focusOutAction(): void;
    protected onFocusOut(): void;
    protected onFocus(): void;
    protected wireEvent(): void;
    protected bindCommonEvent(): void;
    private bindClearEvent();
    protected unBindCommonEvent(): void;
    protected updateIconState(): void;
    /**
     * Event binding for list
     */
    private wireListEvents();
    private onSearch(e);
    protected onMouseClick(e: MouseEvent): void;
    private onMouseOver(e);
    private setHover(li);
    private onMouseLeave(e);
    private removeHover();
    protected isValidLI(li: Element | HTMLElement): boolean;
    protected incrementalSearch(e: KeyboardEventArgs): void;
    protected hideSpinner(): void;
    protected showSpinner(): void;
    protected keyActionHandler(e: KeyboardEventArgs): void;
    protected selectCurrentItem(e: KeyboardEventArgs): void;
    protected isSelectFocusItem(element: Element): boolean;
    private getPageCount();
    private pageUpSelection(steps, event);
    private pageDownSelection(steps, event);
    protected unWireEvent(): void;
    /**
     * Event un binding for list items.
     */
    private unWireListEvents();
    protected onDocumentClick(e: MouseEvent): void;
    private activeStateChange();
    private focusDropDown(e?);
    protected dropDownClick(e: MouseEvent): void;
    protected updateSelectedItem(li: Element, e: MouseEvent | KeyboardEvent | TouchEvent, preventSelect?: boolean): void;
    protected activeItem(li: Element): void;
    protected setValue(e?: KeyboardEventArgs): boolean;
    protected setSelection(li: Element, e: MouseEvent | KeyboardEventArgs | TouchEvent): void;
    private setValueTemplate();
    protected removeSelection(): void;
    protected getItemData(): {
        [key: string]: string;
    };
    /**
     * To trigger the change event for list.
     */
    protected onChangeEvent(eve: MouseEvent | KeyboardEvent | TouchEvent): void;
    protected detachChangeEvent(eve: MouseEvent | KeyboardEvent | TouchEvent): void;
    protected setHiddenValue(): void;
    /**
     * Filter bar implementation
     */
    protected onFilterUp(e: KeyboardEventArgs): void;
    protected onFilterDown(e: KeyboardEventArgs): void;
    protected removeFillSelection(): void;
    protected getSelectionPoints(): {
        [key: string]: number;
    };
    protected searchLists(e: KeyboardEventArgs): void;
    protected setSearchBox(popupElement: HTMLElement): InputObject;
    protected onInput(): void;
    protected onActionFailure(e: Object): void;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    private addNewItem(listData, newElement);
    protected updateActionCompleteData(li: HTMLElement, item: {
        [key: string]: Object;
    }): void;
    private focusIndexItem();
    protected updateSelection(): void;
    protected removeFocus(): void;
    protected renderPopup(): void;
    private checkCollision(popupEle);
    private getOffsetValue(popupEle);
    private createPopup(element, offsetValue, left);
    private isEmptyList();
    protected getFocusElement(): void;
    private isFilterLayout();
    private scrollHandler();
    private setSearchBoxPosition();
    private setPopupPosition(border?);
    private setWidth();
    private scrollBottom(isInitial?);
    private scrollTop();
    protected isEditTextBox(): boolean;
    protected isFiltering(): boolean;
    protected isPopupButton(): boolean;
    protected setScrollPosition(e?: KeyboardEventArgs): void;
    private clearText();
    private listScroll();
    private closePopup(delay?);
    private destroyPopup();
    private clickOnBackIcon();
    /**
     * To Initialize the control rendering
     * @private
     */
    render(): void;
    private setFooterTemplate(popupEle);
    protected setOldText(text: string): void;
    protected setOldValue(value: string | number): void;
    protected refreshPopup(): void;
    /**
     * Dynamically change the value of properties.
     * @private
     */
    onPropertyChanged(newProp: DropDownListModel, oldProp: DropDownListModel): void;
    /**
     * Return the module name.
     * @private
     */
    getModuleName(): string;
    /**
     * Opens the popup that displays the list of items.
     * @returns void.
     */
    showPopup(): void;
    /**
     * Hides the popup if it is in an open state.
     * @returns void.
     */
    hidePopup(): void;
    /**
     * Sets the focus on the component for interaction.
     * @returns void.
     */
    focusIn(): void;
    /**
     * Moves the focus from the component if the component is already focused.
     * @returns void.
     */
    focusOut(): void;
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    destroy(): void;
}
export interface DropDownListClassList {
    root: string;
    hover: string;
    selected: string;
    rtl: string;
    base: string;
    disable: string;
    input: string;
    inputFocus: string;
    li: string;
    icon: string;
    iconAnimation: string;
    value: string;
    focus: string;
    device: string;
    backIcon: string;
    filterBarClearIcon: string;
    filterInput: string;
    filterParent: string;
    mobileFilter: string;
    footer: string;
    header: string;
    clearIcon: string;
    clearIconHide: string;
    popupFullScreen: string;
    disableIcon: string;
}
export interface FilteringEventArgs {
    /**
     * Gets the `keyup` event arguments.
     */
    baseEventArgs: Object;
    /**
     * Search text value.
     */
    text: string;
    /**
     * To filter the data from given data source by using query
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettings} fields - Specify the fields to map the column in the data table.
     * @return {void}.
     */
    updateData(dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[], query?: Query, fields?: FieldSettings): void;
}
export interface PopupEventArgs {
    /**
     * Specifies the popup Object.
     */
    popup: Popup;
}