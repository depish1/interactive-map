import { Container, MapWrapper } from './MapPage.style';
import SideBar from 'Components/SideBar/SideBar';
import WorldMapSVG from 'Components/Map/WorldMapSVG/WorldMapSVG';

const MapPage = () => (
  <Container>
    <SideBar />
    <MapWrapper>
      <WorldMapSVG />
    </MapWrapper>
  </Container>
);

export default MapPage;
