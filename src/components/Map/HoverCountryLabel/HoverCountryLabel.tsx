import { Wrapper } from './HoverCountryLabel.style';
import { useStore } from 'Store/store';

const HoverCountryLabel = () => {
  const [hoverCountry] = useStore((store) => store.hoverCountry);

  return !!hoverCountry && <Wrapper>{hoverCountry}</Wrapper>;
};

export default HoverCountryLabel;
