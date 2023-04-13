import { Container, MapWrapper } from './WorldMap.style';
import SearchBar from 'Components/SearchBar/SearchBar';
import WorldMapSVG from './WorldMapSVG/WorldMapSVG';

const WorldMap = () => (
  <Container>
    <SearchBar />
    <MapWrapper>
      <WorldMapSVG />
    </MapWrapper>
  </Container>
);

export default WorldMap;
