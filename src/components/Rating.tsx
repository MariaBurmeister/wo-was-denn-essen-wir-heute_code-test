import { FunctionComponent } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Rating.scss";

export type RatingType = '1' | '2' | '3';

export const Rating: FunctionComponent<{name:string; emoji: string; rating: RatingType}> = ({ name, emoji, rating }) => {

    const resolvedRating = new Array(Number(rating)).fill(emoji);
    return <article aria-label={name} data-testid='rating-component' className='rating'>
                <h5 data-testid='rating-name'>{name}</h5>
                <p data-testid='emoji-rating' aria-hidden >{resolvedRating.map((e) => <span key={uuidv4()}>{e}</span>)}</p>
                <p data-testid='rating' className='sr-only'>{`${rating} ${rating > '1'? 'Sterne' : 'Stern'}`}</p>
            </article>;
}