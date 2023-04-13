import { useStore } from 'Store/store';
import { InfoElement, Wrapper } from './ZoomPanel.style';
import Button from 'Components/BaseComponents/Button/Button';
import { defaultMapTransformOrigin, defaultMapViewBox, defaultMpZoomScale } from '@/config.ts';
import { useCallback } from 'react';
import { getViewBoxString } from 'Components/WorldMap/WorldMapSVG/WorldMapSVG.helpers';

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
