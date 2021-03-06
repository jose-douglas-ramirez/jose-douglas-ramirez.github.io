/// <reference types="react" />
/**
 * React Component Base
 */
import * as React from 'react';
export declare class ComponentBase<P, S> extends React.PureComponent<P, S> {
    private setProperties;
    private appendTo;
    private destroy;
    private checkInjectedModules;
    private getInjectedModules;
    private injectedModules;
    private skipRefresh;
    protected htmlattributes: {
        [key: string]: Object;
    };
    private controlAttributes;
    directivekeys: {
        [key: string]: Object;
    };
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    getDefaultAttributes(): Object;
    private refreshChild(silent, props?);
    componentWillUnmount(): void;
    private validateChildren(childCache, mapper, props);
    private getChildType(child);
    getChildProps(subChild: React.ReactNode[], matcher: {
        [key: string]: Object;
    } & string): Object[];
    getInjectedServices(): Object[];
}
