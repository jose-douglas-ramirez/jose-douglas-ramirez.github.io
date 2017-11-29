import { Component, BaseEventArgs } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '../common/list-base';
import { ListViewModel, FieldSettingsModel } from './list-view-model';
import { ListViewHelper } from './list-view-builder';
export interface Fields {
    /**
     * Specifies ID field that mapped in dataSource.
     */
    id?: string;
    /**
     * Specifies text field that mapped in dataSource.
     */
    text?: string;
}
export declare class FieldSettings extends ChildProperty<FieldSettings> {
    /**
     * Specifies ID field that mapped in dataSource.
     */
    id: string;
    /**
     * Specifies text field that mapped in dataSource.
     */
    text: string;
    /**
     * Specifies checked field that mapped in dataSource.
     */
    isChecked: string;
    /**
     * Specifies visibility field that mapped in dataSource.
     */
    isVisible: string;
    /**
     * Specifies enabled field that mapped in dataSource.
     */
    enabled: string;
    /**
     * Specifies icon CSS class field that mapped in dataSource.
     */
    iconCss: string;
    /**
     * Specifies child dataSource field that mapped in dataSource.
     */
    child: string;
    /**
     * Specifies title text field that mapped in dataSource.
     */
    tooltip: string;
    /**
     * Specifies category field that mapped in dataSource.
     */
    groupBy: string;
    /**
     * Specifies sorting field that mapped in dataSource.
     */
    sortBy: string;
    /**
     * Specifies list html attributes field that mapped in dataSource.
     */
    htmlAttributes: string;
    /**
     * Specifies when need fetch specific table from remote data.
     */
    tableName: string;
}
/**
 * Animation configuration settings.
 */
export interface AnimationSettings {
    /**
     * Specifies effect that shown in sub list transform.
     */
    effect?: ListViewEffect;
    /**
     * Specifies time duration to transform object.
     */
    duration?: number;
    /**
     * Specifies easing effect applied while transform.
     */
    easing?: string;
}
/**
 * ListView animation effects
 */
export declare type ListViewEffect = 'None' | 'SlideLeft' | 'SlideDown' | 'Zoom' | 'Fade';
/**
 * Represents the EJ2 ListView control.
 * ```html
 * <div id="listview">
 * <ul>
 * <li>Favourite</li>
 * <li>Documents</li>
 * <li>Downloads</li>
 * </ul>
 * </div>
 * ```
 * ```typescript
 *   var lvObj = new ListView({});
 *   lvObj.appendTo("#listview");
 * ```
 */
export declare class ListView extends Component<HTMLElement> implements INotifyPropertyChanged {
    private ulElement;
    private selectedLI;
    private curUL;
    private curDSLevel;
    private curViewDS;
    private curDSJSON;
    localData: {
        [key: string]: Object;
    }[];
    private liCollection;
    private headerEle;
    private contentContainer;
    private selectedItems;
    private keyboardModule;
    private touchModule;
    private keyConfigs;
    private listBaseOption;
    private animateOptions;
    private rippleFn;
    private aniObj;
    /**
     * Specifies the CSS class name to be added.
     * @default null
     */
    cssClass: string;
    /**
     * Specifies the HTML attributes to be added.
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Specifies whether the ListView is enable or not.
     * @default null
     */
    enable: boolean;
    /**
     * Contains the list of JSON data to generate ListView items.
     * @default []
     */
    dataSource: {
        [key: string]: Object;
    }[] | string[] | DataManager;
    /**
     * Specifies the query that need to process remote dataSource.
     * @default
     */
    query: Query;
    /**
     * Specifies the field settings to map keys from the dataSource.
     * @default ListBase.defaultMappedFields
     */
    fields: FieldSettingsModel;
    /**
     * Configure the animation that affect in sub list navigation.
     * @default { effect: 'SlideLeft', duration: 400, easing: 'ease' }
     */
    animation: AnimationSettings;
    /**
     * Specifies the sort order to sort the dataSource.
     * @default 'None'
     */
    sortOrder: SortOrder;
    /**
     * Specifies whether the icon to be shown or not.
     * @default false
     */
    showIcon: boolean;
    /**
     * Specifies Header Title.
     * @default ""
     */
    headerTitle: string;
    /**
     * Specifies whether to show the header.
     * @default ""
     */
    showHeader: boolean;
    /**
     * Specifies the element style height.
     * @default ''
     */
    height: number | string;
    /**
     * Specifies the element style width.
     * @default ''
     */
    width: number | string;
    /**
     * Specifies the item template.
     * @default null
     */
    template: string;
    /**
     * Specifies the group header template.
     * @default null
     */
    groupTemplate: string;
    /**
     * Event triggers when we select the list item.
     * @event
     */
    select: EmitType<SelectEventArgs>;
    /**
     * Event triggers before loading.
     * @event
     */
    actionBegin: EmitType<Object>;
    /**
     * Event triggers before loading.
     * @event
     */
    actionComplete: EmitType<Object>;
    /**
     * Event triggers when load fails.
     * @event
     */
    actionFailure: EmitType<Object>;
    /**
     * Constructor for creating the widget
     */
    constructor(options?: ListViewModel, element?: string | HTMLElement);
    onPropertyChanged(newProp: ListViewModel, oldProp: ListViewModel): void;
    private setHTMLAttribute();
    private setCSSClass(oldCSSClass?);
    private setSize();
    private setEnable();
    private setEnableRTL();
    private enableElement(element, isEnabled?);
    private header(text?, showBack?);
    private switchView(fromView, toView, reverse?);
    protected preRender(): void;
    private clickHandler(e);
    private hoverHandler(e);
    private leaveHandler(e);
    private keyActionHandler(e);
    private swipeActionHandler(e);
    private wireEvents();
    private unWireEvents();
    private removeHover();
    private removeSelect();
    private isValidLI(li);
    private setSelectLI(li, e?);
    private setHoverLI(li);
    private hoverSiblingLI(prev?);
    private getSubDS();
    private getItemData(li);
    private findItemFromDS(dataSource, fields, parent?);
    private getQuery();
    private setViewDataSource(dataSource?);
    private isInAnimation();
    private setLocalData();
    private reRender();
    private resetCurrentList();
    private createList();
    private renderSubList(li);
    private renderIntoDom(ele);
    private renderList();
    private getElementUID(obj);
    /**
     * To Initialize the control rendering.
     */
    render(): void;
    /**
     * To destroy the widget.
     */
    destroy(): void;
    /**
     * Function helps to switch back from navigated sub list.
     */
    back(): void;
    /**
     * Function that used to select the list item based on an input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    selectItem(obj: Fields | HTMLElement): void;
    /**
     * Function returns currently selected item details.
     */
    getSelectedItem(): SelectedItem;
    /**
     * Function returns item details based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    findItem(fields: Fields): SelectedItem;
    /**
     * A function that used to enable the disabled list items based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    enableItem(obj: Fields | HTMLElement): void;
    /**
     * A function that used to disable the list items based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    disableItem(obj: Fields | HTMLElement): void;
    /**
     * A function helps to show an items based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    showItem(obj: Fields | HTMLElement): void;
    /**
     * A function helps to hide an items based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    hideItem(obj: Fields | HTMLElement): void;
    private showHideItem(obj, isHide, display);
    /**
     * Function to add new item to current view list.
     * @param  {{[key:string]:Object}[]} data - Array JSON Data that need to add.
     * @param  {Fields} fields - Fields as an Object with ID and Text fields.
     */
    addItem(data: {
        [key: string]: Object;
    }[], fields: Fields): void;
    /**
     * A function that removes the item from data source based on given input.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    removeItem(obj: Element | Fields): void;
    protected getModuleName(): string;
    /**
     * Get the properties to be maintained in the persisted state.
     */
    protected getPersistData(): string;
}
export interface SelectedItem {
    /**
     * Selected Item text.
     */
    text: string;
    /**
     * Selected Item list element.
     */
    item: HTMLElement | Element;
    /**
     * Selected Item dataSource JSON object.
     */
    data: {
        [key: string]: Object;
    } | string[];
}
export interface SelectEventArgs extends BaseEventArgs, SelectedItem {
    /**
     * Specifies that event has triggered by user interaction.
     */
    isInteracted: boolean;
    /**
     * Specifies that event argument when event raised by other event.
     */
    event: MouseEvent | KeyboardEvent;
}
export declare let listViewBuilder: ListViewHelper;
