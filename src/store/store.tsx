import { ReactNode, useMemo } from 'react';

import { useStore as useGenericStore } from 'Store/genericStore/useStore';
import GenericProvider from 'Store/genericStore/Provider';

interface IMapStoreProviderProps {
  children: ReactNode;
}

export interface IStore {
  selectedCountries: string[];
}

const Provider = ({ children }: IMapStoreProviderProps) => {
  const initialValue: IStore = useMemo(
    () => ({
      selectedCountries: [],
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
