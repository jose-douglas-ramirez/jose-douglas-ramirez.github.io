import{Button} from "./button";

import{ IconPosition} from "./button";

export interface ButtonHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Button
	/**
	* Defines the `content` of the Button element that can either be text or HTML elements.
	*/
	content(value:string): BuilderProperties;
	/**
	* Defines class/multiple classes separated by a space in the Button element. Button types, styles, and size can be defined using this.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies a value that indicates whether the Button is `disabled` or not.
	*/
	disabled(value:boolean): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable rendering component in right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Defines class/multiple classes separated by a space for the Button that is used to include an icon.
Buttons can also include font icon and sprite image.
	*/
	iconCss(value:string): BuilderProperties;
	/**
	* Positions the icon before/after the text content in the Button.
When set to `right`, the icon will be positioned to the right of the text content.
	*/
	iconPosition(value:IconPosition): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
	*/
	isPrimary(value:boolean): BuilderProperties;
	/**
	* Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
	*/
	isToggle(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
}