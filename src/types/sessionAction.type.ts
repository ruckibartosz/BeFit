import { Session } from './sessionData.type';

export type SessionLoadSessionsAction = {
  type: 'LOAD_SESSIONS';
  payload: { sessions: Session[] };
};

export type SessionLoadCurrentSessionAction = {
  type: 'LOAD_CURR_SESSION';
  payload: { session: Session };
};

export type SessionAddSessionAction = {
  type: 'ADD_SESSION';
  payload: { session: Session };
};

export type SessionActions =
  | SessionAddSessionAction
  | SessionLoadCurrentSessionAction
  | SessionLoadSessionsAction;
