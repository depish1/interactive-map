import { useCallback, useState } from 'react';

import { OpenButton, CloseButton, Wrapper, Headline } from './SideBar.style';
import CountriesList from 'Components/SideBar/CountriesList/CountriesList';
import LeftArrowIcon from 'Icons/LeftArrowIcon';
import SearchBar from 'Components/SideBar/SearchBar/SearchBar';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = useCallback(() => setIsOpen(true), []);
  const closeSideBar = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <CloseButton isOpen={isOpen} onClick={closeSideBar}>
          <LeftArrowIcon />
        </CloseButton>
        <SearchBar />
        <Headline>Selected countries</Headline>
        <CountriesList />
      </Wrapper>
      <OpenButton isOpen={isOpen} onClick={openSideBar} />
    </>
  );
};

export default SideBar;
