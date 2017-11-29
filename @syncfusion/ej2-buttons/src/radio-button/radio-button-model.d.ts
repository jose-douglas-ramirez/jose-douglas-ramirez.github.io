import { Component, CreateBuilder, INotifyPropertyChanged, rippleEffect, NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';import { BaseEventArgs, EmitType, Event, EventHandler } from '@syncfusion/ej2-base';import { addClass, createElement, detach, isRippleEnabled } from '@syncfusion/ej2-base';import { getUniqueID } from '@syncfusion/ej2-base';import { RadioButtonHelper } from './radio-button-builder';import { wrapperInitialize, EJ2Instance } from './../common/common';
import {ChangeArgs} from "./radio-button";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class RadioButton
 */
export interface RadioButtonModel extends ComponentModel{

    /**
     * Event trigger when the RadioButton state has been changed by user interaction.
     * @event
     */
    change?: EmitType<ChangeArgs>;

    /**
     * Specifies a value that indicates whether the RadioButton is `checked` or not.
     * When set to `true`, RadioButton will be in `checked` state.
     * @default false
     */
    checked?: boolean;

    /**
     * Defines class/multiple classes separated by a space in the RadioButton element.
     * You can add custom styles to the RadioButton by using this property.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies a value that indicates whether the RadioButton is `disabled` or not.
     * When set to `true`, RadioButton will be in `disabled` state.
     * @default false
     */
    disabled?: boolean;

    /**
     * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
     * @default ''
     */
    label?: string;

    /**
     * Positions label `before`/`after` to the RadioButton.
     * When set to `before`, the label is positioned to left of the RadioButton.
     * @default 'after'
     */
    labelPosition?: string;

    /**
     * Defines `name` attribute for the RadioButton.
     * It is used to reference form data (RadioButton value) after a form is submitted.
     * @default ''
     */
    name?: string;

    /**
     * Defines `value` attribute for the RadioButton.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    value?: string;

}