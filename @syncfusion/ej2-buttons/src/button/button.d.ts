import { INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';
import { ButtonModel } from './button-model';
import { ButtonHelper } from './button-builder';
export declare type IconPosition = 'left' | 'right';
/**
 * Button is a graphical user interface element that triggers an event on its click action. It can contain a text, an image, or both.
 * ```html
 * <button id="button">Button</button>
 * ```
 * ```typescript
 * <script>
 * var btnObj = new Button();
 * btnObj.appendTo("#button");
 * </script>
 * ```
 */
export declare class Button extends Component<HTMLButtonElement> implements INotifyPropertyChanged {
    /**
     * Positions the icon before/after the text content in the Button.
     * When set to `right`, the icon will be positioned to the right of the text content.
     * @default "left"
     */
    iconPosition: IconPosition;
    /**
     * Defines class/multiple classes separated by a space for the Button that is used to include an icon.
     * Buttons can also include font icon and sprite image.
     * @default ""
     */
    iconCss: string;
    /**
     * Specifies a value that indicates whether the Button is `disabled` or not.
     * @default false
     */
    disabled: boolean;
    /**
     * Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    isPrimary: boolean;
    /**
     * Defines class/multiple classes separated by a space in the Button element. Button types, styles, and size can be defined using this.
     * @default ""
     */
    cssClass: string;
    /**
     * Defines the `content` of the Button element that can either be text or HTML elements.
     * @default ""
     */
    content: string;
    /**
     * Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    isToggle: boolean;
    /**
     * Constructor for creating the widget
     * @param  {ButtonModel} options?
     * @param  {string|HTMLButtonElement} element?
     */
    constructor(options?: ButtonModel, element?: string | HTMLButtonElement);
    protected preRender(): void;
    /**
     * Initialize the control rendering
     * @returns void
     * @private
     */
    render(): void;
    private initialize();
    private controlStatus(disabled);
    private setIconCss();
    protected wireEvents(): void;
    protected unWireEvents(): void;
    private btnClickHandler();
    /**
     * To destroy the widget.
     * @returns void
     */
    destroy(): void;
    /**
     * Get component name.
     * @returns string
     * @private
     */
    getModuleName(): string;
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    getPersistData(): string;
    /**
     * Called internally if any of the property value changed.
     * @param  {Button} newProp
     * @param  {Button} oldProp
     * @returns void
     * @private
     */
    onPropertyChanged(newProp: Button, oldProp: Button): void;
}
/**
 * builder for button
 */
export declare let buttonBuilder: ButtonHelper;
