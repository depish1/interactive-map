import { MutableRefObject, ReactNode, useMemo, useRef } from 'react';

import { useStore as useGenericStore } from 'Store/genericStore/useStore';
import GenericProvider from 'Store/genericStore/Provider';

interface IMapStoreProviderProps {
  children: ReactNode;
}

export interface IStore {
  selectedCountries: string[];
  mapRef: MutableRefObject<SVGSVGElement>;
}

const Provider = ({ children }: IMapStoreProviderProps) => {
  const mapRef = useRef<SVGSVGElement>(null);

  const initialValue: IStore = useMemo(
    () => ({
      selectedCountries: [],
      mapRef,
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
