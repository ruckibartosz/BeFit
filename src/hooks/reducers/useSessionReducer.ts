import React, { useReducer } from 'react';

import { Session } from '../../types/sessionData.type';
import { SessionActions } from '../../types/sessionAction.type';

type SessionStateType = {
  currentSession: Session;
  sessions: Session[];
};

export const useSessionReducer = (): [
  SessionStateType,
  React.Dispatch<SessionActions>
] => {
  const movieReducer = (
    state: SessionStateType,
    action: SessionActions
  ): SessionStateType => {
    switch (action.type) {
      case 'LOAD_SESSIONS': {
        const { sessions } = action.payload;
        return { ...state, sessions };
      }

      case 'LOAD_CURR_SESSION': {
        const { session } = action.payload;
        return { ...state, currentSession: session };
      }

      case 'ADD_SESSION': {
        const { session } = action.payload;
        return { ...state, sessions: [...state.sessions, session] };
      }

      default:
        return state;
    }
  };

  const defaultReducerValues: SessionStateType = {
    currentSession: {
      workoutName: '',
      date: '',
      startTimestamp: '',
      endTimestamp: '',
      exercises: [],
      totalFinishedSets: 0,
      totalWeight: 0,
      note: '',
    },
    sessions: [],
  };

  const [state, dispatch] = useReducer(movieReducer, defaultReducerValues);

  return [state, dispatch];
};
