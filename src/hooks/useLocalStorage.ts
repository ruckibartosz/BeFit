import { useState, useEffect, useCallback } from 'react';
import { Storage } from '@ionic/storage';

import { dbConfig } from '@config/db.config';

const useLocalStorage = <T = unknown>(storageKey = '') => {
  const [storageValue, setStorageValue] = useState<T>();
  const [store] = useState<Storage>(new Storage(dbConfig));

  const setLocalStorageValue = useCallback(
    async (val: T) => {
      setStorageValue(val);
      await store?.set(storageKey, val);
    },
    [storageKey, store]
  );

  useEffect(() => {
    const initialStore = async () => {
      store?.create();
      store?.get(storageKey).then((val) => setStorageValue(val));
    };

    initialStore();
  }, [storageKey, store]);

  return [storageValue as T, setLocalStorageValue] as const;
};

export default useLocalStorage;
