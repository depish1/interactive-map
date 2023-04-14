import { useCallback } from 'react';

import { InfoElement, Wrapper } from './ZoomPanel.style';
import { defaultMapTransformOrigin, defaultMapViewBox, defaultMpZoomScale } from '@/config.ts';
import { getViewBoxString } from 'Components/Map/WorldMapSVG/WorldMapSVG.helpers';
import { useStore } from 'Store/store';
import Button from 'Components/BaseComponents/Button/Button';

const ZoomPanel = () => {
  const [zoomScale, setStore] = useStore((store) => store.zoomScale);
  const [mapRef] = useStore((store) => store.mapRef);
  const zoomText = `Zoom: ${zoomScale.toFixed(1)}`;

  const handleReset = useCallback(() => {
    mapRef.current.style.transform = '';
    mapRef.current.style.transformOrigin = defaultMapTransformOrigin;
    console.log(getViewBoxString(defaultMapViewBox), defaultMapViewBox);
    mapRef.current.setAttribute('viewBox', getViewBoxString(defaultMapViewBox));
    setStore((store) => ({ ...store, zoomScale: defaultMpZoomScale }));
  }, [mapRef, setStore]);

  return (
    <Wrapper>
      <InfoElement>{zoomText}</InfoElement>
      <Button isLinkButton onClick={handleReset} text="Reset" />
    </Wrapper>
  );
};

export default ZoomPanel;
