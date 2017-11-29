import { Component, Property, ChildProperty, Event, CreateBuilder, BaseEventArgs } from '@syncfusion/ej2-base';import { EventHandler, EmitType, Touch, TapEventArgs, Browser, Animation as PopupAnimation } from '@syncfusion/ej2-base';import { isNullOrUndefined, getUniqueID, formatUnit } from '@syncfusion/ej2-base';import { attributes, createElement, closest, removeClass, addClass, remove } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, Complex } from '@syncfusion/ej2-base';import { Popup } from '../popup/popup';import { OffsetPosition, calculatePosition } from '../common/position';import { isCollide, fit } from '../common/collision';import { TooltipHelper } from './tooltip-builder';
import {TooltipAnimationSettings,Position,TipPointerPosition,TooltipEventArgs} from "./tooltip";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Animation
 */
export interface AnimationModel {

    /**
     * Animation settings to be applied on the Tooltip, while it is being shown over the target.
     */
    open?: TooltipAnimationSettings;

    /**
     * Animation settings to be applied on the Tooltip, when it is closed.
     */
    close?: TooltipAnimationSettings;

}

/**
 * Interface for a class Tooltip
 */
export interface TooltipModel extends ComponentModel{

    /**
     * Sets the `width` of the Tooltip, accepting both string and number values.
     * When set to `auto`, the Tooltip width gets auto adjusted to display its content within the viewable screen.
     * @default 'auto'
     */
    width?: string | number;

    /**
     * Sets the `height` of the Tooltip, accepting both string and number values.
     * When `height` is specified with a certain pixel value and if the Tooltip content overflows,
     * then the scrolling mode gets enabled on the Tooltip.
     * @default 'auto'
     */
    height?: string | number;

    /**
     * Displays the content value on the Tooltip, accepting both string and HTMLElement values.
     */
    content?: string | HTMLElement;

    /**
     * Denotes the target selectors on which the Tooltip gets triggered.
     * In this case, the initialized Tooltip element is considered the parent container.
     */
    target?: string;

    /**
     * Allows you to set the position for the Tooltip element, and provides 12 default options to position the Tooltip.
     * @default 'top center'
     */
    position?: Position;

    /**
     * Sets the space between the target and Tooltip element in X axis.
     * @default 0
     */
    offsetX?: number;

    /**
     * Sets the space between the target and Tooltip element in Y axis.
     * @default 0
     */
    offsetY?: number;

    /**
     * Allows you to either show or hide the tip pointer on the Tooltip.
     * @default true
     */
    showTipPointer?: boolean;

    /**
     * Sets the position of the tip pointer on the Tooltip.
     * When set to `auto`, the tip pointer auto adjusts within the space of target's length
     * and does not point outside.
     * @default 'auto'
     */
    tipPointerPosition?: TipPointerPosition;

    /**
     * Determines on which open mode, the Tooltip needs to be shown. With the default value set to `auto`,
     * Tooltip appears when the user hovers or focuses on a target on the desktop.
     * If the Tooltip is to be displayed on touch devices, then one needs to tap and hold the target element to view it's related content.
     * @default 'auto'
     */
    opensOn?: string;

    /**
     * When set to `true`, allows the Tooltip to follow the mouse pointer movement over the specified target element.
     * @default false
     */
    mouseTrail?: boolean;

    /**
     * When set to `true`, allows the Tooltip to stay open on the target until it is  manually closed.
     * @default false
     */
    isSticky?: Boolean;

    /**
     * Allows to set the same or different animation option for the Tooltip, when it is opened or closed.
     * @default { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }
     */
    animation?: AnimationModel;

    /**
     * Opens the Tooltip after the specified delay in milliseconds.
     * @default 0
     */
    openDelay?: number;

    /**
     * Closes the Tooltip after the specified delay in milliseconds.
     * @default 0
     */
    closeDelay?: number;

    /**
     * Allows the CSS class name to be applied to the Tooltip.
     * @default null
     */
    cssClass?: string;

    /**
     * When set to `true`, enables the RTL mode on the Tooltip, and the Tooltip and its content are displayed
     *  in the right to left direction.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Triggers before the Tooltip and its contents are added to the DOM.
     * When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
     * This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
     * For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
     * @event
     */
    beforeRender?: EmitType<TooltipEventArgs>;

    /**
     * Triggers before the Tooltip is displayed over the target element.
     * When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
     * This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to
     *  set customized styles in it and so on.
     * @event
     */
    beforeOpen?: EmitType<TooltipEventArgs>;

    /**
     * Triggers after the Tooltip UI is shown on the target.
     * @event
     */
    afterOpen?: EmitType<TooltipEventArgs>;

    /**
     * Triggers before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.
     * @event
     */
    beforeClose?: EmitType<TooltipEventArgs>;

    /**
     * Triggers after the Tooltip UI is hidden.
     * @event
     */
    afterClose?: EmitType<TooltipEventArgs>;

    /**
     * Triggers after the Tooltip control is created.
     * @event
     */
    created?: EmitType<Object>;

    /**
     * Triggers when the Tooltip control is destroyed.
     * @event
     */
    destroyed?: EmitType<Object>;

}