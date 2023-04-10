import { Path } from './MapPath.style';
import { useStore } from 'Store/store';

interface IPathProps {
  d: string;
  title: string;
  id: string;
}

const MapPath = ({ d, title, id }: IPathProps) => {
  const [isSelected] = useStore((store) => store.selectedCountries.includes(id));

  return <Path d={d} data-title={title} id={id} isSelected={isSelected} />;
};

export default MapPath;
