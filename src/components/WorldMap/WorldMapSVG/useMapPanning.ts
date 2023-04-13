import { useCallback, useRef, MouseEvent, TouchEvent } from 'react';

import { getPointFromEvent, getTransformParameters, getViewBoxString } from './WorldMapSVG.helpers';
import { useStore } from 'Store/store';

export const useMapPanning = () => {
  const [mapRef] = useStore((store) => store.mapRef);
  const [viewBoxRef] = useStore((store) => store.viewBoxRef);
  const [pointerRef] = useStore((store) => store.pointerRef);
  const isPointerDown = useRef(false);

  const onPointerDown = useCallback(<T extends MouseEvent | TouchEvent>(e: T) => {
    isPointerDown.current = true;
    const pointerPosition = getPointFromEvent(e);
    pointerRef.current.x = pointerPosition.x;
    pointerRef.current.y = pointerPosition.y;
  }, []);

  const onPointerUp = useCallback(<T extends MouseEvent | TouchEvent>(e: T) => {
    isPointerDown.current = false;
    const pointerPosition = getPointFromEvent(e);
    pointerRef.current.x = pointerPosition.x;
    pointerRef.current.y = pointerPosition.y;
  }, []);

  const onPointerMove = useCallback(
    <T extends MouseEvent | TouchEvent | WheelEvent>(e: T) => {
      if (!isPointerDown.current) return;
      e.preventDefault();
      const pointerPosition = getPointFromEvent(e);
      const { scale } = getTransformParameters(mapRef.current);
      const newX = viewBoxRef.current.x - (pointerPosition.x - pointerRef.current.x);
      const newY = viewBoxRef.current.y - (pointerPosition.y - pointerRef.current.y);

      const maxXValue = (viewBoxRef.current.width * scale - viewBoxRef.current.width) / 2;
      const maxYValue = (viewBoxRef.current.height * scale - viewBoxRef.current.height) / 2;

      const isNewXHigherThanMax = Math.abs(newX) > maxXValue;
      const isNewYHigherThanMax = Math.abs(newY) > maxYValue;

      const shouldBlockX = isNewXHigherThanMax && Math.abs(newX) - Math.abs(viewBoxRef.current.x) > 0;
      const shouldBlockY = isNewYHigherThanMax && Math.abs(newY) - Math.abs(viewBoxRef.current.y) > 0;

      viewBoxRef.current.x = shouldBlockX ? viewBoxRef.current.x : newX;
      viewBoxRef.current.y = shouldBlockY ? viewBoxRef.current.y : newY;

      mapRef.current.setAttribute('viewBox', getViewBoxString(viewBoxRef.current));
      pointerRef.current.x = pointerPosition.x;
      pointerRef.current.y = pointerPosition.y;
    },
    [mapRef, pointerRef, viewBoxRef],
  );

  const events = window.PointerEvent
    ? {
        onPointerDown: onPointerDown<MouseEvent>,
        onPointerUp: onPointerUp<MouseEvent>,
        onPointerLeave: onPointerUp<MouseEvent>,
        onPointerMove: onPointerMove<MouseEvent>,
      }
    : {
        onMouseDown: onPointerDown<MouseEvent>,
        onMouseUp: onPointerUp<MouseEvent>,
        onMouseLeave: onPointerUp<MouseEvent>,
        onMouseMove: onPointerMove<MouseEvent>,

        onTouchStart: onPointerDown<TouchEvent>,
        onTouchEnd: onPointerUp<TouchEvent>,
        onTouchMove: onPointerMove<TouchEvent>,
      };

  return events;
};
