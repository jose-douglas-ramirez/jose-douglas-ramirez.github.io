import { Property, NotifyPropertyChanges, INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';import { CreateBuilder, rippleEffect, EventHandler } from '@syncfusion/ej2-base';import { createElement, addClass, removeClass, detach } from '@syncfusion/ej2-base';import { ButtonHelper } from './button-builder';import { getTextNode } from '../common/common';
import {IconPosition} from "./button";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Button
 */
export interface ButtonModel extends ComponentModel{

    /**
     * Positions the icon before/after the text content in the Button.
     * When set to `right`, the icon will be positioned to the right of the text content.
     * @default "left"
     */
    iconPosition?: IconPosition;

    /**
     * Defines class/multiple classes separated by a space for the Button that is used to include an icon.
     * Buttons can also include font icon and sprite image.
     * @default ""
     */
    iconCss?: string;

    /**
     * Specifies a value that indicates whether the Button is `disabled` or not.
     * @default false
     */
    disabled?: boolean;

    /**
     * Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    isPrimary?: boolean;

    /**
     * Defines class/multiple classes separated by a space in the Button element. Button types, styles, and size can be defined using this.
     * @default ""
     */
    cssClass?: string;

    /**
     * Defines the `content` of the Button element that can either be text or HTML elements.
     * @default ""
     */
    content?: string;

    /**
     * Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    isToggle?: boolean;

}