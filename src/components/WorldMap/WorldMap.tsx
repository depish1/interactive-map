import { MouseEvent, useCallback } from 'react';

import { Wrapper } from './WorldMap.style';
import { useStore } from 'Store/store';
import WorldMapSVG from './WorldMapSVG/WorldMapSVG';
import SearchBar from 'Components/SearchBar/SearchBar';

const WorldMap = () => {
  const [mapRef, setStore] = useStore((store) => store.mapRef);

  const mapClickHandler = useCallback(
    (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
      const element = e.target as HTMLElement;
      const isPath = element.tagName === 'path';
      if (!isPath) return;
      setStore((store) => {
        const { selectedCountries } = store;
        const wasSelected = selectedCountries.includes(element.id);
        const newSelectedCountries = wasSelected ? selectedCountries.filter((el) => el !== element.id) : [...selectedCountries, element.id];

        return { ...store, selectedCountries: newSelectedCountries };
      });
    },
    [setStore],
  );

  const mouseMoveHandler = useCallback(
    (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
      const element = e.target as HTMLElement;
      const isPath = element.tagName === 'path';
      const title = element.getAttribute('data-title');

      setStore((store) => ({ ...store, hoverCountry: isPath ? title : '' }));
    },
    [setStore],
  );

  return (
    <Wrapper>
      <SearchBar />
      <WorldMapSVG ref={mapRef} onClick={mapClickHandler} onMouseMove={mouseMoveHandler} />
    </Wrapper>
  );
};

export default WorldMap;
