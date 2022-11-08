import {
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

import { Restaurants } from "./Restaurants";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { SingleSelectFilter } from "./SingleSelectFilter";
import { Button, InputButton, PageSection } from "./design-system";
import {
  useDeepLink,
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
  "1": "ganz nah dran",
  "2": "nicht so weit weg",
  "3": "Egal",
};

const price: Record<PriceTerms, string> = {
  "1": "Ende des Monats",
  "2": "nicht zu viel",
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

type MultiSelectFilters = "category";
type MultiSelectTerms = CategoryTerms;

export const LunchDecisionAssistent: FunctionComponent<{}> = () => {
  const [randomize, setRandomize] = useState(false);
  const { getSingleSelectValue, getMultiSelectValues, setSingleSelectValue, setMultiSelectValues, setSearchParams } =
    useDeepLink(initialFiltersState);

  const restaurantResults = useRestaurantResults(randomize);

  useEffect(() => {
    setRandomize(false);
  }, []);

  const onReset = () => {
    setSearchParams(initialFiltersState);
    setRandomize(false);
  };

  const onRandomize = () => {
    setRandomize(!randomize);
  };

  const onChangeMultiselect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name as MultiSelectFilters;
    const newValue = e.target.value as MultiSelectTerms;
    setMultiSelectValues(filterName, newValue, "all");
  };

  const onChangeSingleSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name;
    const newValue = e.target.value;
    setSingleSelectValue(filterName, newValue);
  };

  return (
    <>
      <PageSection 
      title="Filters" 
      titleHelpText="Wähle deine Kriterien aus und finde das passende Restaurant für dich."
      selfLink
      headerActions={<Button variant="secondary" onClick={onReset}>Reset</Button>}
      >
        <MultiSelectFilter
          filterName="category"
          selectedValues={getMultiSelectValues("category")}
          filterMap={category}
          onChange={onChangeMultiselect}
        />
        <SingleSelectFilter
          filterName="distance"
          selectedValue={getSingleSelectValue("distance")}
          filterMap={distance}
          onChange={onChangeSingleSelect}
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
        />
        <SingleSelectFilter
          filterName="price"
          selectedValue={getSingleSelectValue("price")}
          filterMap={price}
          onChange={onChangeSingleSelect}
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
        />
        <SingleSelectFilter
          filterName="veggies"
          selectedValue={getSingleSelectValue("veggies")}
          filterMap={veggies}
          onChange={onChangeSingleSelect}
        />
      </PageSection>
      <PageSection
        title="Results"
        selfLink
        headerActions={
            <InputButton
              variant="secondary" 
              type="checkbox"
              name="randomize"
              id="randomize"
              checked={randomize}
              onChange={onRandomize}
            >
              {randomize ? "Restore Order" : "Randomize"}
            </InputButton>
        }
      >
        <Restaurants results={restaurantResults} />
      </PageSection>
    </>
  );
};
