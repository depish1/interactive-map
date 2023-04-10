import { ReactNode, createContext } from 'react';
import { useStoreData } from './useStoreData';

export const StoreContext = createContext(null);

type ProviderPropsType<T> = {
  children: ReactNode;
  initialValue: T;
};

export default function Provider<T>({ children, initialValue }: ProviderPropsType<T>) {
  const value = useStoreData(initialValue);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
