import { MutableRefObject, ReactNode, useMemo, useRef } from 'react';

import { useStore as useGenericStore } from 'Store/genericStore/useStore';
import GenericProvider from 'Store/genericStore/Provider';
import { defaultMapViewBox, defaultMpZoomScale, defaultPointerOrigin } from '@/config.ts';
import { PointerType, ViewBoxType } from 'Types/MapTypes';

interface IMapStoreProviderProps {
  children: ReactNode;
}

export interface IStore {
  hoverCountry: string;
  selectedCountries: string[];
  mapRef: MutableRefObject<SVGSVGElement>;
  viewBoxRef: MutableRefObject<ViewBoxType>;
  pointerRef: MutableRefObject<PointerType>;
  zoomScale: number;
}

const Provider = ({ children }: IMapStoreProviderProps) => {
  const mapRef = useRef<SVGSVGElement>(null);
  const viewBoxRef = useRef<ViewBoxType>({ ...defaultMapViewBox });
  const pointerRef = useRef({ ...defaultPointerOrigin });

  const initialValue: IStore = useMemo(
    () => ({
      hoverCountry: '',
      selectedCountries: [],
      mapRef,
      viewBoxRef,
      pointerRef,
      zoomScale: defaultMpZoomScale,
    }),
    [],
  );

  return <GenericProvider initialValue={initialValue}>{children}</GenericProvider>;
};

export function useStore<T = IStore>(selector?: (store: IStore) => T) {
  const value = useGenericStore(selector);

  return value;
}

export default Provider;
