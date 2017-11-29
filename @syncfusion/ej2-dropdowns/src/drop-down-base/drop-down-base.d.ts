import { Component, KeyboardEvents, EmitType, L10n } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownBaseModel } from './drop-down-base-model';
export interface FieldSettings {
    /**
     * Maps the text column from data table for each list item
     */
    text?: string;
    /**
     * Maps the value column from data table for each list item
     */
    value?: string;
    /**
     * Maps the icon class column from data table for each list item.
     */
    iconCss?: string;
    /**
     * Group the list items with it's related items by mapping groupBy field.
     */
    groupBy?: string;
}
export declare const SPINNER_SIZE: string;
export declare const dropDownBaseClasses: DropDownBaseClassList;
export interface DropDownBaseClassList {
    root: string;
    rtl: string;
    content: string;
    selected: string;
    hover: string;
    noData: string;
    fixedHead: string;
    focus: string;
    li: string;
    disabled: string;
    group: string;
    grouping: string;
}
export interface SelectEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the selected list item
     */
    item: HTMLLIElement;
    /**
     * Returns the selected item as JSON Object from the data source.
     */
    itemData: FieldSettings;
    /**
     * Specifies the original event arguments.
     */
    e: MouseEvent | KeyboardEvent | TouchEvent;
}
/**
 * DropDownBase component will generate the list items based on given data and act as base class to drop-down related components
 */
export declare class DropDownBase extends Component<HTMLElement> implements INotifyPropertyChanged {
    protected listData: {
        [key: string]: Object;
    }[];
    protected ulElement: HTMLElement;
    protected liCollections: HTMLElement[];
    private bindEvent;
    private scrollTimer;
    protected list: HTMLElement;
    protected fixedHeaderElement: HTMLElement;
    protected keyboardModule: KeyboardEvents;
    protected enableRtlElements: HTMLElement[];
    protected rippleFun: Function;
    protected l10n: L10n;
    protected item: HTMLLIElement;
    protected itemData: {
        [key: string]: Object;
    };
    protected isActive: boolean;
    protected isRequested: boolean;
    protected queryString: string;
    /**
     * The `fields` property maps the columns of the data table and binds the data to the component.
     * @default {text: null, value: null, iconCss: null, groupBy: null}
     */
    fields: FieldSettings;
    /**
     * When set to true, enables RTL mode of the component that
     * displays the content in the right-to-left direction.
     * @default false.
     */
    enableRtl: boolean;
    /**
     * Enable or disable persisting component's state between page reloads.
     * If enabled, following list of states will be persisted.
     * 1. value
     * @default false.
     */
    enablePersistence: boolean;
    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * @default null.
     */
    itemTemplate: string;
    /**
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null.
     */
    groupTemplate: string;
    /**
     * Accepts the template design and assigns it to popup list of component
     * when no data is available on the component.
     * @default 'No Records Found'.
     */
    noRecordsTemplate: string;
    /**
     * Accepts the template and assigns it to the popup list content of the component
     * when the data fetch request from the remote server fails.
     * @default 'The Request Failed'.
     */
    actionFailureTemplate: string;
    /**
     * Specifies the `sortOrder` to sort the data source. The available type of sort orders are
     * * `None` - The data source is not sorting.
     * * `Ascending` - The data source is sorting with ascending order.
     * * `Descending` - The data source is sorting with descending order.
     * @default None.
     */
    sortOrder: SortOrder;
    /**
     * Specifies a value that indicates whether the component is enabled or not.
     * @default true.
     */
    enabled: boolean;
    /**
     * Accepts the list items either through local or remote service and binds it to the component.
     * It can be an array of JSON Objects or an instance of
     * [`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager.html).
     * @default [].
     */
    dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[];
    /**
     * Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
     * which will execute along with the data processing.
     * @default null.
     */
    query: Query;
    /**
     * Triggers before fetching data from the remote server.
     * @event
     */
    actionBegin: EmitType<Object>;
    /**
     * Triggers after data is fetched successfully from the remote server.
     * @event
     */
    actionComplete: EmitType<Object>;
    /**
     * Triggers when the data fetch request from the remote server fails.
     * @event
     */
    actionFailure: EmitType<Object>;
    /**
     * Triggers when an item in the popup is selected.
     * @event
     */
    select: EmitType<SelectEventArgs>;
    /**
     * * Constructor for DropDownBase class
     */
    constructor(options?: DropDownBaseModel, element?: string | HTMLElement);
    protected getPropObject(prop: string, newProp: {
        [key: string]: string;
    }, oldProp: {
        [key: string]: string;
    }): {
        [key: string]: Object;
    };
    protected getValueByText(text: string, ignoreCase?: boolean): string | number;
    private l10nUpdate(actionFailure?);
    protected getTextByValue(value: string | number): string;
    protected getFormattedValue(value: string): string | number;
    /**
     * Sets RTL to dropdownbase wrapper
     */
    protected setEnableRtl(): void;
    /**
     * Initialize the Component.
     */
    private initialize();
    /**
     * Get the properties to be maintained in persisted state.
     */
    protected getPersistData(): string;
    /**
     * Sets the enabled state to DropDownBase.
     */
    protected setEnabled(): void;
    private renderItemsBySelect();
    private getJSONfromOption(items, options, fields);
    /**
     * Execute before render the list items
     * @private
     */
    protected preRender(): void;
    /**
     * Creates the list items of DropDownBase component.
     */
    private setListData(dataSource, fields, query);
    protected showSpinner(): void;
    protected hideSpinner(): void;
    protected onActionFailure(e: Object): void;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object): void;
    protected postRender(listElement: HTMLElement, list: {
        [key: string]: Object;
    }[], bindEvent: boolean): void;
    /**
     * Get the query to do the data operation before list item generation.
     */
    protected getQuery(query: Query): Query;
    /**
     * To render the template content for group header element.
     */
    private renderGroupTemplate(listEle);
    /**
     * To create the ul li list items
     */
    private createListItems(dataSource, fields);
    protected setFloatingHeader(e: Event): void;
    private scrollStop(e);
    /**
     * To render the list items
     */
    private renderItems(listData, fields);
    protected typeOfData(items: {
        [key: string]: Object;
    }[] | string[]): {
        [key: string]: Object;
    };
    protected setFixedHeader(): void;
    private getSortedDataSource(dataSource);
    /**
     * Return the index of item which matched with given value in data source
     */
    protected getIndexByValue(value: string | number): number;
    /**
     * To dispatch the event manually
     */
    protected dispatchEvent(element: HTMLElement, type: string): void;
    /**
     * To set the current fields
     */
    protected setFields(): void;
    /**
     * reset the items list.
     */
    protected resetList(dataSource?: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[], fields?: FieldSettings, query?: Query): void;
    protected updateSelection(): void;
    protected renderList(): void;
    /**
     * When property value changes happened, then onPropertyChanged method will execute the respective changes in this component.
     * @private
     */
    onPropertyChanged(newProp: DropDownBaseModel, oldProp: DropDownBaseModel): void;
    /**
     * Build and render the component
     * @private
     */
    render(isEmptyData?: boolean): void;
    /**
     * Return the module name of this component.
     * @private
     */
    getModuleName(): string;
    /**
     * Gets all the list items bound on this component.
     * @returns Element[].
     */
    getItems(): Element[];
    /**
     * Adds a new item to the popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @return {void}.
     */
    addItem(items: {
        [key: string]: Object;
    }[] | {
        [key: string]: Object;
    }, itemIndex?: number): void;
    protected updateActionCompleteData(li: HTMLElement, item: {
        [key: string]: Object;
    }): void;
    /**
     * Gets the data Object that matches the given value.
     * @param { string | number } value - Specifies the value of the list item.
     * @returns Object.
     */
    getDataByValue(value: string | number): {
        [key: string]: Object;
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. It also removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    destroy(): void;
}
