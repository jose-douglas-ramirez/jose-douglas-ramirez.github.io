/// <reference types="react" />
import * as React from 'react';
import { DropDownList, DropDownListModel } from '@syncfusion/ej2-dropdowns';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```
 * <DropDownListComponent dataSource={data}/>
 * ```
 */
export declare class DropDownListComponent extends DropDownList {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DropDownListModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DropDownListModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
