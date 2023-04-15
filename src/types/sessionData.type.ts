import moment from 'moment';
import { Exercise } from './exercise.type';

export type Session = {
  workoutName: string;
  date: moment.Moment | string;
  startTimestamp: moment.Moment | string;
  endTimestamp: moment.Moment | string;
  exercises: Array<Exercise & Repeating>;
  totalFinishedSets: number;
  totalWeight: number;
  note: string;
};

export type Repeating = {
  repeating: Set[];
};

export type Set = {
  isDone: boolean;
  weight: number;
  reps: number;
};
