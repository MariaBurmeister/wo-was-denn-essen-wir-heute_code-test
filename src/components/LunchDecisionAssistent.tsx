import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { Restaurants } from "./Restaurants";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { SingleSelectFilter } from "./SingleSelectFilter";
import { Button } from "./design-system";
import {
  useRestaurantResults,
  FiltersState,
  CategoryTerms,
  DistanceTerms,
  PriceTerms,
  VeggiesTerms
} from "../hooks";

const category: Record<CategoryTerms, string> = {
  all: "Alles",
  burger: "Burger",
  italian: "Pizza/Pasta",
  asian: "Asiatisch",
  homeMade: "Hausmannskost",
  other: "Sonstiges"
};

const distance: Record<DistanceTerms, string> = {
  '1': "Egal",
  '2': "nicht so weit weg",
  '3': "ganz nah dran"
};
const price: Record<PriceTerms, string> = {
  '1': "Egal",
  '2': "Nicht zu viel",
  '3': "Ende des Monats"
};
const veggies: Record<VeggiesTerms, string> = {
  '1': "Egal",
  '2': "sollte schon schmecken",
  '3': "muss ganz lecker sein"
};

const initialFiltersState: FiltersState = {
  category: ["all"],
  distance: '1',
  price: '1',
  veggies: '1'
};


type MultiSelectFilters = 'category';
type MultiSelectTerms = CategoryTerms;

export const LunchDecisionAssistent: FunctionComponent<{}> = () => {
  const [selectedFilters, setFilters] = useState<FiltersState>(
    initialFiltersState
  );

  const restaurantResults = useRestaurantResults(selectedFilters);

  const onReset = () => {
    setFilters(initialFiltersState);
  };

  const onChangeMultiselect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name as MultiSelectFilters;
    const newValue = e.target.value as MultiSelectTerms;

    if (newValue === "all") {
      setFilters((prev: FiltersState) => {
        return { ...prev, [filterName]: ["all"] };
      });
      return;
    }

    setFilters((prev: FiltersState) => {
        return prev[filterName].includes(newValue)
        ? {
            ...prev,
            [filterName]: [
              ...prev[filterName].filter((filter) => filter !== newValue)
            ]
          }
        : {
            ...prev,
            [filterName]: [
              ...prev[filterName].filter((filter) => filter !== "all"),
              newValue
            ]
          };
    });
  };

  const onChangeSingleSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name;
    const newValue = e.target.value;

    setFilters((prev: FiltersState) => {
      return { ...prev, [filterName]: newValue };
    });
  };

  return (
    <>
      <MultiSelectFilter
        filterName="category"
        selectedValues={selectedFilters.category}
        filterMap={category}
        onChange={onChangeMultiselect}
      />
      <SingleSelectFilter
        filterName="distance"
        selectedValue={selectedFilters.distance}
        filterMap={distance}
        onChange={onChangeSingleSelect}
      />
      <SingleSelectFilter
        filterName="price"
        selectedValue={selectedFilters.price}
        filterMap={price}
        onChange={onChangeSingleSelect}
      />
      <SingleSelectFilter
        filterName="veggies"
        selectedValue={selectedFilters.veggies}
        filterMap={veggies}
        onChange={onChangeSingleSelect}
      />
      <Restaurants results={restaurantResults} />
      <Button onClick={() => {}}>Randomize</Button>
      <Button onClick={onReset}>Reset</Button>
    </>
  );
};
