import { FunctionComponent } from "react";
import { RestaurantResult } from "../hooks";
import { Restaurant } from "./Restaurant";

export const Restaurants: FunctionComponent<{
  results: RestaurantResult;
}> = ({ results }) => {
  const {status, restaurants} = results;
  const isLoading = status === "LOADING";
  const isError = status === "ERROR";
  console.log({results})
  return(<ol>
    {isLoading ?
    <>
      <Restaurant  name='Loading...' distance='Loading...' price='Loading...' veggies='Loading...' category='Loading...' address='Loading...'/>
      <Restaurant  name='Loading...' distance='Loading...' price='Loading...' veggies='Loading...' category='Loading...' address='Loading...'/>
      <Restaurant  name='Loading...' distance='Loading...' price='Loading...' veggies='Loading...' category='Loading...' address='Loading...'/>
    </>
    : isError ?
    <p>Something went wrong! Please refresh page.</p>
    : restaurants.map((result) => (
      <Restaurant  name={result.name} distance={result.distance} price={result.price} veggies={result.veggies} category={result.category} address={result.address}/>
    ))}
  </ol>);}
;
