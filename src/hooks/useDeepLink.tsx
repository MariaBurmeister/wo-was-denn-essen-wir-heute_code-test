import {useEffect, useState } from "react";
import {  useSearchParams, URLSearchParamsInit, NavigateOptions } from "react-router-dom";

interface DeepLinking<T> {
    deepLink: string;
    searchParams: URLSearchParams;
    parsedSearchParams: T;
    setSearchParams: (nextInit?: T | URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined, navigateOpts?: NavigateOptions | undefined) => void;
}

export const useDeepLink = ({initialSearchState} : {initialSearchState:any}): DeepLinking<typeof initialSearchState> => {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchState);
  const {href, search} = window.location;

  const [parsedSearchParams, setParsedSearchParams] = useState<typeof initialSearchState>(initialSearchState);

console.log({search})
    useEffect(() => {
        if(search === '') {
            setSearchParams(initialSearchState)
        }
    }, [search]);

    useEffect(() => {
        setParsedSearchParams(parseSearchParams(searchParams))
    }, [searchParams]);


    const parseSearchParams = (searchParams: URLSearchParams) => {
        const parsedSearchParams: typeof initialSearchState = {};
        searchParams.forEach((_, key) => {
            parsedSearchParams[key] = typeof initialSearchState[key] === 'object' ? searchParams.getAll(key) : searchParams.get(key);
        });
    return parsedSearchParams;
  };

  return {deepLink: href, searchParams, parsedSearchParams, setSearchParams };
}