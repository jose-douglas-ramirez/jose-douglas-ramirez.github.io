import { DropDownBase, SelectEventArgs, dropDownBaseClasses, FieldSettings, SPINNER_SIZE } from '../drop-down-base/drop-down-base';import { Popup, createSpinner, showSpinner, hideSpinner  } from '@syncfusion/ej2-popups';import { IInput } from '@syncfusion/ej2-inputs';import { attributes } from '@syncfusion/ej2-base';import { NotifyPropertyChanges } from '@syncfusion/ej2-base';import { EventHandler, Property, Event, compile, L10n, EmitType, KeyboardEventArgs } from '@syncfusion/ej2-base';import { Animation, AnimationModel, Browser } from '@syncfusion/ej2-base';import { PopupEventArgs, FilteringEventArgs } from '../drop-down-list/drop-down-list';import { MultiSelectModel } from '../multi-select';import { Search } from '../common/incremental-search';import { createElement, append, addClass, removeClass, setStyleAttribute, closest, detach, remove } from '@syncfusion/ej2-base';import { getUniqueID, formatUnit, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';import { DataManager, Query } from '@syncfusion/ej2-data';import { SortOrder } from '@syncfusion/ej2-lists';
import {visualMode,MultiSelectChangeEventArgs,RemoveEventArgs,CustomValueEventArgs} from "./multi-select";
import {DropDownBaseModel} from "../drop-down-base/drop-down-base-model";

/**
 * Interface for a class MultiSelect
 */
export interface MultiSelectModel extends DropDownBaseModel{

    /**
     * Sets the CSS classes to root element of this component which helps to customize the
     * complete styles.
     * @default null
     */
    cssClass?: string;

    /**
     * Gets or sets the width of the component. By default, it sizes based on its parent.
     * container dimension.
     * @default '100%'
     */
    width?: string | number;

    /**
     * Gets or sets the height of the popup list. By default it renders based on its list item.
     * @default '300px'
     */
    popupHeight?: string | number;

    /**
     * Gets or sets the width of the popup list and percentage values has calculated based on input width.
     * @default '100%'
     */
    popupWidth?: string | number;

    /**
     * Gets or sets the placeholder in the component to display the given information
     * in input when no item selected. 
     * @default null
     */
    placeholder?: string;

    /**
     * Gets or sets the additional attribute to `HtmlAttributes` property in DropDownList,
     * which helps to add attribute like title, name etc, input should be key value pair.
     * @default {}
     */
    htmlAttributes?: { [key: string]: string; };

    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * @default null
     */
    valueTemplate?: string;

    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * @default null
     */
    headerTemplate?: string;

    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * @default null
     */
    footerTemplate?: string;

    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * @default null
     */
    itemTemplate?: string;

    /**
     * To enable the filtering option in this component. 
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown. 
     * @default false
     */
    allowFiltering?: boolean;

    /**
     * Allows user to add a custom value, the value which is not present in the suggestion list. 
     * @default false
     */
    allowCustomValue?: boolean;

    /**
     * Enables close icon with the each selected item.
     * @default true
     */
    showClearButton?: boolean;

    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     * @default 1000
     */
    maximumSelectionLength?: number;

    /**
     * Gets or sets the `readonly` to input or not. Once enabled, just you can copy or highlight 
     * the text however tab key action will perform.
     * 
     * @default false
     */
    readonly?: boolean;

    /**
     * Selects the list item which maps the data `text` field in the component.
     * @default null
     */
    text?: string;

    /**
     * Selects the list item which maps the data `value` field in the component.
     * @default null
     */
    value?: [number | string];

    /**
     * Hides the selected item from the list item.
     * @default false
     */
    hideSelectedItem?: boolean;

    /**
     * Based on the property, when item get select popup visibility state will changed.
     * @default true
     */
    closePopupOnSelect?: boolean;

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
    mode?: visualMode;

    /**
     * Sets the delimiter character for 'default' and 'delimiter' visibility modes.
     * @default ,
     */
    delimiterChar?: string;

    /**
     * Sets case sensitive option for filter operation.
     * @default false
     */
    ignoreCase?: boolean;

    /**
     * Fires each time when selection changes happened in list items after model and input value get affected.
     * @event
     */
    change?: EmitType<MultiSelectChangeEventArgs>;

    /**
     * Fires before the selected item removed from the widget.
     * @event
     */
    removing?: EmitType<RemoveEventArgs>;

    /**
     * Fires after the selected item removed from the widget.
     * @event
     */
    removed?: EmitType<RemoveEventArgs>;

    /**
     * Fires when popup opens after animation completion.
     * @event
     */
    open?: EmitType<PopupEventArgs>;

    /**
     * Fires when popup close after animation completion.
     * @event
     */
    close?: EmitType<PopupEventArgs>;

    /**
     * Event triggers when the input get focus-out.
     * @event
     */
    blur?: EmitType<Object>;

    /**
     * Event triggers when the input get focused.
     * @event
     */
    focus?: EmitType<Object>;

    /**
     * Triggers event,when user types a text in search box.
     * @event
     */
    filtering?: EmitType<FilteringEventArgs>;

    /**
     * Triggers when the customValue is selected.
     * @event
     */
    customValueSelection?: EmitType<CustomValueEventArgs>;

}