import { AnimationModel, EmitType, Component } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { PopupModel } from './popup-model';
/**
 * Specifies the offset position values.
 */
export interface PositionData {
    /**
     * specify the offset left value
     * @default : "left"
     */
    X?: string | number;
    /**
     * specify the offset top value.
     * @default : "top"
     */
    Y?: string | number;
}
export interface CollisionAxis {
    /**
     * specify the collision handler for a X-Axis.
     * @default : "none"
     */
    X?: CollisionType;
    /**
     * specify the collision handler for a Y-Axis.
     * @default : "none"
     */
    Y?: CollisionType;
}
/**
 * Collision type.
 */
export declare type CollisionType = 'none' | 'flip' | 'fit';
/**
 * action on scroll type.
 */
export declare type ActionOnScrollType = 'reposition' | 'hide' | 'none';
/**
 * Target element type.
 */
export declare type TargetType = 'relative' | 'container';
/**
 * Represents the Popup Component
 * ```html
 * <div id="popup" style="position:absolute;height:100px;width:100px;">
 * <div style="margin:35px 25px;">Popup Content</div></div>
 * ```
 * ```typescript
 * <script>
 *   var popupObj = new Popup();
 *   popupObj.appendTo("#popup");
 * </script>
 * ```
 */
export declare class Popup extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Specifies the height of the popup element.
     * @default 'auto'
     */
    height: string | number;
    /**
     * Specifies the height of the popup element.
     * @default 'auto'
     */
    width: string | number;
    /**
     * Specifies the content of the popup element, it can be string or HTMLElement.
     * @default null
     */
    content: string | HTMLElement;
    /**
     * Specifies the relative element type of the component.
     * @default 'container'
     */
    targetType: TargetType;
    /**
     * Specifies the collision detectable container element of the component.
     * @default null
     */
    viewPortElement: HTMLElement;
    /**
     * Specifies the collision handler settings of the component.
     * @default { X: 'none',Y: 'none' }
     */
    collision: CollisionAxis;
    /**
     * Specifies the relative container element of the popup element.Based on the relative element, popup element will be positioned.
     *
     * @default 'body'
     */
    relateTo: HTMLElement | string;
    /**
     * Specifies the popup element position, respective to the relative element.
     * @default {X:"left", Y:"top"}
     */
    position: PositionData;
    /**
     * specifies the popup element offset-x value, respective to the relative element.
     * @default 0
     */
    offsetX: number;
    /**
     * specifies the popup element offset-y value, respective to the relative element.
     * @default 0
     */
    offsetY: number;
    /**
     * specifies the z-index value of the popup element.
     * @default 1000
     */
    zIndex: number;
    /**
     * specifies the rtl direction state of the popup element.
     * @default false
     */
    enableRtl: boolean;
    /**
     * specifies the action that should happen when scroll the target-parent container.
     * This property should define either `reposition` or `hide`.
     * when set `reposition` to this property, the popup position will refresh when scroll any parent container.
     * when set `hide` to this property, the popup will be closed when scroll any parent container.
     * @default 'reposition'
     */
    actionOnScroll: ActionOnScrollType;
    /**
     * specifies the animation that should happen when popup open.
     * @default 'null'
     */
    showAnimation: AnimationModel;
    /**
     * specifies the animation that should happen when popup closes.
     * @default 'null'
     */
    hideAnimation: AnimationModel;
    /**
     * Triggers the event once opened the popup.
     * @event
     */
    open: EmitType<Object>;
    /**
     * Trigger the event once closed the popup.
     * @event
     */
    close: EmitType<Object>;
    /**
     * * Constructor for creating the widget
     */
    /**
     * Triggers the event when target element hide from view port on scroll.
     * @event
     */
    targetExitViewport: EmitType<Object>;
    private targetInvisibleStatus;
    constructor(element?: HTMLElement, options?: PopupModel);
    /**
     * Called internally if any of the property value changed.
     * @private
     */
    onPropertyChanged(newProp: PopupModel, oldProp: PopupModel): void;
    /**
     * gets the Component module name.
     * @private
     */
    getModuleName(): string;
    /**
     * gets the persisted state properties of the Component.
     */
    protected getPersistData(): string;
    /**
     * To destroy the control.
     */
    destroy(): void;
    /**
     * To Initialize the control rendering
     * @private
     */
    render(): void;
    private wireEvents();
    private wireScrollEvents();
    private unwireEvents();
    private unwireScrollEvents();
    private getRelateToElement();
    private scrollRefresh(e);
    /**
     * This method is to get the element visibility on viewport when scroll
     * the page. This method will returns true even though 1 px of element
     * part is in visible.
     */
    private isElementOnViewport(relateToElement, scrollElement);
    private isElementVisible(relateToElement, scrollElement);
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void;
    private setEnableRtl();
    private setContent();
    private orientationOnChange();
    /**
     * Based on the `relative` element and `offset` values, `Popup` element position will refreshed.
     */
    refreshPosition(): void;
    private reposition();
    private getAnchorPosition(anchorEle, ele, position, offsetX, offsetY);
    private callFlip(param);
    private callFit(param);
    private checkCollision();
    /**
     * Shows the popup element from screen.
     * @param { AnimationModel | Function } collisionOrAnimationOptions? - To pass animation options or collision function.
     * @param { Function } collision? - To pass the collision function.
     */
    show(animationOptions?: AnimationModel): void;
    /**
     * Hides the popup element from screen.
     * @param { AnimationModel } animationOptions? - To give the animation options.
     */
    hide(animationOptions?: AnimationModel): void;
    /**
     * Gets scrollable parent elements for the given element.
     * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
     */
    getScrollableParent(element: HTMLElement): HTMLElement[];
}
