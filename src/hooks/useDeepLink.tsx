import {useEffect, useState } from "react";
import { useLocation, Location, useNavigate, useSearchParams, URLSearchParamsInit, NavigateOptions } from "react-router-dom";

interface DeepLinking<T> {
    deepLink: Partial<Location>;
    searchParams: URLSearchParams;
    parsedSearchParams: T;
    setSearchParams: (nextInit?: T | URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined, navigateOpts?: NavigateOptions | undefined) => void;
}




export const useDeepLink = ({initialSearchState} : {initialSearchState:any}): DeepLinking<typeof initialSearchState> => {
  const location = useLocation();  
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(initialSearchState);

  const [parsedSearchParams, setParsedSearchParams] = useState<typeof initialSearchState>(initialSearchState);


    useEffect(() => {
        setSearchParams(searchParams);
        
    }, []);

    useEffect(() => {
        searchParams.sort();
        setParsedSearchParams(parseSearchParams(searchParams))
        location.search = searchParams.toString();
    }, [searchParams]);

    useEffect(() => {
        navigate(location)
    }, [searchParams]);

    const parseSearchParams = (searchParams: URLSearchParams) => {
        const parsedSearchParams: typeof initialSearchState = {};
        searchParams.forEach((_, key) => {
            parsedSearchParams[key] = typeof initialSearchState[key] === 'object' ? searchParams.getAll(key) : searchParams.get(key);
        });
    return parsedSearchParams;
  };

  return {deepLink: location, searchParams, parsedSearchParams, setSearchParams };
}