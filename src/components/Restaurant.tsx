import './Restaurant.scss';
import { FunctionComponent } from "react";
import { Rating } from './Rating';

export const Restaurant: FunctionComponent<{name: string; distance: string; price: string; veggies: string; category: string; address: string;}> = ({name, distance, price, veggies, category, address}) => (
<li className="restaurant_item">
    <section className='restaurant_info'>
    <h3>{name}</h3>
    <p className='h5'>{category}</p>
    <p className='h5'>{address}</p>
    </section>
    <section className='restaurant_ratings'>
        <Rating name='Entfernung' emoji={'🚗'} rating={distance} />
        <Rating name='Preis' emoji={'💸'} rating={distance} />
        <Rating name='Veggie Tauchlich' emoji={'🥦'} rating={distance} />
    </section>
</li>
);
