import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { BaseEventArgs, EmitType } from '@syncfusion/ej2-base';
import { CheckBoxModel } from './check-box-model';
import { CheckBoxHelper } from './check-box-builder';
export declare type LabelPosition = 'after' | 'before';
/**
 * CheckBox is a graphical user interface element that allows you to select one or more options from the choices.
 * It contains checked, unchecked and indeterminate states.
 * ```html
 * <input type="checkbox" id="checkbox"/>
 * <script>
 * var checkboxObj = new CheckBox({ label: "Default" });
 * checkboxObj.appendTo("#checkbox");
 * </script>
 * ```
 */
export declare class CheckBox extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private isKeyPressed;
    private keyboardModule;
    /**
     * Triggers when the CheckBox state has been changed by user interaction.
     * @event
     */
    change: EmitType<ChangeEventArgs>;
    /**
     * Specifies a value that indicates whether the CheckBox is `checked` or not.
     * When set to `true`, CheckBox will be in `checked` state.
     * @default false
     */
    checked: boolean;
    /**
     * Defines class/multiple classes separated by a space in the CheckBox element.
     * You can add custom styles to the CheckBox by using this property.
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the CheckBox is `disabled` or not.
     * When set to `true`, CheckBox will be in `disabled` state.
     * @default false
     */
    disabled: boolean;
    /**
     * Specifies a value that indicates whether the CheckBox is in `indeterminate` state or not.
     * When set to `true`, CheckBox will be in `indeterminate` state.
     * @default false
     */
    indeterminate: boolean;
    /**
     * Defines the caption for the CheckBox, that describes the purpose of the CheckBox.
     * @default ''
     */
    label: string;
    /**
     * Positions label `before`/`after` to the CheckBox.
     * When set to `before`, the label is positioned to left of the CheckBox.
     * @default 'after'
     */
    labelPosition: LabelPosition;
    /**
     * Defines `name` attribute for the CheckBox.
     * It is used to reference form data (CheckBox value) after a form is submitted.
     * @default ''
     */
    name: string;
    /**
     * Defines `value` attribute for the CheckBox.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    value: string;
    /**
     * Constructor for creating the widget
     * @private
     */
    constructor(options?: CheckBoxModel, element?: string | HTMLInputElement);
    private changeState(state?);
    private clickHandler(event);
    /**
     * To destroy the widget.
     * @returns void
     */
    destroy(): void;
    private focusHandler();
    private focusOutHandler();
    /**
     * Gets the module name.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    getPersistData(): string;
    private getWrapper();
    private initialize();
    private initWrapper();
    private keyActionHandler(e);
    private keyDownHandler();
    private labelMouseHandler(e);
    private mouseDownHandler();
    /**
     * Called internally if any of the property value changes.
     * @private
     */
    onPropertyChanged(newProp: CheckBoxModel, oldProp: CheckBoxModel): void;
    /**
     * Initialize Angular, React and Unique ID support.
     * @private
     */
    protected preRender(): void;
    /**
     * Initialize the control rendering
     * @private
     */
    protected render(): void;
    private setDisabled();
    private setText(text);
    protected unWireEvents(): void;
    protected wireEvents(): void;
}
export interface ChangeEventArgs extends BaseEventArgs {
    /** Returns the event parameters of the CheckBox. */
    event?: Event;
    /** Returns the checked value of the CheckBox. */
    checked?: boolean;
}
/**
 * Builder for CheckBox
 */
export declare let checkBoxBuilder: CheckBoxHelper;
