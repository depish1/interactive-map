import { useEffect, useCallback } from 'react';

import { useStore } from 'Store/store';
import { getTransformParameters, getTransformString } from './WorldMapSVG.helpers';

export const useMapZoom = () => {
  const [mapRef, setStore] = useStore((store) => store.mapRef);

  const zoom = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const isZoomOut = e.deltaY > 0;
      const { scale } = getTransformParameters(mapRef.current);
      if ((isZoomOut && scale === 1) || (!isZoomOut && scale === 0.1)) return;

      const rect = mapRef.current.getBoundingClientRect();

      const svgWidth = rect.width / scale;
      const svgHeight = rect.height / scale;
      const cursorXOffset = e.offsetX;
      const cursorYOffset = e.offsetY;
      const xPercent = (cursorXOffset * 100) / svgWidth;
      const YPercent = (cursorYOffset * 100) / svgHeight;

      let dScale = 0.2;
      if (isZoomOut) dScale *= -1;
      const newScale = scale + dScale;
      mapRef.current.style.transformOrigin = `${xPercent}% ${YPercent}%`;
      mapRef.current.style.transform = getTransformString(newScale);
      setStore((store) => ({ ...store, zoomScale: newScale }));
      if (isZoomOut) return;
    },
    [mapRef, setStore],
  );

  //   Web API is used because React does not provide an api to intentionally set whether an event is passive.
  //   This is due to changes made to Chrome. More info:
  // https://developer.chrome.com/blog/scrolling-intervention/#the-intervention
  // https://github.com/facebook/react/issues/22794
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.addEventListener('wheel', zoom);

    return () => mapRef.current.removeEventListener('wheel', zoom);
  }, [mapRef, zoom]);
};
