import { Exercise } from './exercise.type';

export type Workout = {
  id: string;
  name: string;
  note: string;
  days: Day[];
};

export type Day = {
  id: string;
  name: string;
  exercise: Exercise[];
};
