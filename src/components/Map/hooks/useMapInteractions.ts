import { MouseEvent, useCallback, useMemo, TouchEvent } from 'react';

import { useMapPanning } from './useMapPanning';
import { useMapZoom } from './useMapZoom';
import { useStore } from 'Store/store';

export const useMapInteractions = () => {
  const [mapRef, setStore] = useStore((store) => store.mapRef);
  const panningEvents = useMapPanning();
  const zoomEvents = useMapZoom();

  const onClick = useCallback(
    (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
      const element = e.target as HTMLElement;
      const isPath = element.tagName === 'path';
      if (!isPath) return;
      setStore((store) => {
        const { selectedCountries } = store;
        const wasSelected = selectedCountries.includes(element.id);
        const newSelectedCountries = wasSelected ? selectedCountries.filter((el) => el !== element.id) : [...selectedCountries, element.id];

        return { ...store, selectedCountries: newSelectedCountries };
      });
    },
    [setStore],
  );

  const onMouseMove = useCallback(
    (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
      const element = e.target as HTMLElement;
      const isPath = element.tagName === 'path';
      const title = element.getAttribute('data-title');

      setStore((store) => ({ ...store, hoverCountry: isPath ? title : '' }));
    },
    [setStore],
  );

  const mouseMoveHandler = useCallback(
    (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
      onMouseMove(e);
      panningEvents?.onMouseMove && panningEvents.onMouseMove(e);
    },
    [onMouseMove, panningEvents],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      panningEvents.onTouchMove(e);
      zoomEvents.onTouchMove(e);
    },
    [panningEvents, zoomEvents],
  );

  const onTouchStart = useCallback(
    (e: TouchEvent) => {
      panningEvents.onTouchStart(e);
      zoomEvents.onTouchStart(e);
    },
    [panningEvents, zoomEvents],
  );

  const events = useMemo(
    () => ({
      ...panningEvents,
      onClick,
      onMouseMove: mouseMoveHandler,
      onTouchMove,
      onTouchStart,
    }),
    [mouseMoveHandler, onClick, onTouchMove, onTouchStart, panningEvents],
  );

  useMapZoom();

  return { events, mapRef };
};
