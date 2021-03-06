/// <reference types="react" />
/**
 * Util for React Base
 */
import * as React from 'react';
export declare function applyMixins(derivedClass: any, baseClass: any[]): void;
export interface DefaultHtmlAttributes {
    alt?: string;
    className?: string;
    disabled?: boolean;
    form?: string;
    id?: string;
    readOnly?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    type?: string;
    onClick?: MouseEventInit;
    onFocus?: FocusEventInit;
    onBlur?: FocusEventInit;
}
