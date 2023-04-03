import { useCallback, useEffect } from 'react';

import useLocalStorage from './useLocalStorage';
import { SessionType } from '../types/sessionData.type';
import { useSessionReducer } from './useSessionReducer';

const useSession = (id: string | undefined = undefined) => {
  const [state, dispatch] = useSessionReducer();
  const [sessions, setLocalStorageValue] =
    useLocalStorage<Array<SessionType>>('sessions');

  const loadSessions = useCallback(() => {
    if (sessions === undefined) return false;
    dispatch({ type: 'LOAD_SESSIONS', payload: { sessions } });
  }, [dispatch, sessions]);

  const loadCurrSession = useCallback(() => {
    if (sessions === undefined) return;
    const session = sessions?.find((session) => session.workoutName === id);
    if (session === undefined || session === null) return;
    dispatch({ type: 'LOAD_CURR_SESSION', payload: { session } });
  }, [dispatch, id, sessions]);

  const addSession = useCallback(
    (session: SessionType) => {
      if (sessions === undefined) return;
      setLocalStorageValue([...sessions, session]);
      dispatch({ type: 'ADD_SESSION', payload: { session } });
    },
    [dispatch, sessions, setLocalStorageValue]
  );

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return {
    state,
    loadSessions,
    loadCurrSession,
    addSession,
  };
};

export default useSession;
