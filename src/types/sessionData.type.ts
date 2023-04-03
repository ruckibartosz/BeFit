import moment from 'moment';
import { ExerciseType } from './exercise.type';

export type SessionType = {
  workoutName: string;
  date: moment.Moment | string;
  startTimestamp: moment.Moment | string;
  endTimestamp: moment.Moment | string;
  exercises: Array<ExerciseType & RepeatingType>;
  totalFinishedSets: number;
  totalWeight: number;
  note: string;
};

export type RepeatingType = {
  repeating: Array<SetType>;
};

export type SetType = {
  isDone: boolean;
  weight: number;
  reps: number;
};
