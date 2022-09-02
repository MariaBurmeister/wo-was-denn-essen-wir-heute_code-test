import { FunctionComponent } from "react";
import "./Rating.scss";

export const Rating: FunctionComponent<{name:string; emoji: string; rating: string}> = ({ name, emoji, rating }) => {
    const resolvedRating = new Array(rating).fill(emoji);
    return <article className='rating'>
                <h5>{name}</h5>
                {resolvedRating.map((e) => <span>{e}</span>)}
            </article>;
}