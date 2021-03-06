/**
 * Initialize wrapper element for angular.
 * @private
 */
export declare function wrapperInitialize(tag: string, type: string, element: HTMLInputElement, WRAPPER: string): HTMLInputElement;
export declare function getTextNode(element: HTMLElement): Node;
/**
 * Creates CheckBox component UI with theming and ripple support.
 * @private
 */
export declare function createCheckBox(enableRipple?: boolean, options?: CheckBoxUtilModel): Element;
export interface EJ2Instance extends HTMLElement {
    ej2_instances: Object[];
}
export interface CheckBoxUtilModel {
    checked?: boolean;
    label?: string;
    enableRtl?: boolean;
}
