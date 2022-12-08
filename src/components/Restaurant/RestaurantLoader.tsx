import { FunctionComponent, Key } from "react";
import { Skeleton } from "../design-system";
import { RatingLoader } from "../Rating";

export const RestaurantLoader: FunctionComponent<{key?: Key;}> = () => (
    <li aria-hidden data-testid='restaurant-loader' className="restaurant_item">
        <section className='restaurant_info'>
            <Skeleton data-testid='loading-restaurant' skeletonFor="h3" horizontalAlign="center"/>
            <Skeleton data-testid='loading-category' skeletonFor="p" width={100} horizontalAlign="center"/>
            <Skeleton data-testid='loading-address' skeletonFor="p" horizontalAlign="center"/>
        </section>
        <section className='restaurant_ratings'>
            <RatingLoader name='Entfernung' />
            <RatingLoader name='Preis' />
            <RatingLoader name='Veggie' />
        </section>
    </li>
    );
    