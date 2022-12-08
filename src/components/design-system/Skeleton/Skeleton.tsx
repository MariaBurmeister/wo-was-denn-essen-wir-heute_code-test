import './Skeleton.scss';

import { FunctionComponent } from "react";

export type ContentType = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'help-text';
export type Variant =  'full-width' | 'square' | 'circle';
export type HorizontalAlign = 'left' | 'center' | 'right';

export const Skeleton: FunctionComponent<{skeletonFor?: ContentType; variant?: Variant; width?: number; height?: number; horizontalAlign?: HorizontalAlign}> = ({skeletonFor = 'h5', variant = 'full-width', width, height, horizontalAlign = 'left' }) => {
    return (
        <div className={`skeleton ${skeletonFor} ${variant} ${horizontalAlign}`} style={width && !height ? {width} : height && !width ? {height} : width && height ? {width, height} : undefined} aria-hidden>
        </div>
    );
};