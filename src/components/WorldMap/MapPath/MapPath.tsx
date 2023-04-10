import { Path } from './MapPath.style';

interface IPathProps {
  d: string;
  title: string;
  id: string;
}

const MapPath = ({ d, title, id }: IPathProps) => {
  const isSelected = true; //temp
  return <Path d={d} data-title={title} id={id} isSelected={isSelected} />;
};

export default MapPath;
