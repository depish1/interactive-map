import { Dot, Wrapper } from './Loader.style';

const Loader = () => (
  <Wrapper>
    <Dot delay={0} />
    <Dot delay={333} />
    <Dot delay={666} />
  </Wrapper>
);

export default Loader;
