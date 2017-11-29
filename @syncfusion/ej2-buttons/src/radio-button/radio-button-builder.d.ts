import{RadioButton} from "./radio-button";


export interface RadioButtonHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): RadioButton
	/**
	* Event trigger when the RadioButton state has been changed by user interaction.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Specifies a value that indicates whether the RadioButton is `checked` or not.
When set to `true`, RadioButton will be in `checked` state.
	*/
	checked(value:boolean): BuilderProperties;
	/**
	* Defines class/multiple classes separated by a space in the RadioButton element.
You can add custom styles to the RadioButton by using this property.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies a value that indicates whether the RadioButton is `disabled` or not.
When set to `true`, RadioButton will be in `disabled` state.
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
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
	*/
	label(value:string): BuilderProperties;
	/**
	* Positions label `before`/`after` to the RadioButton.
When set to `before`, the label is positioned to left of the RadioButton.
	*/
	labelPosition(value:string): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Defines `name` attribute for the RadioButton.
It is used to reference form data (RadioButton value) after a form is submitted.
	*/
	name(value:string): BuilderProperties;
	/**
	* Defines `value` attribute for the RadioButton.
It is a form data passed to the server when submitting the form.
	*/
	value(value:string): BuilderProperties;
}