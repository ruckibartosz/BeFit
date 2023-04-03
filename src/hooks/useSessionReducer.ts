import React, { useReducer } from 'react';

import { SessionType } from '../types/sessionData.type';
import { SessionActionType } from '../types/sessionAction.type';

type SessionStateType = {
  currentSession: SessionType;
  sessions: Array<SessionType>;
};

export const useSessionReducer = (): [
  SessionStateType,
  React.Dispatch<SessionActionType>
] => {
  const movieReducer = (
    state: SessionStateType,
    action: SessionActionType
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
