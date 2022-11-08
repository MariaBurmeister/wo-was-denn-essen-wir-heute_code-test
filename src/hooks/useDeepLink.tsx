import {useEffect, useState } from "react";
import {  useSearchParams, URLSearchParamsInit, NavigateOptions } from "react-router-dom";

type InitialFiltersState = Record<string, string|string[]>;
interface DeepLinking<InitialFiltersState> {
    deepLink: string;
    searchParams: URLSearchParams;
    getSingleSelectValue: (key: keyof InitialFiltersState) => string;
    setSingleSelectValue: (key: keyof InitialFiltersState, value: string) => void;
    getMultiSelectValues: (key: keyof InitialFiltersState) => string[];
    setMultiSelectValues: (key: keyof InitialFiltersState, toggledValue: string, resetterValue?: string) => void;
    setSearchParams: (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined, navigateOpts?: NavigateOptions | undefined) => void;
}


export function useDeepLink(initialSearchState: InitialFiltersState): DeepLinking<InitialFiltersState> {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchState);
  const {href, search} = window.location;

    useEffect(() => {
        if(search === '') {
            setSearchParams(initialSearchState)
        }
    }, [search]);

    const getSingleSelectValue = (key: keyof typeof initialSearchState): string => {
        const value =  searchParams.get(key);
        if(value) {
            return value;
        }
        throw new Error(`No value found for key ${key}`);
    };

    const getMultiSelectValues = (key: keyof typeof initialSearchState): string[] => {
        return searchParams.getAll(key);
    };

    const setSingleSelectValue = (key: keyof typeof initialSearchState, value: string) => {
        setSearchParams((prev: URLSearchParams) => {
            prev.set(key, value);
            return prev;
          });
    };

    const setMultiSelectValues = (key: keyof typeof initialSearchState, toggledValue: string, resetterValue?: keyof typeof initialSearchState) => {
        if (resetterValue && toggledValue === resetterValue) {
            return setSearchParams((prev: URLSearchParams) => {
              prev.set(key, resetterValue);
              return prev;
            });
          }
      
          
          let selectedValues = searchParams.getAll(key);
          setSearchParams((prev: URLSearchParams) => {
            prev.delete(key);
      
            if (selectedValues.includes(toggledValue)) {
              const updatedSelectedValues = selectedValues
                .filter((value) => value !== toggledValue);
      
      
              if (updatedSelectedValues.length > 0) {
                updatedSelectedValues.forEach((value) => prev.append(key, value));
              }
              
            } else {
      
              if (resetterValue && selectedValues.includes(resetterValue)) {
                selectedValues = selectedValues.filter((value) => value !== "all");
              }
      
              [...selectedValues, toggledValue].forEach((value) => prev.append(key, value));
      
            }
            return prev;
          });
    };

  return {deepLink: href, searchParams, setSearchParams, getSingleSelectValue, getMultiSelectValues, setSingleSelectValue, setMultiSelectValues};
}