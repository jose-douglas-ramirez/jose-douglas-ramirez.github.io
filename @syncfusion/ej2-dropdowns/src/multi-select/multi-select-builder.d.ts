import{MultiSelect} from "./multi-select";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import{ visualMode} from "./multi-select";

export interface MultiSelectHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): MultiSelect
	/**
	* Triggers before fetching data from the remote server.
	*/
	actionBegin(value:Function): BuilderProperties;
	/**
	* Triggers after data is fetched successfully from the remote server.
	*/
	actionComplete(value:Function): BuilderProperties;
	/**
	* Triggers when the data fetch request from the remote server fails.
	*/
	actionFailure(value:Function): BuilderProperties;
	/**
	* Event triggers when the input get focus-out.
	*/
	blur(value:Function): BuilderProperties;
	/**
	* Fires each time when selection changes happened in list items after model and input value get affected.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Fires when popup close after animation completion.
	*/
	close(value:Function): BuilderProperties;
	/**
	* Triggers when the customValue is selected.
	*/
	customValueSelection(value:Function): BuilderProperties;
	/**
	* Triggers event,when user types a text in search box.
	*/
	filtering(value:Function): BuilderProperties;
	/**
	* Event triggers when the input get focused.
	*/
	focus(value:Function): BuilderProperties;
	/**
	* Fires when popup opens after animation completion.
	*/
	open(value:Function): BuilderProperties;
	/**
	* Fires after the selected item removed from the widget.
	*/
	removed(value:Function): BuilderProperties;
	/**
	* Fires before the selected item removed from the widget.
	*/
	removing(value:Function): BuilderProperties;
	/**
	* Triggers when an item in the popup is selected.
	*/
	select(value:Function): BuilderProperties;
	/**
	* Accepts the template and assigns it to the popup list content of the component
when the data fetch request from the remote server fails.
	*/
	actionFailureTemplate(value:string): BuilderProperties;
	/**
	* Allows user to add a custom value, the value which is not present in the suggestion list.
	*/
	allowCustomValue(value:boolean): BuilderProperties;
	/**
	* To enable the filtering option in this component.
Filter action performs when type in search box and collect the matched item through `filtering` event.
If searching character does not match, `noRecordsTemplate` property value will be shown.
	*/
	allowFiltering(value:boolean): BuilderProperties;
	/**
	* Based on the property, when item get select popup visibility state will changed.
	*/
	closePopupOnSelect(value:boolean): BuilderProperties;
	/**
	* Sets the CSS classes to root element of this component which helps to customize the
complete styles.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Accepts the list items either through local or remote service and binds it to the component.
It can be an array of JSON Objects or an instance of
[`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager.html).
	*/
	dataSource(value:DataManager): BuilderProperties;
	/**
	* Sets the delimiter character for 'default' and 'delimiter' visibility modes.
	*/
	delimiterChar(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
If enabled, following list of states will be persisted.
1. value
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* When set to true, enables RTL mode of the component that
displays the content in the right-to-left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies a value that indicates whether the component is enabled or not.
	*/
	enabled(value:boolean): BuilderProperties;
	/**
	* The `fields` property maps the columns of the data table and binds the data to the component.
	*/
	fields(value: (val:FieldSettings) => void | Object): BuilderProperties;
	/**
	* Accepts the template design and assigns it to the footer container of the popup list.
	*/
	footerTemplate(value:string): BuilderProperties;
	/**
	* Accepts the template design and assigns it to the group headers present in the popup list.
	*/
	groupTemplate(value:string): BuilderProperties;
	/**
	* Accepts the template design and assigns it to the header container of the popup list.
	*/
	headerTemplate(value:string): BuilderProperties;
	/**
	* Hides the selected item from the list item.
	*/
	hideSelectedItem(value:boolean): BuilderProperties;
	/**
	* Gets or sets the additional attribute to `HtmlAttributes` property in DropDownList,
which helps to add attribute like title, name etc, input should be key value pair.
	*/
	htmlAttributes(value:Object): BuilderProperties;
	/**
	* Sets case sensitive option for filter operation.
	*/
	ignoreCase(value:boolean): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Accepts the template design and assigns it to each list item present in the popup.
	*/
	itemTemplate(value:string): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Sets limitation to the value selection.
based on the limitation, list selection will be prevented.
	*/
	maximumSelectionLength(value:number): BuilderProperties;
	/**
	* configures visibility mode for component interaction.
	*/
	mode(value:visualMode): BuilderProperties;
	/**
	* Accepts the template design and assigns it to popup list of component
when no data is available on the component.
	*/
	noRecordsTemplate(value:string): BuilderProperties;
	/**
	* Gets or sets the placeholder in the component to display the given information
in input when no item selected.
	*/
	placeholder(value:string): BuilderProperties;
	/**
	* Gets or sets the height of the popup list. By default it renders based on its list item.
	*/
	popupHeight(value:string|number): BuilderProperties;
	/**
	* Gets or sets the width of the popup list and percentage values has calculated based on input width.
	*/
	popupWidth(value:string|number): BuilderProperties;
	/**
	* Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
which will execute along with the data processing.
	*/
	query(value:Query): BuilderProperties;
	/**
	* Gets or sets the `readonly` to input or not. Once enabled, just you can copy or highlight
the text however tab key action will perform.
	*/
	readonly(value:boolean): BuilderProperties;
	/**
	* Enables close icon with the each selected item.
	*/
	showClearButton(value:boolean): BuilderProperties;
	/**
	* Specifies the `sortOrder` to sort the data source. The available type of sort orders are
* `None` - The data source is not sorting.
* `Ascending` - The data source is sorting with ascending order.
* `Descending` - The data source is sorting with descending order.
	*/
	sortOrder(value:SortOrder): BuilderProperties;
	/**
	* Selects the list item which maps the data `text` field in the component.
	*/
	text(value:string): BuilderProperties;
	/**
	* Accepts the template design and assigns it to the selected list item in the input element of the component.
	*/
	valueTemplate(value:string): BuilderProperties;
	/**
	* Gets or sets the width of the component. By default, it sizes based on its parent.
container dimension.
	*/
	width(value:string|number): BuilderProperties;
}
export interface FieldSettings {
	/**
	* Group the list items with it's related items by mapping groupBy field.
	*/
	groupBy(value:string): FieldSettings;
	/**
	* Maps the icon class column from data table for each list item.
	*/
	iconCss(value:string): FieldSettings;
	/**
	* Maps the text column from data table for each list item
	*/
	text(value:string): FieldSettings;
	/**
	* Maps the value column from data table for each list item
	*/
	value(value:string): FieldSettings;
}