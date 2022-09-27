import { FunctionComponent, ImgHTMLAttributes, ReactNode } from "react";

import './Illustration.scss';

import  {Illustrations} from '../../assets/illustrations';

type ImageName  = keyof typeof Illustrations;

interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
    img: ImageName;
    subtitle?: string | ReactNode;
}


export const Illustration: FunctionComponent<IllustrationProps> = ({img, subtitle, ...rest}) => {
    const {illustration, description} = Illustrations[img];

    return (
    <div className="illustration">
        <img src={illustration} alt={description} {...rest}/>
        {subtitle && <p className="illustration-subtitle"><i>{subtitle}</i></p>}
    </div>
    );
}; 