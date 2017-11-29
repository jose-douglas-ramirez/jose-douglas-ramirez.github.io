import { Component, EventHandler, addClass, append, Property, Event, KeyboardEvents, EmitType, L10n, compile } from '@syncfusion/ej2-base';import { setStyleAttribute, removeClass, createElement, prepend, isNullOrUndefined, detach, Browser } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, rippleEffect, RippleOptions } from '@syncfusion/ej2-base';import { DataManager, Query } from '@syncfusion/ej2-data';import { ListBase, SortOrder, cssClass as ListBaseClasses } from '@syncfusion/ej2-lists';
import {FieldSettings,SelectEventArgs} from "./drop-down-base";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class DropDownBase
 */
export interface DropDownBaseModel extends ComponentModel{

    /**
     * The `fields` property maps the columns of the data table and binds the data to the component.
     * @default {text: null, value: null, iconCss: null, groupBy: null}
     */
    fields?: FieldSettings;

    /**
     * When set to true, enables RTL mode of the component that 
     * displays the content in the right-to-left direction.
     * @default false.
     */
    enableRtl?: boolean;

    /**
     * Enable or disable persisting component's state between page reloads. 
     * If enabled, following list of states will be persisted.
     * 1. value
     * @default false.
     */
    enablePersistence?: boolean;

    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * @default null.
     */
    itemTemplate?: string;

    /**
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null.
     */
    groupTemplate?: string;

    /**
     * Accepts the template design and assigns it to popup list of component
     * when no data is available on the component.
     * @default 'No Records Found'.
     */
    noRecordsTemplate?: string;

    /**
     * Accepts the template and assigns it to the popup list content of the component
     * when the data fetch request from the remote server fails.
     * @default 'The Request Failed'.
     */
    actionFailureTemplate?: string;

    /**
     * Specifies the `sortOrder` to sort the data source. The available type of sort orders are
     * * `None` - The data source is not sorting.
     * * `Ascending` - The data source is sorting with ascending order.
     * * `Descending` - The data source is sorting with descending order.
     * @default None.
     */
    sortOrder?: SortOrder;

    /**
     * Specifies a value that indicates whether the component is enabled or not.
     * @default true.
     */
    enabled?: boolean;

    /**
     * Accepts the list items either through local or remote service and binds it to the component.
     * It can be an array of JSON Objects or an instance of
     * [`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager.html).
     * @default [].
     */
    dataSource?: { [key: string]: Object }[] | DataManager | string[] | number[];

    /**
     * Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
     * which will execute along with the data processing.
     * @default null.
     */
    query?: Query;

    /**
     * Triggers before fetching data from the remote server.
     * @event
     */
    actionBegin?: EmitType<Object>;

    /**
     * Triggers after data is fetched successfully from the remote server.
     * @event
     */
    actionComplete?: EmitType<Object>;

    /**
     * Triggers when the data fetch request from the remote server fails.
     * @event
     */
    actionFailure?: EmitType<Object>;

    /**
     * Triggers when an item in the popup is selected.
     * @event
     */
    select?: EmitType<SelectEventArgs>;

}