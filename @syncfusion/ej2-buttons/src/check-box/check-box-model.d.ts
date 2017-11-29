import { Component, CreateBuilder, INotifyPropertyChanged , NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';import { BaseEventArgs, EmitType, Event, EventHandler, KeyboardEventArgs, KeyboardEvents } from '@syncfusion/ej2-base';import { addClass, attributes, createElement, detach, removeClass, rippleEffect, isRippleEnabled } from '@syncfusion/ej2-base';import { getUniqueID, getValue, setValue } from '@syncfusion/ej2-base';import { CheckBoxHelper } from './check-box-builder';
import {ChangeEventArgs,LabelPosition} from "./check-box";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class CheckBox
 */
export interface CheckBoxModel extends ComponentModel{

    /**
     * Triggers when the CheckBox state has been changed by user interaction.
     * @event
     */
    change?: EmitType<ChangeEventArgs>;

    /**
     * Specifies a value that indicates whether the CheckBox is `checked` or not.
     * When set to `true`, CheckBox will be in `checked` state.
     * @default false
     */
    checked?: boolean;

    /**
     * Defines class/multiple classes separated by a space in the CheckBox element.
     * You can add custom styles to the CheckBox by using this property.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies a value that indicates whether the CheckBox is `disabled` or not.
     * When set to `true`, CheckBox will be in `disabled` state.
     * @default false
     */
    disabled?: boolean;

    /**
     * Specifies a value that indicates whether the CheckBox is in `indeterminate` state or not.
     * When set to `true`, CheckBox will be in `indeterminate` state.
     * @default false
     */
    indeterminate?: boolean;

    /**
     * Defines the caption for the CheckBox, that describes the purpose of the CheckBox.
     * @default ''
     */
    label?: string;

    /**
     * Positions label `before`/`after` to the CheckBox.
     * When set to `before`, the label is positioned to left of the CheckBox.
     * @default 'after'
     */
    labelPosition?: LabelPosition;

    /**
     * Defines `name` attribute for the CheckBox.
     * It is used to reference form data (CheckBox value) after a form is submitted.
     * @default ''
     */
    name?: string;

    /**
     * Defines `value` attribute for the CheckBox.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    value?: string;

}