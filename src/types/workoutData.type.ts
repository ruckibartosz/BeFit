import { ExerciseType } from './exercise.type';

export type WorkoutType = {
  id: string;
  name: string;
  note: string;
  days: Array<DayType>;
};

export type DayType = {
  id: string;
  name: string;
  exercise: Array<ExerciseType>;
};
