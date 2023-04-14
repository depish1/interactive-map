import { Container, MapWrapper } from './MapPage.style';
import TopBar from 'Components/TopBar/TopBar';
import WorldMapSVG from 'Components/Map/WorldMapSVG/WorldMapSVG';

const MapPage = () => (
  <Container>
    <TopBar />
    <MapWrapper>
      <WorldMapSVG />
    </MapWrapper>
  </Container>
);

export default MapPage;
