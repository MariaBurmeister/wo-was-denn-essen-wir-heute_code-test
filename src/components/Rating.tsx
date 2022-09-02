import { FunctionComponent } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Rating.scss";

export const Rating: FunctionComponent<{name:string; emoji: string; rating: string}> = ({ name, emoji, rating }) => {

    const resolvedRating = new Array(rating).fill(emoji);
    return <article className='rating'>
                <h5>{name}</h5>
                {resolvedRating.map((e) => <span key={uuidv4()}>{e}</span>)}
            </article>;
}