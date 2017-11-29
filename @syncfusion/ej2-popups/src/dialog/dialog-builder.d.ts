import{Dialog} from "./dialog";

import{ DialogEffect} from "./dialog";

export interface DialogHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Dialog
	/**
	* Event triggers before close the Dialog.
	*/
	beforeClose(value:Function): BuilderProperties;
	/**
	* Event triggers before open the Dialog.
	*/
	beforeOpen(value:Function): BuilderProperties;
	/**
	* Event triggers once the Dialog is closed.
	*/
	close(value:Function): BuilderProperties;
	/**
	* Event triggers when the Dialog is `created`.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Event triggers when the user drags Dialog.
	*/
	drag(value:Function): BuilderProperties;
	/**
	* Event triggers when user starts to drag the Dialog.
	*/
	dragStart(value:Function): BuilderProperties;
	/**
	* Event triggers when the user stops dragging the Dialog.
	*/
	dragStop(value:Function): BuilderProperties;
	/**
	* Event triggers once Dialog is opened.
	*/
	open(value:Function): BuilderProperties;
	/**
	* Event triggers when modal Dialog overlay is clicked.
	*/
	overlayClick(value:Function): BuilderProperties;
	/**
	* Specifies the value to either enable or disable draggable option in Dialog.
	*/
	allowDragging(value:boolean): BuilderProperties;
	/**
	* Specifies the Dialog animation settings.
	*/
	animationSettings(value: (val:AnimationSettings) => void | Object): BuilderProperties;
	/**
	* Specifies the Dialog that is closed when user press the ESC key.
	*/
	closeOnEscape(value:boolean): BuilderProperties;
	/**
	* Specifies the `content` to be displayed in Dialog, it can be text or HTML element.
	*/
	content(value:string|HTMLElement): BuilderProperties;
	/**
	* Specifies the CSS class name to be added for Dialog element.
User can add single or multiple CSS classes.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable rendering component in right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the template content to defines how the Dialog footer is rendered.
	*/
	footerTemplate(value:string): BuilderProperties;
	/**
	* Specifies the `header` content that defines how the Dialog `header` is rendered.
	*/
	header(value:string): BuilderProperties;
	/**
	* Specifies the `height` of the Dialog.
	*/
	height(value:string|number): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Specifies the value to render the Dialog as modal or modeless.
	*/
	isModal(value:boolean): BuilderProperties;
	/**
	* Specifies the localization culture code for Dialog.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies to `position` the Dialog on built-in 9 places or any custom location with
respect to the associated target elements.
For ex: {X:'left', Y:'top'} or { X: 100, Y: 100 }
Following list of positions are available.
* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value
	*/
	position(value: (val:PositionData) => void | Object): BuilderProperties;
	/**
	* Specifies the value to either show or hide the close icon button.
	*/
	showCloseIcon(value:boolean): BuilderProperties;
	/**
	* Specifies the `target` element where the Dialog should be displayed.
If the user set the specific `target` element for Dialog, it will be positioned based on the `target`.
	*/
	target(value:HTMLElement|string): BuilderProperties;
	/**
	* Specifies the value to either Dialog is opened or not.
	*/
	visible(value:boolean): BuilderProperties;
	/**
	* Specifies the `width` of the Dialog.
	*/
	width(value:string|number): BuilderProperties;
	/**
	* Specifies the z-index value for Dialog.
	*/
	zIndex(value:number): BuilderProperties;
}
export interface AnimationSettings {
	/**
	* Specifies the `delay` value in milliseconds to wait before animation begins.
	*/
	delay(value:number): AnimationSettings;
	/**
	* Specifies the animation `duration` to complete with one animation cycle.
	*/
	duration(value:number): AnimationSettings;
	/**
	* Specifies the effect to open and close the Dialog.
If the user sets `Fade` effect then the Dialog will open with 'FadeIn' effect and close with 'FadeOut' effect.
Following list of effects will be available, you can use any of this.
1. 'Fade'
2. 'FadeZoom'
3. 'FlipLeftDown'
4. 'FlipLeftUp'
5. 'FlipRightDown'
6. 'FlipRightUp'
7. 'FlipXDown'
8. 'FlipXUp'
9. 'FlipYLeft'
10. 'FlipYRight'
11. 'SlideBottom'
12. 'SlideLeft'
13. 'SlideRight'
14. 'SlideTop'
15. 'Zoom'
16. 'None'
	*/
	effect(value:DialogEffect): AnimationSettings;
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