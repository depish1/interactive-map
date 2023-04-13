import { MutableRefObject, ReactNode, useMemo, useRef } from 'react';

import { useStore as useGenericStore } from 'Store/genericStore/useStore';
import GenericProvider from 'Store/genericStore/Provider';
import { defaultMpZoomScale } from '@/config.ts';

interface IMapStoreProviderProps {
  children: ReactNode;
}

export interface IStore {
  hoverCountry: string;
  selectedCountries: string[];
  mapRef: MutableRefObject<SVGSVGElement>;
  zoomScale: number;
}

const Provider = ({ children }: IMapStoreProviderProps) => {
  const mapRef = useRef<SVGSVGElement>(null);

  const initialValue: IStore = useMemo(
    () => ({
      hoverCountry: '',
      selectedCountries: [],
      mapRef,
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
