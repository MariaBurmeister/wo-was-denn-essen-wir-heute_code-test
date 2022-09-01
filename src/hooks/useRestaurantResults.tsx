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

const CategoryMap: Record<CategoryTerms, Category> = {
  all:'Alles',
  burger:'Burger',
  italian:'Pizza / Pasta',
  asian:'Asiatisch',
  homeMade:'Hausmannskost',
  other:'Sonstiges'
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

type StarsRating = '1' | '2' | '3';
type Stars = '*' | '**' | '***';
const StarsRatingMap: Record<StarsRating, Stars> = {
  '1': '*',
  '2':'**',
  '3':'***'
  };

export type Status = "LOADING" | "READY" | "ERROR";

const getResults = (filters: FiltersState): Promise<{status: Status; restaurants:Restaurant[]}> => {
  const { category, distance, price, veggies } = filters;
  const categoryQuery = category.map(c => CategoryMap[c]);
  const url = `http://localhost:8080/restaurants?category=${categoryQuery}&distance=${distance}&price=${price}&veggies=${veggies}`;
  return axios.get(url)
    .then(({ data }) => {
      return {
        status: "READY" as Status,
        restaurants: data.map((result: any) => ({
          ...result,
          distance: StarsRatingMap[result.distance as StarsRating],
          price: StarsRatingMap[result.price as StarsRating],
          veggies: StarsRatingMap[result.veggies as StarsRating],
          category: result.category as Category
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
