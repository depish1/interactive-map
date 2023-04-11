import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { useStore } from 'Store/store';

export const useSearchBar = () => {
  const [filterString, setFilterString] = useState<string>('');
  const [mapRef, setStore] = useStore((store) => store.mapRef);

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  }, []);

  const selectCountriesByFilter = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mapRef.current || !filterString) return;
      const countriesEl = [...mapRef.current.children];

      const searchedPaths = countriesEl.filter((el) => {
        const isPathElement = el.tagName === 'path';
        const title = el.getAttribute('data-title');
        const isSearched = title.toLowerCase().includes(filterString.toLowerCase());

        return isPathElement && isSearched;
      });

      const searchedPathsIds = searchedPaths.map((el) => el.id);
      setStore((store) => ({ ...store, selectedCountries: searchedPathsIds }));
    },
    [filterString, mapRef, setStore],
  );

  const clearSelectedCountries = useCallback(() => setStore((store) => ({ ...store, selectedCountries: [] })), [setStore]);

  return { inputValue: filterString, inputChangeHandler, selectCountriesByFilter, clearSelectedCountries };
};
