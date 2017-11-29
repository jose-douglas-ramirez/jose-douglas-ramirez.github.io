/// <reference path="../drop-down-base/drop-down-base-model.d.ts" />
import { DropDownBase, SelectEventArgs } from '../drop-down-base/drop-down-base';
import { IInput } from '@syncfusion/ej2-inputs';
import { EmitType, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { PopupEventArgs, FilteringEventArgs } from '../drop-down-list/drop-down-list';
import { MultiSelectModel } from '../multi-select';
export interface RemoveEventArgs extends SelectEventArgs {
}
/**
 * The Multiselect allows the user to pick a more than one value from list of predefined values.
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
 * <script>
 *   var multiselectObj = new Multiselect();
 *   multiselectObj.appendTo("#list");
 * </script>
 * ```
 */
export declare class MultiSelect extends DropDownBase implements IInput {
    private spinnerElement;
    private selectAllAction;
    private setInitialValue;
    /**
     * Sets the CSS classes to root element of this component which helps to customize the
     * complete styles.
     * @default null
     */
    cssClass: string;
    /**
     * Gets or sets the width of the component. By default, it sizes based on its parent.
     * container dimension.
     * @default '100%'
     */
    width: string | number;
    /**
     * Gets or sets the height of the popup list. By default it renders based on its list item.
     * @default '300px'
     */
    popupHeight: string | number;
    /**
     * Gets or sets the width of the popup list and percentage values has calculated based on input width.
     * @default '100%'
     */
    popupWidth: string | number;
    /**
     * Gets or sets the placeholder in the component to display the given information
     * in input when no item selected.
     * @default null
     */
    placeholder: string;
    /**
     * Gets or sets the additional attribute to `HtmlAttributes` property in DropDownList,
     * which helps to add attribute like title, name etc, input should be key value pair.
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * @default null
     */
    valueTemplate: string;
    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * @default null
     */
    headerTemplate: string;
    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * @default null
     */
    footerTemplate: string;
    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * @default null
     */
    itemTemplate: string;
    /**
     * To enable the filtering option in this component.
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown.
     * @default false
     */
    allowFiltering: boolean;
    /**
     * Allows user to add a custom value, the value which is not present in the suggestion list.
     * @default false
     */
    allowCustomValue: boolean;
    /**
     * Enables close icon with the each selected item.
     * @default true
     */
    showClearButton: boolean;
    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     * @default 1000
     */
    maximumSelectionLength: number;
    /**
     * Gets or sets the `readonly` to input or not. Once enabled, just you can copy or highlight
     * the text however tab key action will perform.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Selects the list item which maps the data `text` field in the component.
     * @default null
     */
    text: string;
    /**
     * Selects the list item which maps the data `value` field in the component.
     * @default null
     */
    value: [number | string];
    /**
     * Hides the selected item from the list item.
     * @default false
     */
    hideSelectedItem: boolean;
    /**
     * Based on the property, when item get select popup visibility state will changed.
     * @default true
     */
    closePopupOnSelect: boolean;
    /**
     * configures visibility mode for component interaction.
     *
     *   - `box` - selected items will be visualized in chip.
     *
     *   - `delimiter` - selected items will be visualized in text content.
     *
     *   - `default` - on `focus in` component will act in `box` mode.
     *    on `blur` component will act in `delimiter` mode.
     * @default default
     */
    mode: visualMode;
    /**
     * Sets the delimiter character for 'default' and 'delimiter' visibility modes.
     * @default ,
     */
    delimiterChar: string;
    /**
     * Sets case sensitive option for filter operation.
     * @default false
     */
    ignoreCase: boolean;
    /**
     * Fires each time when selection changes happened in list items after model and input value get affected.
     * @event
     */
    change: EmitType<MultiSelectChangeEventArgs>;
    /**
     * Fires before the selected item removed from the widget.
     * @event
     */
    removing: EmitType<RemoveEventArgs>;
    /**
     * Fires after the selected item removed from the widget.
     * @event
     */
    removed: EmitType<RemoveEventArgs>;
    /**
     * Fires when popup opens after animation completion.
     * @event
     */
    open: EmitType<PopupEventArgs>;
    /**
     * Fires when popup close after animation completion.
     * @event
     */
    close: EmitType<PopupEventArgs>;
    /**
     * Event triggers when the input get focus-out.
     * @event
     */
    blur: EmitType<Object>;
    /**
     * Event triggers when the input get focused.
     * @event
     */
    focus: EmitType<Object>;
    /**
     * Triggers event,when user types a text in search box.
     * @event
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Triggers when the customValue is selected.
     * @event
     */
    customValueSelection: EmitType<CustomValueEventArgs>;
    /**
     * Constructor for creating the DropDownList widget.
     */
    constructor(option?: MultiSelectModel, element?: string | HTMLElement);
    private isValidKey;
    private mainList;
    private mainData;
    private mainListCollection;
    private customValueFlag;
    private inputElement;
    private componentWrapper;
    private overAllWrapper;
    private searchWrapper;
    private viewWrapper;
    private chipCollectionWrapper;
    private overAllClear;
    private hiddenElement;
    private delimiterWrapper;
    private popupObj;
    private inputFocus;
    private header;
    private footer;
    private initStatus;
    private popupWrapper;
    private keyCode;
    private beforePopupOpen;
    private remoteCustomValue;
    private enableRTL(state);
    private updateHTMLAttribute();
    private updateReadonly(state);
    private updateClearButton(state);
    private updateCssClass();
    private onPopupShown();
    private focusAtFirstListItem();
    private focusAtLastListItem(data);
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    private updateListARIA();
    private removelastSelection(e);
    protected onActionFailure(e: object): void;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    private refreshSelection();
    private KeyUp(e);
    private dataUpdater(dataSource, query?, fields?);
    private tempQuery;
    private tempValues;
    private checkForCustomValue(query?, fields?);
    protected getNgDirective(): string;
    private wrapperClick(e);
    private enable(state);
    private scrollFocusStatus;
    private keyDownStatus;
    private onBlur(eve);
    private refreshInputHight();
    private validateValues(newValue, oldValue);
    private updateValueState(event, newVal, oldVal);
    private getPagingCount();
    private pageUpSelection(steps);
    private pageDownSelection(steps);
    private focusIn();
    private showDelimWrapper();
    private hideDelimWrapper();
    private expandTextbox();
    private isPopupOpen();
    private refreshPopup();
    private checkTextLength();
    private popupKeyActions(keyCode);
    private updateAriaAttribute();
    private onKeyDown(e);
    private selectByKey(e);
    private escapeAction();
    private scrollBottom(selectedLI, activeIndex);
    private scrollTop(selectedLI, activeIndex);
    private selectListByKey(e);
    private refreshListItems(data);
    private removeSelectedChip(e);
    private moveByTop(state);
    private moveByList(position);
    private moveBy(position);
    private chipClick(e);
    private removeChipSelection();
    private addChipSelection(element);
    private onChipRemove(e);
    private makeTextBoxEmpty();
    private refreshPlaceHolder();
    private removeValue(value, eve);
    private updateMainList(state, value);
    private removeChip(value);
    private updateChipStatus();
    private addValue(value, text, eve);
    private dispatchSelect(value, eve, element, isNotTrigger);
    private addChip(text, value);
    private removeChipFocus();
    private onMobileChipInteraction(e);
    private getChip(data, value);
    private calcPopupWidth();
    private mouseIn();
    private mouseOut();
    private renderPopup();
    private ClearAll(e);
    private windowResize();
    protected wireEvent(): void;
    private onInput();
    protected preRender(): void;
    private updateData();
    private initialValueUpdate();
    protected isValidLI(li: Element | HTMLElement): boolean;
    protected updateListSelection(li: Element, e: MouseEvent | KeyboardEventArgs): void;
    protected removeListSelection(): void;
    private removeHover();
    private removeFocus();
    private addListHover(li);
    private addListFocus(element);
    private addListSelection(element);
    private updateDelimeter(eve);
    private onMouseClick(e);
    private onMouseOver(e);
    private onMouseLeave(e);
    private onListMouseDown(e);
    private wireListEvents();
    private unwireListEvents();
    private hideOverAllClear();
    private showOverAllClear();
    protected showSpinner(): void;
    protected hideSpinner(): void;
    private updateDelimView();
    private unWireEvent();
    private selectAllItem(state);
    /**
     * Get the properties to be maintained in the persisted state.
     */
    protected getPersistData(): string;
    /**
     * Dynamically change the value of properties.
     * @private
     */
    onPropertyChanged(newProp: MultiSelectModel, oldProp: MultiSelectModel): void;
    /**
     * Hides the popup, if the popup in a open state.
     * @returns void
     */
    hidePopup(): void;
    /**
     * Shows the popup, if the popup in a closed state.
     * @returns void
     */
    showPopup(): void;
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     * parameter
     * `true`   - Selects entire list items.
     * `false`  - Un Selects entire list items.
     * @returns void
     */
    selectAll(state: boolean): void;
    getModuleName(): string;
    /**
     * To Initialize the control rendering
     * @private
     */
    render(): void;
    private initialUpdate();
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}
     */
    destroy(): void;
}
export interface CustomValueEventArgs {
    /**
     * Gets the newly added data.
     */
    newData: object;
}
export interface MultiSelectChangeEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the component initial Value.
     */
    oldValue: number[] | string[];
    /**
     * Returns the updated component Values.
     */
    value: number[] | string[];
    /**
     * Specifies the original event arguments.
     */
    e: MouseEvent | KeyboardEvent | TouchEvent;
}
export declare type visualMode = 'default' | 'delimiter' | 'box';
