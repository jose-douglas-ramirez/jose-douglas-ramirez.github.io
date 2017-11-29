import{NumericTextBox} from "./numerictextbox";

import{ FloatLabelType} from "../input/input";

export interface NumericTextBoxHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): NumericTextBox
	/**
	* Triggers when the value of the NumericTextBox changes.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Triggers when the NumericTextBox component is created.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Triggers when the NumericTextBox component is destroyed.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Gets or Sets the CSS classes to root element of the NumericTextBox which helps to customize the
complete UI styles.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies the currency code to use in currency formatting.
Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.
	*/
	currency(value:string): BuilderProperties;
	/**
	* Specifies the number precision applied to the textbox value when the NumericTextBox is focused.
	*/
	decimals(value:number): BuilderProperties;
	/**
	* Enable or disable persisting NumericTextBox state between page reloads. If enabled, the `value` state will be persisted.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Sets a value that enables or disables the RTL mode on the NumericTextBox. If it is true,
NumericTextBox will display the content in the right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Sets a value that enables or disables the NumericTextBox control.
	*/
	enabled(value:boolean): BuilderProperties;
	/**
	* Sets the type of floating label which enables or disables the floating label in the NumericTextBox.
The <b><a href="#placeholder-string" target="_blank">placeholder</a></b> acts as a label
and floats above the NumericTextBox based on the below values.
Possible values are:
* `Never` - Never floats the label in the NumericTextBox when the placeholder is available.
* `Always` - The floating label always floats above the NumericTextBox.
* `Auto` - The floating label floats above the NumericTextBox after focusing it or when enters the value in it.
	*/
	floatLabelType(value:FloatLabelType): BuilderProperties;
	/**
	* Specifies the number format that indicates the display format for the value of the NumericTextBox.
	*/
	format(value:string): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies a maximum value that is allowed a user can enter.
	*/
	max(value:number): BuilderProperties;
	/**
	* Specifies a minimum value that is allowed a user can enter.
	*/
	min(value:number): BuilderProperties;
	/**
	* Gets or sets the string shown as a hint/placeholder when the NumericTextBox is empty.
It acts as a label and floats above the NumericTextBox based on the
<b><a href="#floatlabeltype-string" target="_blank">floatLabelType.</a></b>
	*/
	placeholder(value:string): BuilderProperties;
	/**
	* Sets a value that enables or disables the readonly state on the NumericTextBox. If it is true,
NumericTextBox will not allow your input.
	*/
	readonly(value:boolean): BuilderProperties;
	/**
	* Specifies whether the up and down spin buttons should be displayed in NumericTextBox.
	*/
	showSpinButton(value:boolean): BuilderProperties;
	/**
	* Specifies the incremental or decremental step size for the NumericTextBox.
	*/
	step(value:number): BuilderProperties;
	/**
	* Specifies a value that indicates whether the NumericTextBox control allows the value for the specified range.
* If it is true, the input value will be restricted between the min and max range.
The typed value gets modified to fit the range on focused out state.
```html
<input type='text' id="numeric"/>
```
```typescript
<script>
  var numericObj = new NumericTextBox({ min: 10, max: 20, value: 15 });
  numericObj.appendTo("#numeric");
</script>
```
* Else, it allows any value even out of range value,
At that time of wrong value entered, the error class will be added to the component to highlight the error.
```html
<input type='text' id="numeric"/>
```
```typescript
<script>
  var numericObj = new NumericTextBox({ strictMode: false, min: 10, max: 20, value: 15 });
  numericObj.appendTo("#numeric");
</script>
```
	*/
	strictMode(value:boolean): BuilderProperties;
	/**
	* Specifies whether the decimals length should be restricted during typing.
	*/
	validateDecimalOnType(value:boolean): BuilderProperties;
	/**
	* Sets the value of the NumericTextBox.
	*/
	value(value:number): BuilderProperties;
	/**
	* Specifies the width of the NumericTextBox.
	*/
	width(value:number|string): BuilderProperties;
}