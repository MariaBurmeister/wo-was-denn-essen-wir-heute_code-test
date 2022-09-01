import { FunctionComponent } from "react";

export const Restaurant: FunctionComponent<{name: string; distance: string; price: string; veggies: string; category: string; address: string;}> = ({name, distance, price, veggies, category, address}) => <li>
    <h2>{name}</h2>
    <p>{address}</p>
    <p>{category}</p>
    <p>{distance}</p>
    <p>{price}</p>
</li>;
