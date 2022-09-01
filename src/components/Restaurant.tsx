import './Restaurant.scss';
import { FunctionComponent } from "react";

export const Restaurant: FunctionComponent<{name: string; distance: string; price: string; veggies: string; category: string; address: string;}> = ({name, distance, price, veggies, category, address}) => (
<li className="restaurant_item">
    <h3>{name}</h3>
    <p>{distance}</p>
    <p>{price}</p>
    <p>{veggies}</p>
    <p>{category}</p>
    <p>{address}</p>
</li>
);
