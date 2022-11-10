import { FunctionComponent } from "react";
import './BarLoader.scss';

type HorizontalAlign = 'center' | 'left' | 'right';

export const BarLoader : FunctionComponent<{innerText?: string; loadingText?:string , horizontalAlign?: HorizontalAlign}> = ({innerText, loadingText, horizontalAlign = 'center'}) => {
    return (
    <div className={`bar-loader ${horizontalAlign}`}>
        <span className="bar-loader__bar">{innerText}</span>
        {loadingText && <aside className="bar-loader__aside">{loadingText}</aside>}
    </div>
    );
}

export const StepsLoader : FunctionComponent<{innerText?: string; loadingText?:string , horizontalAlign?: HorizontalAlign}> = ({innerText, loadingText, horizontalAlign = 'center'}) => {
    return (
    <div className={`bar-loader ${horizontalAlign}`}>
        <span className="bar-loader__bar">{innerText}</span>
        {loadingText && <aside className="bar-loader__aside">{loadingText}</aside>}
    </div>
    );
}


 