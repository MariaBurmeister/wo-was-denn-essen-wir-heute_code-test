import axios from "axios";
import { useEffect, useState } from "react";

export interface FiltersState {
  category: CategoryTerms[];
  distance: DistanceTerms;
  price: PriceTerms;
  veggies: VeggiesTerms;
}

export type DistanceTerms = '1' | '2' | '3';
export type PriceTerms = '1' | '2' | '3';
export type VeggiesTerms = '1' | '2' | '3';

export type CategoryTerms =
  | "all"
  | "burger"
  | "italian"
  | "asian"
  | "homeMade"
  | "other";

const CategoryMap: Record<Category, CategoryTerms> = {
  Alles: "all",
  Burger: "burger",
  "Pizza / Pasta": "italian",
  Asiatisch: "asian",
  Hausmannskost: "homeMade",
  Sonstiges: "other"
};

export interface RestaurantResult {
  status: Status;
  restaurants: Restaurant[];
}

export interface Restaurant {
  name: string;
  distance: StarsRating;
  price: StarsRating;
  veggies: StarsRating;
  category: Category;
  address: string;
}

type Category =
  | "Alles"
  | "Burger"
  | "Pizza / Pasta"
  | "Asiatisch"
  | "Hausmannskost"
  | "Sonstiges";

export type StarsRating = '1' | '2' | '3';

export type Status = "LOADING" | "READY" | "ERROR";

const getResults = (filters: FiltersState): Promise<{status: Status; restaurants:Restaurant[]}> => {
  const { category, distance, price, veggies } = filters;
  return axios.get(`http://localhost:8080/restaurants?category=${category}&distance=${distance}&price=${price}&veggies=${veggies}`)
    .then(({ data }) => {
      return {
        status: "READY" as Status,
        restaurants: data.map((result: any) => ({
          ...result,
          category: CategoryMap[result.category as Category]
        }))
      };
    })
    .catch((error) => {
      console.log(error.message);
      return { status: "ERROR" as Status, restaurants: [] };
    });
};



export const useRestaurantResults = (filters: FiltersState): RestaurantResult => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [status, setStatus] = useState<Status>('LOADING');

  useEffect(() => {
    setStatus("LOADING");
    getResults(filters).then(({ status, restaurants }) => {
      setStatus(status);
      setRestaurants(restaurants);
    });
  }, [filters]);

  return {status, restaurants};

}
