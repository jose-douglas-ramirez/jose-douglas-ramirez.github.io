export declare function calculateRelativeBasedPosition(anchor: HTMLElement, element: HTMLElement): OffsetPosition;
export declare function calculatePosition(currentElement: Element, positionX?: string, positionY?: string): OffsetPosition;
export interface OffsetPosition {
    left: number;
    top: number;
}
