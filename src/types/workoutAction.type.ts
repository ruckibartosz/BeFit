import { ExerciseType } from './exercise.type';
import { DayType, WorkoutType } from './workoutData.type';

export type WorkoutFetchWorkoutsActionType = {
  type: 'FETCH_WORKOUTS';
  payload: { workouts: Array<WorkoutType>; initialized: boolean };
};

export type WorkoutModWorkoutsActionType = {
  type: 'MOD_WORKOUTS';
  payload: { workouts: Array<WorkoutType> };
};

export type WorkoutModCurrentWorkoutActionType = {
  type: 'MOD_CURR_WORKOUT';
  payload: { workout: WorkoutType };
};

export type WorkoutModCurrentDayActionType = {
  type: 'MOD_CURR_DAY';
  payload: { day: DayType };
};

export type WorkoutModGeneralActionType = {
  type: 'MOD_GENERAL';
  payload: { name: string; note: string };
};

export type WorkoutModDaysActionType = {
  type: 'MOD_DAYS';
  payload: { days: Array<DayType> };
};

export type WorkoutModExerciseActionType = {
  type: 'MOD_EXERCISE';
  payload: { exercise: Array<ExerciseType> };
};

export type WorkoutActionType =
  | WorkoutModCurrentDayActionType
  | WorkoutFetchWorkoutsActionType
  | WorkoutModWorkoutsActionType
  | WorkoutModCurrentWorkoutActionType
  | WorkoutModDaysActionType
  | WorkoutModExerciseActionType
  | WorkoutModGeneralActionType;
