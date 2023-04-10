import { MouseEvent } from 'react';

import { Wrapper } from './WorldMap.style';
import WorldMapSVG from './WorldMapSVG/WorldMapSVG';

const WorldMap = () => {
  const mapClickHandler = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    console.log('clicked'); // temp
  };

  return (
    <Wrapper>
      <WorldMapSVG onClick={mapClickHandler} />
    </Wrapper>
  );
};

export default WorldMap;
