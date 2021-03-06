import { Component, EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { ButtonPropsModel, DialogModel } from './dialog-model';
import { DialogHelper } from './dialog-builder';
import { PositionData } from '../popup/popup';
import { ButtonModel } from '@syncfusion/ej2-buttons';
export declare class ButtonProps extends ChildProperty<ButtonProps> {
    /**
     * Specifies the Button component properties to render the Dialog buttons.
     */
    buttonModel: ButtonModel;
    /**
     * Event triggers when `click` the Dialog button.
     * @event
     */
    click: EmitType<Object>;
}
/**
 * Specifies Dialog open and close animation settings.
 */
export interface AnimationSettings {
    /**
     * Specifies the effect to open and close the Dialog.
     * If the user sets `Fade` effect then the Dialog will open with 'FadeIn' effect and close with 'FadeOut' effect.
     * Following list of effects will be available, you can use any of this.
     * 1. 'Fade'
     * 2. 'FadeZoom'
     * 3. 'FlipLeftDown'
     * 4. 'FlipLeftUp'
     * 5. 'FlipRightDown'
     * 6. 'FlipRightUp'
     * 7. 'FlipXDown'
     * 8. 'FlipXUp'
     * 9. 'FlipYLeft'
     * 10. 'FlipYRight'
     * 11. 'SlideBottom'
     * 12. 'SlideLeft'
     * 13. 'SlideRight'
     * 14. 'SlideTop'
     * 15. 'Zoom'
     * 16. 'None'
     */
    effect?: DialogEffect;
    /**
     * Specifies the animation `duration` to complete with one animation cycle.
     */
    duration?: number;
    /**
     * Specifies the `delay` value in milliseconds to wait before animation begins.
     */
    delay?: number;
}
/**
 * Specifies the Dialog animation effects.
 */
export declare type DialogEffect = 'Fade' | 'FadeZoom' | 'FlipLeftDown' | 'FlipLeftUp' | 'FlipRightDown' | 'FlipRightUp' | 'FlipXDown' | 'FlipXUp' | 'FlipYLeft' | 'FlipYRight' | 'SlideBottom' | 'SlideLeft' | 'SlideRight' | 'SlideTop' | 'Zoom' | 'None';
/**
 * Represents the Dialog component that displays information to the user, and used to get the user input.
 * ```html
 * <div id="dialog"></div>
 * ```
 * ```typescript
 * <script>
 *   var dialogObj = new Dialog({ header: 'Dialog' });
 *   dialogObj.appendTo("#dialog");
 * </script>
 * ```
 */
export declare class Dialog extends Component<HTMLElement> implements INotifyPropertyChanged {
    private closeIconClickEventHandler;
    private dlgOverlayClickEventHandler;
    private createEventHandler;
    private contentEle;
    private dlgOverlay;
    private dlgContainer;
    private headerEle;
    private buttonContent;
    private ftrTemplateContent;
    private headerContent;
    private closeIcon;
    private popupObj;
    private btnObj;
    private closeIconBtnObj;
    private dragObj;
    private primaryButtonEle;
    private targetEle;
    private dialogOpen;
    private storeActiveElement;
    private focusElements;
    private focusIndex;
    private closedFrom;
    /**
     * Specifies the `content` to be displayed in Dialog, it can be text or HTML element.
     * @default ''
     */
    content: string | HTMLElement;
    /**
     * Specifies the value to either show or hide the close icon button.
     * @default false
     */
    showCloseIcon: boolean;
    /**
     * Specifies the value to render the Dialog as modal or modeless.
     * @default false
     */
    isModal: boolean;
    /**
     * Specifies the `header` content that defines how the Dialog `header` is rendered.
     * @default ''
     */
    header: string;
    /**
     * Specifies the value to either Dialog is opened or not.
     * @default false
     */
    visible: boolean;
    /**
     * Specifies the `height` of the Dialog.
     * @default 'auto'
     */
    height: string | number;
    /**
     * Specifies the `width` of the Dialog.
     * @default '100%'
     */
    width: string | number;
    /**
     * Specifies the CSS class name to be added for Dialog element.
     * User can add single or multiple CSS classes.
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies the z-index value for Dialog.
     */
    zIndex: number;
    /**
     * Specifies the `target` element where the Dialog should be displayed.
     * If the user set the specific `target` element for Dialog, it will be positioned based on the `target`.
     * @default null
     */
    target: HTMLElement | string;
    /**
     * Specifies the template content to defines how the Dialog footer is rendered.
     * @default ''
     */
    footerTemplate: string;
    /**
     * Specifies the value to either enable or disable draggable option in Dialog.
     * @default false
     */
    allowDragging: boolean;
    /**
     * Specifies the collection of Dialog `buttons` with click action and button component model.
     * @default [{}]
     */
    buttons: ButtonPropsModel[];
    /**
     * Specifies the Dialog that is closed when user press the ESC key.
     * @default true
     */
    closeOnEscape: boolean;
    /**
     * Specifies the Dialog animation settings.
     * @default { effect: 'Fade', duration: 400, delay:0 }
     */
    animationSettings: AnimationSettings;
    /**
     * Specifies to `position` the Dialog on built-in 9 places or any custom location with
     * respect to the associated target elements.
     * For ex: {X:'left', Y:'top'} or { X: 100, Y: 100 }
     * Following list of positions are available.
     * * for X is: left, center, right (or) any offset value
     * * for Y is: top, center, bottom (or) any offset value
     * @default {X:'center', Y:'center'}
     */
    position: PositionData;
    /**
     * Specifies the localization culture code for Dialog.
     * @default ''
     */
    locale: string;
    /**
     * Event triggers when the Dialog is `created`.
     * @event
     */
    created: EmitType<Object>;
    /**
     * Event triggers once Dialog is opened.
     * @event
     */
    open: EmitType<Object>;
    /**
     * Event triggers before open the Dialog.
     * @event
     */
    beforeOpen: EmitType<Object>;
    /**
     * Event triggers once the Dialog is closed.
     * @event
     */
    close: EmitType<Object>;
    /**
     * Event triggers before close the Dialog.
     * @event
     */
    beforeClose: EmitType<Object>;
    /**
     * Event triggers when user starts to drag the Dialog.
     * @event
     */
    dragStart: EmitType<Object>;
    /**
     * Event triggers when the user stops dragging the Dialog.
     * @event
     */
    dragStop: EmitType<Object>;
    /**
     * Event triggers when the user drags Dialog.
     * @event
     */
    drag: EmitType<Object>;
    /**
     * Event triggers when modal Dialog overlay is clicked.
     * @event
     */
    overlayClick: EmitType<Object>;
    /**
     * Constructor for creating the widget
     * @hidden
     */
    constructor(options?: DialogModel, element?: string | HTMLElement);
    /**
     * Initialize the control rendering
     * @private
     */
    render(): void;
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void;
    private keyDown(event);
    /**
     * Initialize the control rendering
     * @private
     */
    private initialize();
    /**
     * Initialize the rendering
     * @private
     */
    private initRender();
    private positionChange();
    private getZindexPartial();
    private setAllowDragging();
    private setButton();
    private setContent();
    private setMaxHeight();
    private setEnableRTL();
    private setHeader();
    private setFooterTemplate();
    private createHeaderContent();
    private renderCloseIcon();
    private closeIconTitle();
    private setCSSClass(oldCSSClass?);
    private setIsModal();
    private getValidFocusNode(items);
    private focusableElements(content);
    private getAutoFocusNode(container);
    private disableElement(element, t);
    private focusContent();
    private bindEvent(element);
    private unBindEvent(element);
    /**
     * Module required function
     * @private
     */
    protected getModuleName(): string;
    /**
     * Called internally if any of the property value changed
     * @private
     */
    onPropertyChanged(newProp: DialogModel, oldProp: DialogModel): void;
    /**
     * Get the properties to be maintained in the persisted state.
     * @private
     */
    protected getPersistData(): string;
    /**
     * To destroy the widget
     * @method destroy
     * @return {void}
     * @private
     * @memberof dialog
     */
    destroy(): void;
    /**
     * Binding event to the element while widget creation
     * @hidden
     */
    private wireEvents();
    /**
     * Unbinding event to the element while widget destroy
     * @hidden
     */
    private unWireEvents();
    /**
     * Specifies dialog offset x and y position changed dynamically or
     * change the header,footer height or width dynamically, reposition the dialog as per the new changes.
     * @return {void}
     */
    refreshPosition(): void;
    /**
     * To show the Dialog element on screen.
     * To enable the fullScreen Dialog pass the parameter to 'true'.
     * @param { boolean } isFullScreen - Enable the fullScreen Dialog.
     * @return {void}
     */
    show(isFullScreen?: boolean): void;
    /**
     * To hide the Dialog element on screen.
     * @return {void}
     */
    hide(): void;
    /**
     * Specifies to view the Full screen Dialog.
     * @private
     */
    private fullScreen(args);
}
/**
 * builder for Dialog
 */
export declare let dialogBuilder: DialogHelper;
