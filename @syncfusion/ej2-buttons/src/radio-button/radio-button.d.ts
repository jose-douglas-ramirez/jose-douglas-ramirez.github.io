import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { BaseEventArgs, EmitType } from '@syncfusion/ej2-base';
import { RadioButtonModel } from './radio-button-model';
import { RadioButtonHelper } from './radio-button-builder';
export declare type RadioLabelPosition = 'after' | 'before';
/**
 * RadioButton is a graphical user interface element that allows you to select one option from the choices.
 * It contains checked and unchecked states.
 * ```html
 * <input type="radio" id="radio"/>
 * <script>
 * var radioObj = new RadioButton({ label: "Default" });
 * radioObj.appendTo("#radio");
 * </script>
 * ```
 */
export declare class RadioButton extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private isKeyPressed;
    /**
     * Event trigger when the RadioButton state has been changed by user interaction.
     * @event
     */
    change: EmitType<ChangeArgs>;
    /**
     * Specifies a value that indicates whether the RadioButton is `checked` or not.
     * When set to `true`, RadioButton will be in `checked` state.
     * @default false
     */
    checked: boolean;
    /**
     * Defines class/multiple classes separated by a space in the RadioButton element.
     * You can add custom styles to the RadioButton by using this property.
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the RadioButton is `disabled` or not.
     * When set to `true`, RadioButton will be in `disabled` state.
     * @default false
     */
    disabled: boolean;
    /**
     * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
     * @default ''
     */
    label: string;
    /**
     * Positions label `before`/`after` to the RadioButton.
     * When set to `before`, the label is positioned to left of the RadioButton.
     * @default 'after'
     */
    labelPosition: string;
    /**
     * Defines `name` attribute for the RadioButton.
     * It is used to reference form data (RadioButton value) after a form is submitted.
     * @default ''
     */
    name: string;
    /**
     * Defines `value` attribute for the RadioButton.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    value: string;
    /**
     * Constructor for creating the widget
     * @private
     */
    constructor(options?: RadioButtonModel, element?: string | HTMLInputElement);
    private changeHandler(event);
    private updateChange(state);
    /**
     * To destroy the widget.
     * @returns void
     */
    destroy(): void;
    private focusHandler();
    private focusOutHandler();
    protected getModuleName(): string;
    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    getPersistData(): string;
    private getLabel();
    private initialize();
    private initWrapper();
    private keyDownHandler();
    private labelRippleHandler(e);
    private mouseDownHandler();
    /**
     * Called internally if any of the property value changes.
     * @private
     */
    onPropertyChanged(newProp: RadioButtonModel, oldProp: RadioButtonModel): void;
    /**
     * Initialize checked Property, Angular and React and Unique ID support.
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
export interface ChangeArgs extends BaseEventArgs {
    /** Returns the checked value of the RadioButton. */
    checked?: boolean;
    /** Returns the event parameters of the RadioButton. */
    event?: Event;
}
/**
 * Builder for RadioButton
 */
export declare let radioButtonBuilder: RadioButtonHelper;
