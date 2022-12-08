import './Restaurants.scss';
import { FunctionComponent } from "react";
import { RestaurantResult } from "../hooks";
import { Restaurant, RestaurantLoader } from "./Restaurant";
import { EmptyState, ErrorState } from './design-system';

export const Restaurants: FunctionComponent<{
  results: RestaurantResult;
}> = ({ results }) => {
  
  const {status, restaurants} = results;
  const isLoading = status === "LOADING";
  const isError = status === "ERROR";
  const isEmpty = status === "READY" && restaurants.length === 0;

  // prevents layout flickering on loading state:
  const loaderCount = restaurants.length === 0 ? 3 : restaurants.length;

  return(
  <ol aria-label='restaurants' className="restaurant_list">
    {isLoading ?
    <RestaurantsLoader count={loaderCount}/> 
    : isError ?
    <ErrorState message='Something went wrong! Please try refreshing page.'/>
    : isEmpty ?
    <EmptyState message="No results seem to match the filtered criteria at the moment."/>
    : restaurants.map((result) => (
    <Restaurant key={result.name}  name={result.name} distance={result.distance} price={result.price} veggies={result.veggies} category={result.category} address={result.address}/>
    ))}
  </ol>
  )
  ;}
;

const RestaurantsLoader: FunctionComponent<{count : number}> = ({count}) => {
  return(
    <>
      {Array(count).fill(0).map((_, i) => <RestaurantLoader key={i}/>)}
    </>
  )
};
