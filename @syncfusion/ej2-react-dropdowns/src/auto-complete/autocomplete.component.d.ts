/// <reference types="react" />
import * as React from 'react';
import { AutoComplete, AutoCompleteModel } from '@syncfusion/ej2-dropdowns';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 *The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
 * ```
 * <AutoCompleteComponent dataSource={data}/>
 * ```
 */
export declare class AutoCompleteComponent extends AutoComplete {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<AutoCompleteModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<AutoCompleteModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
