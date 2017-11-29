import{Popup} from "./popup";
import { Animation, AnimationModel, Property, Event, EmitType, Component } from '@syncfusion/ej2-base';
import{ CollisionType, ActionOnScrollType, TargetType} from "./popup";

export interface PopupHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Popup
	/**
	* Trigger the event once closed the popup.
	*/
	close(value:Function): BuilderProperties;
	/**
	* Triggers the event once opened the popup.
	*/
	open(value:Function): BuilderProperties;
	/**
	* Triggers the event when target element hide from view port on scroll.
	*/
	targetExitViewport(value:Function): BuilderProperties;
	/**
	* specifies the action that should happen when scroll the target-parent container.
This property should define either `reposition` or `hide`.
when set `reposition` to this property, the popup position will refresh when scroll any parent container.
when set `hide` to this property, the popup will be closed when scroll any parent container.
	*/
	actionOnScroll(value:ActionOnScrollType): BuilderProperties;
	/**
	* Specifies the collision handler settings of the component.
	*/
	collision(value: (val:CollisionAxis) => void | Object): BuilderProperties;
	/**
	* Specifies the content of the popup element, it can be string or HTMLElement.
	*/
	content(value:string|HTMLElement): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* specifies the rtl direction state of the popup element.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the height of the popup element.
	*/
	height(value:string|number): BuilderProperties;
	/**
	* specifies the animation that should happen when popup closes.
	*/
	hideAnimation(value:AnimationModel): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* specifies the popup element offset-x value, respective to the relative element.
	*/
	offsetX(value:number): BuilderProperties;
	/**
	* specifies the popup element offset-y value, respective to the relative element.
	*/
	offsetY(value:number): BuilderProperties;
	/**
	* Specifies the popup element position, respective to the relative element.
	*/
	position(value: (val:PositionData) => void | Object): BuilderProperties;
	/**
	* Specifies the relative container element of the popup element.Based on the relative element, popup element will be positioned.
	*/
	relateTo(value:HTMLElement|string): BuilderProperties;
	/**
	* specifies the animation that should happen when popup open.
	*/
	showAnimation(value:AnimationModel): BuilderProperties;
	/**
	* Specifies the relative element type of the component.
	*/
	targetType(value:TargetType): BuilderProperties;
	/**
	* Specifies the collision detectable container element of the component.
	*/
	viewPortElement(value:HTMLElement): BuilderProperties;
	/**
	* Specifies the height of the popup element.
	*/
	width(value:string|number): BuilderProperties;
	/**
	* specifies the z-index value of the popup element.
	*/
	zIndex(value:number): BuilderProperties;
}
export interface CollisionAxis {
	/**
	* specify the collision handler for a X-Axis.
	*/
	X(value:CollisionType): CollisionAxis;
	/**
	* specify the collision handler for a Y-Axis.
	*/
	Y(value:CollisionType): CollisionAxis;
}
export interface PositionData {
	/**
	* specify the offset left value
	*/
	X(value:string|number): PositionData;
	/**
	* specify the offset top value.
	*/
	Y(value:string|number): PositionData;
}