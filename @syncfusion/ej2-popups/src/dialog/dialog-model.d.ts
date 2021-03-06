import { Component, Property, Event, CreateBuilder, Collection, L10n, Browser, EmitType } from '@syncfusion/ej2-base';import { createElement, addClass, removeClass, detach, attributes, prepend, setStyleAttribute } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';import { isNullOrUndefined, formatUnit } from '@syncfusion/ej2-base';import { DialogHelper } from './dialog-builder';import { EventHandler } from '@syncfusion/ej2-base';import { Draggable } from '@syncfusion/ej2-base';import { Popup, PositionData } from '../popup/popup';import { Button, ButtonModel } from '@syncfusion/ej2-buttons';
import {AnimationSettings} from "./dialog";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class ButtonProps
 */
export interface ButtonPropsModel {

    /**
     * Specifies the Button component properties to render the Dialog buttons.
     */
    buttonModel?: ButtonModel;

    /**
     * Event triggers when `click` the Dialog button.
     * @event
     */
    click?: EmitType<Object>;

}

/**
 * Interface for a class Dialog
 */
export interface DialogModel extends ComponentModel{

    /**
     * Specifies the `content` to be displayed in Dialog, it can be text or HTML element.
     * @default ''
     */
    content?: string | HTMLElement;

    /**
     * Specifies the value to either show or hide the close icon button.
     * @default false
     */
    showCloseIcon?: boolean;

    /**
     * Specifies the value to render the Dialog as modal or modeless.
     * @default false
     */
    isModal?: boolean;

    /**
     * Specifies the `header` content that defines how the Dialog `header` is rendered. 
     * @default ''
     */
    header?: string;

    /**
     * Specifies the value to either Dialog is opened or not.
     * @default false     
     */
    visible?: boolean;

    /**
     * Specifies the `height` of the Dialog. 
     * @default 'auto'
     */
    height?: string | number;

    /**
     * Specifies the `width` of the Dialog. 
     * @default '100%'
     */
    width?: string | number;

    /**
     * Specifies the CSS class name to be added for Dialog element.
     * User can add single or multiple CSS classes.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies the z-index value for Dialog.
     */
    zIndex?: number;

    /**
     * Specifies the `target` element where the Dialog should be displayed.
     * If the user set the specific `target` element for Dialog, it will be positioned based on the `target`.
     * @default null
     */
    target?: HTMLElement | string;

    /**
     * Specifies the template content to defines how the Dialog footer is rendered. 
     * @default ''
     */
    footerTemplate?: string;

    /**
     * Specifies the value to either enable or disable draggable option in Dialog. 
     * @default false
     */
    allowDragging?: boolean;

    /**
     * Specifies the collection of Dialog `buttons` with click action and button component model.     
     * @default [{}]   
     */
    buttons?: ButtonPropsModel[];

    /**
     * Specifies the Dialog that is closed when user press the ESC key. 
     * @default true
     */
    closeOnEscape?: boolean;

    /**
     * Specifies the Dialog animation settings.
     * @default { effect: 'Fade', duration: 400, delay:0 }
     */
    animationSettings?: AnimationSettings;

    /**
     * Specifies to `position` the Dialog on built-in 9 places or any custom location with
     * respect to the associated target elements.
     * For ex: {X:'left', Y:'top'} or { X: 100, Y: 100 }
     * Following list of positions are available.
     * * for X is: left, center, right (or) any offset value
     * * for Y is: top, center, bottom (or) any offset value
     * @default {X:'center', Y:'center'}
     */
    position?: PositionData;

    /**
     * Specifies the localization culture code for Dialog.
     * @default ''
     */
    locale?: string;

    /**
     * Event triggers when the Dialog is `created`. 
     * @event
     */
    created?: EmitType<Object>;

    /**
     * Event triggers once Dialog is opened.
     * @event
     */
    open?: EmitType<Object>;

    /**
     * Event triggers before open the Dialog. 
     * @event
     */
    beforeOpen?: EmitType<Object>;

    /**
     * Event triggers once the Dialog is closed.
     * @event
     */
    close?: EmitType<Object>;

    /**
     * Event triggers before close the Dialog.
     * @event
     */
    beforeClose?: EmitType<Object>;

    /**
     * Event triggers when user starts to drag the Dialog. 
     * @event
     */
    dragStart?: EmitType<Object>;

    /**
     * Event triggers when the user stops dragging the Dialog.
     * @event
     */
    dragStop?: EmitType<Object>;

    /**
     * Event triggers when the user drags Dialog. 
     * @event
     */
    drag?: EmitType<Object>;

    /**
     * Event triggers when modal Dialog overlay is clicked. 
     * @event
     */
    overlayClick?: EmitType<Object>;

}