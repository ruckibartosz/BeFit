import { SessionType } from './sessionData.type';

export type SessionLoadSessionsActionType = {
  type: 'LOAD_SESSIONS';
  payload: { sessions: Array<SessionType> };
};

export type SessionLoadCurrentSessionActionType = {
  type: 'LOAD_CURR_SESSION';
  payload: { session: SessionType };
};

export type SessionAddSessionActionType = {
  type: 'ADD_SESSION';
  payload: { session: SessionType };
};

export type SessionActionType =
  | SessionAddSessionActionType
  | SessionLoadCurrentSessionActionType
  | SessionLoadSessionsActionType;
