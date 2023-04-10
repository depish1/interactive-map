import { useCallback, useRef } from 'react';

type SetterFuncType<T> = (store: T) => T;

export const useStoreData = <T>(initialValue: T) => {
  const store = useRef(initialValue);
  const subscribers = useRef(new Set<() => void>([]));

  const getStore = useCallback(() => store.current, []);

  const setStore = useCallback((setterFunc: SetterFuncType<T>) => {
    store.current = setterFunc(store.current);
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => {
      subscribers.current.delete(callback);
    };
  }, []);

  return { getStore, setStore, subscribe };
};

export type UseStoreDataReturnType = ReturnType<typeof useStoreData>;
