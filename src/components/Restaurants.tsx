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
  const isEmpty = status !== "ERROR" && restaurants.length === 0;

  return(
  <ol aria-label='restaurants' className="restaurant_list">
    {isLoading ?
    <>
      <RestaurantLoader key={1} />
      <RestaurantLoader key={2} />
      <RestaurantLoader key={3} />
    </>
    : isError ?
    <ErrorState message='Something went bad! Please try refreshing page.'/>
    : isEmpty ?
    <EmptyState message="No results seem to match the filtered criteria at the moment."/>
    : restaurants.map((result) => (
    <Restaurant key={result.name}  name={result.name} distance={result.distance} price={result.price} veggies={result.veggies} category={result.category} address={result.address}/>
    ))}
  </ol>
  )
  ;}
;
