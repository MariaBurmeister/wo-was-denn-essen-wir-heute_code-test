import './Restaurant.scss';
import { FunctionComponent, Key } from "react";
import { Rating, RatingType } from '../Rating';


export const Restaurant: FunctionComponent<{key?: Key; name: string; distance: RatingType; price: RatingType; veggies: RatingType; category: string; address: string; }> = ({name, distance, price, veggies, category, address}) => (
<li aria-label={name} className="restaurant_item clickable" tabIndex={0}>
    <section aria-label='restaurant-info' className='restaurant_info'>
        <h3 aria-label='restaurant'>{name}</h3>
        <p aria-label='category' className='h5'>{category}</p>
        <p aria-label='address' className='h5'>{address}</p>
    </section>
    <section aria-label='ratings' data-testid='restaurant-ratings' className='restaurant_ratings'>
        <Rating name='Entfernung' emoji={'🚗'} rating={distance} />
        <Rating name='Preis' emoji={'💸'} rating={price} />
        <Rating name='Veggie Tauchlich' emoji={'🥦'} rating={veggies} />
    </section>
</li>
);




