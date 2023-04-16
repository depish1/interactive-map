import { useEffect, useCallback, useRef, TouchEvent, Touch } from 'react';

import { useStore } from 'Store/store';
import { getTransformParameters, getTransformString } from '../WorldMapSVG/WorldMapSVG.helpers';
import { PointerType } from 'Types/MapTypes';

export const useMapZoom = () => {
  const [mapRef, setStore] = useStore((store) => store.mapRef);
  const referencePointRef = useRef({ x: 0, y: 0 });

  const getMidpoint = useCallback(
    (point1: Touch, point2: Touch): PointerType => ({
      x: (point1.clientX + point2.clientX) / 2,
      y: (point1.clientY + point2.clientY) / 2,
    }),
    [],
  );

  const getDistance = useCallback((point1: PointerType, point2: PointerType) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const onTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 2) {
        referencePointRef.current = getMidpoint(e.touches[0], e.touches[1]);
      }
    },
    [getMidpoint],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 2) {
        const newReferencePoint = getMidpoint(e.touches[0], e.touches[1]);
        const delta = getDistance(newReferencePoint, referencePointRef.current);

        let newScale = delta / 100;
        newScale = Math.min(Math.max(0.1, newScale), 10);

        mapRef.current.style.transform = getTransformString(newScale);
      }
    },
    [getDistance, getMidpoint, mapRef],
  );

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

  return { onTouchStart, onTouchMove };
};
