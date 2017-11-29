import{DropDownList} from "./drop-down-list";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { IInput, Input, InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';
import { SortOrder } from '@syncfusion/ej2-lists';

export interface DropDownListHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): DropDownList
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
	* Triggers when focus moves out from the component.
	*/
	blur(value:Function): BuilderProperties;
	/**
	* Triggers when an item in a popup is selected or when the model value is changed.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Triggers when the popup is closed.
	*/
	close(value:Function): BuilderProperties;
	/**
	* Triggers on typing a character in the filter bar.
	*/
	filtering(value:Function): BuilderProperties;
	/**
	* Triggers when the component is focused.
	*/
	focus(value:Function): BuilderProperties;
	/**
	* Triggers when the popup opens.
	*/
	open(value:Function): BuilderProperties;
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
	* When allowFiltering is set to true, show the filter bar (search box) of the component.
The filter action retrieves matched items through the `filtering` event based on
the characters typed in the search TextBox.
If no match is found, the value of the `noRecordsTemplate` property will be displayed.
```html
<input type="text" tabindex="1" id="list"> </input>
```
```typescript
  let searchData: { [key: string]: Object; }[] = [ {id: 's1', country: 'California'}, {id: 's2', country: 'India'},
{id: 's3', country: 'USA'}, {id: 's4', country: 'England'}]
  let listObj: DropDownList = new DropDownList({
     dataSource: searchData,
     fields: { text: "country", value: "id" },
     allowFiltering: true,
     filtering: function (e: FilteringEventArgs) {
         let query = new Query();
         query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;
         e.updateData(searchData, query);
     }
  });
  listObj.appendTo("#list");
```
	*/
	allowFiltering(value:boolean): BuilderProperties;
	/**
	* Sets CSS classes to the root element of the component that helps customize the UI styles.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Accepts the list items either through local or remote service and binds it to the component.
It can be an array of JSON Objects or an instance of
[`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager.html).
	*/
	dataSource(value:DataManager): BuilderProperties;
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
	* Accepts the value to be displayed as a watermark text on the filter bar.
	*/
	filterBarPlaceholder(value:string): BuilderProperties;
	/**
	* Specifies whether to display the floating label above the input element.
Possible values are:
* Never: The label will never float in the input when the placeholder is available.
* Always: The floating label will always float above the input.
* Auto: The floating label will float above the input after focusing or entering a value in the input.
	*/
	floatLabelType(value:FloatLabelType): BuilderProperties;
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
	* Allows additional HTML attributes such as title, name, etc., and
accepts n number of attributes in a key-value pair format.
```html
<input type="text" tabindex="1" id="list"> </input>
```
```typescript
  let dropDownListObj: DropDownList = new DropDownList({
     dataSource: ['Tennis', 'FootBall', 'Cricket'],
     htmlAttributes: { title: 'List of games available here.' }
  });
  dropDownListObj.appendTo("#list");
```
	*/
	htmlAttributes(value:Object): BuilderProperties;
	/**
	* Gets or sets the index of the selected item in the component.
	*/
	index(value:number): BuilderProperties;
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
	* Accepts the template design and assigns it to popup list of component
when no data is available on the component.
	*/
	noRecordsTemplate(value:string): BuilderProperties;
	/**
	* Accepts the value to be displayed as a watermark text on the component input.
	*/
	placeholder(value:string): BuilderProperties;
	/**
	* Specifies the height of the popup list.
	*/
	popupHeight(value:string|number): BuilderProperties;
	/**
	* Specifies the width of the popup list. By default, the popup width sets based on the width of
the component.
	*/
	popupWidth(value:string|number): BuilderProperties;
	/**
	* Accepts the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
that execute along with data processing.
```html
<input type="text" tabindex="1" id="list"> </input>
```
```typescript
  let customers: DropDownList = new DropDownList({
     dataSource:new DataManager({ url:'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/' }),
     query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(5),
     fields: { text: 'ContactName', value: 'CustomerID' },
     placeholder: 'Select a customer'
  });
  customers.appendTo("#list");
```
	*/
	query(value:Query): BuilderProperties;
	/**
	* When set to true, the user interactions on the component are disabled.
	*/
	readonly(value:boolean): BuilderProperties;
	/**
	* Specifies whether to show or hide the clear button.
When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
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
	* Gets or sets the display text of the selected item in the component.
	*/
	text(value:string): BuilderProperties;
	/**
	* Gets or sets the value of the selected item in the component.
	*/
	value(value:number|string): BuilderProperties;
	/**
	* Accepts the template design and assigns it to the selected list item in the input element of the component.
	*/
	valueTemplate(value:string): BuilderProperties;
	/**
	* Specifies the width of the component. By default, the component width sets based on the width of
its parent container. You can also set the width in pixel values.
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