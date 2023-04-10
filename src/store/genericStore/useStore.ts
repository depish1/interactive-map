import { useCallback, useContext, useEffect, useState } from 'react';
import { StoreContext } from './Provider';

export type SelectorType<T, K> = (store: T) => K;

type UseStoreDataReturnType<T> = {
  getStore: () => T;
  setStore: (setterFunc: (prevStore: T) => T) => void;
  subscribe: (callback: () => void) => () => void;
};

export function useStore<T, K = T>(selector?: SelectorType<T, K>) {
  const store = useContext<UseStoreDataReturnType<T>>(StoreContext);
  if (!store) {
    throw new Error('Store not found');
  }

  const getStore = useCallback(() => (selector ? selector(store.getStore()) : store.getStore()) as K, [selector, store]);

  const [state, setState] = useState<ReturnType<typeof selector>>(getStore());

  useEffect(() => {
    return store.subscribe(() => setState(getStore()));
  }, [getStore, store]);

  return [state, store.setStore] as const;
}
