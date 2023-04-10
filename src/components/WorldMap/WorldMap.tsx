import { MouseEvent } from 'react';

import { Wrapper } from './WorldMap.style';
import { useStore } from 'Store/store';
import WorldMapSVG from './WorldMapSVG/WorldMapSVG';

const WorldMap = () => {
  const [_, setStore] = useStore();

  const mapClickHandler = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    const element = e.target as HTMLElement;
    const isPath = element.tagName === 'path';
    if (!isPath) return;
    setStore((store) => {
      const { selectedCountries } = store;
      const wasSelected = selectedCountries.includes(element.id);
      const newSelectedCountries = wasSelected ? selectedCountries.filter((el) => el !== element.id) : [...selectedCountries, element.id];

      return { ...store, selectedCountries: newSelectedCountries };
    });
  };

  return (
    <Wrapper>
      <WorldMapSVG onClick={mapClickHandler} />
    </Wrapper>
  );
};

export default WorldMap;
