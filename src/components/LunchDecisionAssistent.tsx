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

type MultiSelectFilters = "category";
type MultiSelectTerms = CategoryTerms;

export const LunchDecisionAssistent: FunctionComponent<{}> = () => {
  const [randomize, setRandomize] = useState(false);
  const { deepLink, parsedSearchParams, searchParams, setSearchParams } =
    useDeepLink({ initialSearchState: initialFiltersState });

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

    if (newValue === "all") {
      return setSearchParams((prev: URLSearchParams) => {
        prev.set(filterName, "all");
        return prev;
      });
    }

    
    let selectedValues = searchParams.getAll(filterName);
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(filterName);

      if (selectedValues.includes(newValue)) {
        const updatedSelectedValues = selectedValues
          .filter((value) => value !== newValue);


        if (updatedSelectedValues.length > 0) {
          updatedSelectedValues.forEach((value) => prev.append(filterName, value));
        }
        
      } else {

        if (selectedValues.includes("all")) {
          selectedValues = selectedValues.filter((value) => value !== "all");
        }

        [...selectedValues, newValue].forEach((value) => prev.append(filterName, value));

      }
      return prev;
    });
  };

  const onChangeSingleSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name;
    const newValue = e.target.value;
    setSearchParams((prev: URLSearchParams) => {
      prev.set(filterName, newValue);
      return prev;
    });
  };

  return (
    <>
      <PageSection title="Filters">
        <MultiSelectFilter
          filterName="category"
          selectedValues={parsedSearchParams.category}
          filterMap={category}
          onChange={onChangeMultiselect}
        />
        <SingleSelectFilter
          filterName="distance"
          selectedValue={parsedSearchParams.distance}
          filterMap={distance}
          onChange={onChangeSingleSelect}
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
        />
        <SingleSelectFilter
          filterName="price"
          selectedValue={parsedSearchParams.price}
          filterMap={price}
          onChange={onChangeSingleSelect}
          sortCondition={([termA], [termB]) => Number(termB) - Number(termA)}
        />
        <SingleSelectFilter
          filterName="veggies"
          selectedValue={parsedSearchParams.veggies}
          filterMap={veggies}
          onChange={onChangeSingleSelect}
        />
      </PageSection>
      <PageSection
        title="Results"
        headerActions={
          <>
            <InputButton
              type="checkbox"
              name="randomize"
              id="randomize"
              checked={randomize}
              onChange={onRandomize}
            >
              {randomize ? "Restore Order" : "Randomize"}
            </InputButton>
            <Button onClick={onReset}>Reset</Button>
          </>
        }
      >
        <Restaurants results={restaurantResults} />
      </PageSection>
    </>
  );
};
