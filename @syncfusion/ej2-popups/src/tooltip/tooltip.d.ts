import { Component, ChildProperty, BaseEventArgs } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { TooltipModel, AnimationModel } from './tooltip-model';
import { TooltipHelper } from './tooltip-builder';
/**
 * Set of open modes available for Tooltip.
 */
export declare type OpenMode = 'auto' | 'hover' | 'click' | 'focus' | 'custom';
/**
 * Applicable positions where the Tooltip can be displayed over specific target elements.
 */
export declare type Position = 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right' | 'left top' | 'left center' | 'left bottom' | 'right top' | 'right center' | 'right bottom';
/**
 * Applicable tip positions attached to the Tooltip.
 */
export declare type TipPointerPosition = 'auto' | 'start' | 'middle' | 'end';
/**
 * Animation effects that are applicable for Tooltip.
 */
export declare type Effect = 'FadeIn' | 'FadeOut' | 'FadeZoomIn' | 'FadeZoomOut' | 'FlipXDownIn' | 'FlipXDownOut' | 'FlipXUpIn' | 'FlipXUpOut' | 'FlipYLeftIn' | 'FlipYLeftOut' | 'FlipYRightIn' | 'FlipYRightOut' | 'ZoomIn' | 'ZoomOut' | 'None';
/**
 * Interface for Tooltip event arguments.
 */
export interface TooltipEventArgs extends BaseEventArgs {
    /**
     * Denotes the type of the triggered event.
     */
    type: String;
    /**
     * Illustrates whether the current action needs to be prevented or not.
     */
    cancel: Boolean;
    /**
     * Specifies the current event object.
     */
    event: Event;
    /**
     * Current target element where the Tooltip is to be displayed.
     */
    target: HTMLElement;
    /**
     * Tooltip element
     */
    element: HTMLElement;
}
/**
 * Animation options that are common for both open and close actions of the Tooltip.
 */
export interface TooltipAnimationSettings {
    /**
     * Animation effect that applies on the Tooltip, during open and close actions.
     */
    effect?: Effect;
    /**
     * Denotes the `duration` of the animation that is completed per animation cycle.
     */
    duration?: number;
    /**
     * Specifies the `delay` value in milliseconds, indicating the waiting time before animation begins.
     */
    delay?: number;
}
export declare class Animation extends ChildProperty<Animation> {
    /**
     * Animation settings to be applied on the Tooltip, while it is being shown over the target.
     */
    open: TooltipAnimationSettings;
    /**
     * Animation settings to be applied on the Tooltip, when it is closed.
     */
    close: TooltipAnimationSettings;
}
/**
 * Represents the Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <div id="tooltip">Show Tooltip</div>
 * ```
 * ```typescript
 * <script>
 *   var tooltipObj = new Tooltip({ content: 'Tooltip text' });
 *   tooltipObj.appendTo("#tooltip");
 * </script>
 * ```
 */
export declare class Tooltip extends Component<HTMLElement> implements INotifyPropertyChanged {
    private popupObj;
    private tooltipEle;
    private ctrlId;
    private tipClass;
    private tooltipPositionX;
    private tooltipPositionY;
    private tooltipEventArgs;
    private isHidden;
    private showTimer;
    private hideTimer;
    private tipWidth;
    private tipHeight;
    private touchModule;
    private autoCloseTimer;
    /**
     * Sets the `width` of the Tooltip, accepting both string and number values.
     * When set to `auto`, the Tooltip width gets auto adjusted to display its content within the viewable screen.
     * @default 'auto'
     */
    width: string | number;
    /**
     * Sets the `height` of the Tooltip, accepting both string and number values.
     * When `height` is specified with a certain pixel value and if the Tooltip content overflows,
     * then the scrolling mode gets enabled on the Tooltip.
     * @default 'auto'
     */
    height: string | number;
    /**
     * Displays the content value on the Tooltip, accepting both string and HTMLElement values.
     */
    content: string | HTMLElement;
    /**
     * Denotes the target selectors on which the Tooltip gets triggered.
     * In this case, the initialized Tooltip element is considered the parent container.
     */
    target: string;
    /**
     * Allows you to set the position for the Tooltip element, and provides 12 default options to position the Tooltip.
     * @default 'top center'
     */
    position: Position;
    /**
     * Sets the space between the target and Tooltip element in X axis.
     * @default 0
     */
    offsetX: number;
    /**
     * Sets the space between the target and Tooltip element in Y axis.
     * @default 0
     */
    offsetY: number;
    /**
     * Allows you to either show or hide the tip pointer on the Tooltip.
     * @default true
     */
    showTipPointer: boolean;
    /**
     * Sets the position of the tip pointer on the Tooltip.
     * When set to `auto`, the tip pointer auto adjusts within the space of target's length
     * and does not point outside.
     * @default 'auto'
     */
    tipPointerPosition: TipPointerPosition;
    /**
     * Determines on which open mode, the Tooltip needs to be shown. With the default value set to `auto`,
     * Tooltip appears when the user hovers or focuses on a target on the desktop.
     * If the Tooltip is to be displayed on touch devices, then one needs to tap and hold the target element to view it's related content.
     * @default 'auto'
     */
    opensOn: string;
    /**
     * When set to `true`, allows the Tooltip to follow the mouse pointer movement over the specified target element.
     * @default false
     */
    mouseTrail: boolean;
    /**
     * When set to `true`, allows the Tooltip to stay open on the target until it is  manually closed.
     * @default false
     */
    isSticky: Boolean;
    /**
     * Allows to set the same or different animation option for the Tooltip, when it is opened or closed.
     * @default { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }
     */
    animation: AnimationModel;
    /**
     * Opens the Tooltip after the specified delay in milliseconds.
     * @default 0
     */
    openDelay: number;
    /**
     * Closes the Tooltip after the specified delay in milliseconds.
     * @default 0
     */
    closeDelay: number;
    /**
     * Allows the CSS class name to be applied to the Tooltip.
     * @default null
     */
    cssClass: string;
    /**
     * When set to `true`, enables the RTL mode on the Tooltip, and the Tooltip and its content are displayed
     *  in the right to left direction.
     * @default false
     */
    enableRtl: boolean;
    /**
     * Triggers before the Tooltip and its contents are added to the DOM.
     * When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
     * This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
     * For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
     * @event
     */
    beforeRender: EmitType<TooltipEventArgs>;
    /**
     * Triggers before the Tooltip is displayed over the target element.
     * When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
     * This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to
     *  set customized styles in it and so on.
     * @event
     */
    beforeOpen: EmitType<TooltipEventArgs>;
    /**
     * Triggers after the Tooltip UI is shown on the target.
     * @event
     */
    afterOpen: EmitType<TooltipEventArgs>;
    /**
     * Triggers before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.
     * @event
     */
    beforeClose: EmitType<TooltipEventArgs>;
    /**
     * Triggers after the Tooltip UI is hidden.
     * @event
     */
    afterClose: EmitType<TooltipEventArgs>;
    /**
     * Triggers after the Tooltip control is created.
     * @event
     */
    created: EmitType<Object>;
    /**
     * Triggers when the Tooltip control is destroyed.
     * @event
     */
    destroyed: EmitType<Object>;
    /**
     * Constructor for creating the Tooltip widget
     */
    constructor(options?: TooltipModel, element?: string | HTMLElement);
    private initialize();
    private formatPosition();
    private renderArrow();
    private setTipClass(position);
    private renderPopup(target);
    private getTooltipPosition(target);
    private reposition(target);
    private openPopupHandler();
    private closePopupHandler();
    private calculateTooltipOffset(position);
    private updateTipPosition(position);
    private adjustArrow(target, position, tooltipPositionX, tooltipPositionY);
    private renderContent(target?);
    private renderCloseIcon();
    private addDescribedBy(target, id);
    private removeDescribedBy(target);
    private tapHoldHandler(evt);
    private touchEndHandler(e);
    private targetClick(e);
    private targetHover(e);
    private showTooltip(target, showAnimation, e?);
    private checkCollision(target, x, y);
    private collisionFlipFit(target, x, y);
    private hideTooltip(hideAnimation, e?, targetElement?);
    private restoreElement(target);
    private clear();
    private onMouseOut(e);
    private onStickyClose(e);
    private onMouseMove(event);
    private keyDown(event);
    private touchEnd(e);
    private scrollHandler(e);
    /**
     * Core method that initializes the control rendering.
     * @private
     */
    render(): void;
    /**
     * Initializes the values of private members.
     * @private
     */
    protected preRender(): void;
    /**
     * Binding events to the Tooltip element.
     * @hidden
     */
    private wireEvents(trigger);
    private getTriggerList(trigger);
    private wireFocusEvents();
    private wireMouseEvents(e, target);
    /**
     * Unbinding events from the element on widget destroy.
     * @hidden
     */
    private unwireEvents(trigger);
    private unwireFocusEvents();
    private unwireMouseEvents(target);
    /**
     * Core method to return the component name.
     * @private
     */
    getModuleName(): string;
    /**
     * Returns the properties to be maintained in the persisted state.
     * @private
     */
    protected getPersistData(): string;
    /**
     * Called internally, if any of the property value changed.
     * @private
     */
    onPropertyChanged(newProp: TooltipModel, oldProp: TooltipModel): void;
    /**
     * Shows the Tooltip on the specified target with specific animation settings.
     * @param element Target element where the Tooltip is to be displayed.
     * @param animation Sets the specific animation, while showing the Tooltip on the screen.
     * @return {void}
     */
    open(element: HTMLElement, animation?: TooltipAnimationSettings): void;
    /**
     * Hides the Tooltip with specific animation effect.
     * @param animation Sets the specific animation when hiding Tooltip from the screen.
     * @return {void}
     */
    close(animation?: TooltipAnimationSettings): void;
    /**
     * Refreshes the Tooltip content and its position.
     * @param target Target element where the Tooltip content or position needs to be refreshed.
     * @return {void}
     */
    refresh(target?: HTMLElement): void;
    /**
     * Destroys the Tooltip widget.
     * @method destroy
     * @return {void}
     * @memberof Tooltip
     */
    destroy(): void;
}
/**
 * Builder for Tooltip.
 */
export declare let tooltipBuilder: TooltipHelper;
