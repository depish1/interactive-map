import { useCallback, useRef, MouseEvent, TouchEvent } from 'react';

import { getPointFromEvent, getTransformParameters } from './WorldMapSVG.helpers';
import { useStore } from 'Store/store';

const defaultViewBox = {
  x: 0,
  y: 0,
  width: 1009.6727,
  height: 665.96301,
};

const defaultPointerOrigin = {
  x: 0,
  y: 0,
};

export const useMapPanning = () => {
  const [mapRef] = useStore((store) => store.mapRef);
  const isPointerDown = useRef(false);
  const viewBoxRef = useRef(defaultViewBox);
  const pointerOriginRef = useRef(defaultPointerOrigin);

  const onPointerDown = useCallback(<T extends MouseEvent | TouchEvent>(e: T) => {
    isPointerDown.current = true;
    const pointerPosition = getPointFromEvent(e);
    pointerOriginRef.current.x = pointerPosition.x;
    pointerOriginRef.current.y = pointerPosition.y;
  }, []);

  const onPointerUp = useCallback(() => {
    isPointerDown.current = false;
  }, []);

  const onPointerMove = useCallback(
    <T extends MouseEvent | TouchEvent | WheelEvent>(e: T) => {
      if (!isPointerDown.current) return;
      e.preventDefault();
      const pointerPosition = getPointFromEvent(e);
      const { scale } = getTransformParameters(mapRef.current);
      const newX = viewBoxRef.current.x - (pointerPosition.x - pointerOriginRef.current.x);
      const newY = viewBoxRef.current.y - (pointerPosition.y - pointerOriginRef.current.y);

      const maxXValue = (viewBoxRef.current.width * scale - viewBoxRef.current.width) / 2;
      const maxYValue = (viewBoxRef.current.height * scale - viewBoxRef.current.height) / 2;

      const isNewXHigherThanMax = Math.abs(newX) > maxXValue;
      const isNewYHigherThanMax = Math.abs(newY) > maxYValue;

      const shouldBlockX = isNewXHigherThanMax && Math.abs(newX) - Math.abs(viewBoxRef.current.x) > 0;
      const shouldBlockY = isNewYHigherThanMax && Math.abs(newY) - Math.abs(viewBoxRef.current.y) > 0;

      viewBoxRef.current.x = shouldBlockX ? viewBoxRef.current.x : newX;
      viewBoxRef.current.y = shouldBlockY ? viewBoxRef.current.y : newY;

      const viewBoxString = `${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.width} ${viewBoxRef.current.height}`;
      mapRef.current.setAttribute('viewBox', viewBoxString);
      pointerOriginRef.current.x = pointerPosition.x;
      pointerOriginRef.current.y = pointerPosition.y;
    },
    [mapRef],
  );

  const events = window.PointerEvent
    ? {
        onPointerDown: onPointerDown<MouseEvent>,
        onPointerUp,
        onPointerLeave: onPointerUp,
        onPointerMove: onPointerMove<MouseEvent>,
      }
    : {
        onMouseDown: onPointerDown<MouseEvent>,
        onMouseUp: onPointerUp,
        onMouseLeave: onPointerUp,
        onMouseMove: onPointerMove<MouseEvent>,

        onTouchStart: onPointerDown<TouchEvent>,
        onTouchEnd: onPointerUp,
        onTouchMove: onPointerMove<TouchEvent>,
      };

  return events;
};
