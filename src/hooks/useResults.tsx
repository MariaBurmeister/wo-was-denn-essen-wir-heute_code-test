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

type Status = 'loading' | 'success' | 'error';

export const useResults = (filters: FiltersState): RestaurantResult[] => {
  const { category, distance, price, veggies } = filters;
  const [results, setResults] = useState<RestaurantResult[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    setStatus('loading');
    axios
      .get("/api/results", {
        params: {
          category: category.join(","),
          distance,
          price,
          veggies
        }
      })
      .then(({ data }) => {
        const results = data.map((result: any) => ({
          ...result,
          category: CategoryMap[result.category]
        }));
        console.log(results);
      });
  }, [category, distance, price, veggies]);

  const RawResults  = axios.get(`http://localhost:8080/restaurants?category=${category}&distance=${distance}&price=${price}&veggies=${veggies}`).then(res => res.data);


};
