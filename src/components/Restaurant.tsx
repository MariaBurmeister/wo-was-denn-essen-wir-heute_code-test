import './Restaurant.scss';
import { FunctionComponent, Key } from "react";
import { Rating } from './Rating';

export const Restaurant: FunctionComponent<{key?: Key; name: string; distance: string; price: string; veggies: string; category: string; address: string;}> = ({name, distance, price, veggies, category, address}) => (
<li className="restaurant_item">
    <section className='restaurant_info'>
    <h3>{name}</h3>
    <p className='h5'>{category}</p>
    <p className='h5'>{address}</p>
    </section>
    <section className='restaurant_ratings'>
        <Rating name='Entfernung' emoji={'🚗'} rating={distance} />
        <Rating name='Preis' emoji={'💸'} rating={price} />
        <Rating name='Veggie Tauchlich' emoji={'🥦'} rating={veggies} />
    </section>
</li>
);
