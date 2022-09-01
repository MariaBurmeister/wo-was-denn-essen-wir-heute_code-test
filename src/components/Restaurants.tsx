import { FunctionComponent } from "react";
import { RestaurantResult } from "../hooks";
import { Restaurant } from "./Restaurant";

export const Restaurants: FunctionComponent<{
  results: RestaurantResult[];
}> = ({ results }) => (
  <ol>
    {results.map((result) => (
      <Restaurant />
    ))}
  </ol>
);
