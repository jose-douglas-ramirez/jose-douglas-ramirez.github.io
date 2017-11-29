import{CheckBox} from "./check-box";

import{ LabelPosition} from "./check-box";

export interface CheckBoxHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): CheckBox
	/**
	* Triggers when the CheckBox state has been changed by user interaction.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Specifies a value that indicates whether the CheckBox is `checked` or not.
When set to `true`, CheckBox will be in `checked` state.
	*/
	checked(value:boolean): BuilderProperties;
	/**
	* Defines class/multiple classes separated by a space in the CheckBox element.
You can add custom styles to the CheckBox by using this property.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies a value that indicates whether the CheckBox is `disabled` or not.
When set to `true`, CheckBox will be in `disabled` state.
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
	* Specifies a value that indicates whether the CheckBox is in `indeterminate` state or not.
When set to `true`, CheckBox will be in `indeterminate` state.
	*/
	indeterminate(value:boolean): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Defines the caption for the CheckBox, that describes the purpose of the CheckBox.
	*/
	label(value:string): BuilderProperties;
	/**
	* Positions label `before`/`after` to the CheckBox.
When set to `before`, the label is positioned to left of the CheckBox.
	*/
	labelPosition(value:LabelPosition): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Defines `name` attribute for the CheckBox.
It is used to reference form data (CheckBox value) after a form is submitted.
	*/
	name(value:string): BuilderProperties;
	/**
	* Defines `value` attribute for the CheckBox.
It is a form data passed to the server when submitting the form.
	*/
	value(value:string): BuilderProperties;
}