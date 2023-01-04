import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { shuffleArray } from "../utils";

export interface FiltersState extends Record<string, string | string[]> {
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
  italian:'Pizza & Pasta',
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
  distance: Rating;
  price: Rating;
  veggies: Rating;
  category: Category;
  address: string;
}

type Category =
  | "Alles"
  | "Burger"
  | "Pizza & Pasta"
  | "Asiatisch"
  | "Hausmannskost"
  | "Sonstiges";

type Rating = '1' | '2' | '3';

export type Status = "LOADING" | "READY" | "ERROR";

const getResults =  async (url: string): Promise<{status: Status; restaurants:Restaurant[]}> => {
  return axios.get(url)
    .then(({ data }) => {
      return {
        status: "READY" as Status,
        restaurants: data.map((result: any) => ({
          ...result,
          distance: result.distance as Rating,
          price: result.price as Rating,
          veggies: result.veggies as Rating,
          category: CategoryMap[result.category as CategoryTerms]
        }))
      };
    })
    .catch((error) => {
      console.log(error.message);
      return { status: "ERROR" as Status, restaurants: [] };
    });
};



export const useRestaurantResults = (randomize: boolean): RestaurantResult => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [status, setStatus] = useState<Status>('LOADING');

  const [searchParams] = useSearchParams();

  const url = `http://localhost:8080/restaurants?category=${searchParams.getAll('category')}&distance=${searchParams.get('distance')}&price=${searchParams.get('price')}&veggies=${searchParams.get('veggies')}`;

  useEffect(() => {
    setStatus("LOADING");
    getResults(url).then(({ status, restaurants }) => {
      setStatus(status);
      setRestaurants(restaurants);
    });
  }, [url, randomize]);


  return {status, restaurants : randomize ? shuffleArray(restaurants) : restaurants};

}
