import{Tooltip} from "./tooltip";

import{ Position, TipPointerPosition, Effect} from "./tooltip";

export interface TooltipHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Tooltip
	/**
	* Triggers after the Tooltip UI is hidden.
	*/
	afterClose(value:Function): BuilderProperties;
	/**
	* Triggers after the Tooltip UI is shown on the target.
	*/
	afterOpen(value:Function): BuilderProperties;
	/**
	* Triggers before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.
	*/
	beforeClose(value:Function): BuilderProperties;
	/**
	* Triggers before the Tooltip is displayed over the target element.
When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to
 set customized styles in it and so on.
	*/
	beforeOpen(value:Function): BuilderProperties;
	/**
	* Triggers before the Tooltip and its contents are added to the DOM.
When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
	*/
	beforeRender(value:Function): BuilderProperties;
	/**
	* Triggers after the Tooltip control is created.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Triggers when the Tooltip control is destroyed.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Allows to set the same or different animation option for the Tooltip, when it is opened or closed.
	*/
	animation(value: (val:AnimationModel) => void | Object): BuilderProperties;
	/**
	* Closes the Tooltip after the specified delay in milliseconds.
	*/
	closeDelay(value:number): BuilderProperties;
	/**
	* Displays the content value on the Tooltip, accepting both string and HTMLElement values.
	*/
	content(value:string|HTMLElement): BuilderProperties;
	/**
	* Allows the CSS class name to be applied to the Tooltip.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* When set to `true`, enables the RTL mode on the Tooltip, and the Tooltip and its content are displayed
 in the right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Sets the `height` of the Tooltip, accepting both string and number values.
When `height` is specified with a certain pixel value and if the Tooltip content overflows,
then the scrolling mode gets enabled on the Tooltip.
	*/
	height(value:string|number): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* When set to `true`, allows the Tooltip to stay open on the target until it is  manually closed.
	*/
	isSticky(value:Boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* When set to `true`, allows the Tooltip to follow the mouse pointer movement over the specified target element.
	*/
	mouseTrail(value:boolean): BuilderProperties;
	/**
	* Sets the space between the target and Tooltip element in X axis.
	*/
	offsetX(value:number): BuilderProperties;
	/**
	* Sets the space between the target and Tooltip element in Y axis.
	*/
	offsetY(value:number): BuilderProperties;
	/**
	* Opens the Tooltip after the specified delay in milliseconds.
	*/
	openDelay(value:number): BuilderProperties;
	/**
	* Determines on which open mode, the Tooltip needs to be shown. With the default value set to `auto`,
Tooltip appears when the user hovers or focuses on a target on the desktop.
If the Tooltip is to be displayed on touch devices, then one needs to tap and hold the target element to view it's related content.
	*/
	opensOn(value:string): BuilderProperties;
	/**
	* Allows you to set the position for the Tooltip element, and provides 12 default options to position the Tooltip.
	*/
	position(value:Position): BuilderProperties;
	/**
	* Allows you to either show or hide the tip pointer on the Tooltip.
	*/
	showTipPointer(value:boolean): BuilderProperties;
	/**
	* Denotes the target selectors on which the Tooltip gets triggered.
In this case, the initialized Tooltip element is considered the parent container.
	*/
	target(value:string): BuilderProperties;
	/**
	* Sets the position of the tip pointer on the Tooltip.
When set to `auto`, the tip pointer auto adjusts within the space of target's length
and does not point outside.
	*/
	tipPointerPosition(value:TipPointerPosition): BuilderProperties;
	/**
	* Sets the `width` of the Tooltip, accepting both string and number values.
When set to `auto`, the Tooltip width gets auto adjusted to display its content within the viewable screen.
	*/
	width(value:string|number): BuilderProperties;
}
export interface TooltipAnimationSettings {
	/**
	* Specifies the `delay` value in milliseconds, indicating the waiting time before animation begins.
	*/
	delay(value:number): TooltipAnimationSettings;
	/**
	* Denotes the `duration` of the animation that is completed per animation cycle.
	*/
	duration(value:number): TooltipAnimationSettings;
	/**
	* Animation effect that applies on the Tooltip, during open and close actions.
	*/
	effect(value:Effect): TooltipAnimationSettings;
}
export interface AnimationModel {
	/**
	* Animation settings to be applied on the Tooltip, when it is closed.
	*/
	close(value: (val:TooltipAnimationSettings) => void | Object): AnimationModel;
	/**
	* Animation settings to be applied on the Tooltip, while it is being shown over the target.
	*/
	open(value: (val:TooltipAnimationSettings) => void | Object): AnimationModel;
}