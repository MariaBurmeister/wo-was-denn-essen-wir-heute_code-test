import './Restaurant.scss';
import { FunctionComponent, Key } from "react";
import { Rating, RatingType } from './Rating';


export const Restaurant: FunctionComponent<{key?: Key; name: string; distance: RatingType; price: RatingType; veggies: RatingType; category: string; address: string;}> = ({name, distance, price, veggies, category, address}) => (
<li aria-label={name} className="restaurant_item">
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

export const RestaurantLoader: FunctionComponent<{key?: Key;}> = () => (
<li aria-hidden data-testid='restaurant-loader' className="restaurant_item">
    <section className='restaurant_info'>
        <h3 data-testid='loading-restaurant'>Loading...</h3>
        <p data-testid='loading-category' className='h5'>Loading...</p>
        <p data-testid='loading-address' className='h5'>Loading...</p>
    </section>
    <section className='restaurant_ratings'>
        <Rating name='Entfernung' emoji={'...'} rating={'1'} />
        <Rating name='Preis' emoji={'...'} rating={'1'} />
        <Rating name='Veggie Tauchlich' emoji={'...'} rating={'1'} />
    </section>
</li>
);


