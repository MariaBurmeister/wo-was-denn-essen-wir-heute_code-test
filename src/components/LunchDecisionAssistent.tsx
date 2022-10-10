import { ChangeEventHandler, FunctionComponent, useEffect, useState } from "react";
import { Restaurants } from "./Restaurants";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { SingleSelectFilter } from "./SingleSelectFilter";
import { Button, InputButton, PageSection } from "./design-system";
import {
  useRestaurantResults,
  FiltersState,
  CategoryTerms,
  DistanceTerms,
  PriceTerms,
  VeggiesTerms,
} from "../hooks";

const category: Record<CategoryTerms, string> = {
  all: "Alles",
  burger: "Burger",
  italian: "Pizza/Pasta",
  asian: "Asiatisch",
  homeMade: "Hausmannskost",
  other: "Sonstiges",
};

const distance: Record<DistanceTerms, string> = {
  "1": "nicht so weit weg",
  "2": "ganz nah dran",
  "3": "Egal",
};

const price: Record<PriceTerms, string> = {
  "1": "Ende des Monats",
  "2": "Nicht zu viel",
  "3": "Egal",
};

const veggies: Record<VeggiesTerms, string> = {
  "1": "Egal",
  "2": "sollte schon schmecken",
  "3": "muss ganz lecker sein",
};

const initialFiltersState: FiltersState = {
  category: ["all"],
  distance: "3",
  price: "3",
  veggies: "1",
};


type MultiSelectFilters = 'category';
type MultiSelectTerms = CategoryTerms;

export const LunchDecisionAssistent: FunctionComponent<{}> = () => {
  const [selectedFilters, setFilters] = useState<FiltersState>(
    initialFiltersState
  );
  const [randomize, setRandomize] = useState(false);
  const restaurantResults = useRestaurantResults(selectedFilters, randomize);

  useEffect(() => {
    setFilters(initialFiltersState);
    setRandomize(false);
  }, [])

  const onReset = () => {
    setFilters(initialFiltersState);
    setRandomize(false);
  };
  const onRandomize = () => {
    setRandomize(!randomize);
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
    <PageSection title="Filters" >
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
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
      />
      <SingleSelectFilter
        filterName="price"
        selectedValue={selectedFilters.price}
        filterMap={price}
        onChange={onChangeSingleSelect}
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
      />
      <SingleSelectFilter
        filterName="veggies"
        selectedValue={selectedFilters.veggies}
        filterMap={veggies}
        onChange={onChangeSingleSelect}
      />
    </PageSection>
    <PageSection 
      title="Results"
      headerActions={
        <>
          <InputButton type='checkbox' name="randomize" id='randomize' checked={randomize} onChange={onRandomize}>{randomize ? 'Restore Order' : 'Randomize'}</InputButton>
          <Button onClick={onReset}>Reset</Button>
        </>
    }>
      <Restaurants results={restaurantResults} />
    </PageSection>
    </>
  );
};
