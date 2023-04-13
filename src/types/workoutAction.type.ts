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

export type WorkoutModCurrentWorkoutPropertyActionType = {
  type: 'MOD_CURR_WORKOUT_PROPERTY';
  payload: { property: string; value: string | Array<DayType> };
};

export type WorkoutModCurrentDayPropertyActionType = {
  type: 'MOD_CURR_DAY_PROPERTY';
  payload: { property: string; value: string | Array<ExerciseType> };
};

export type WorkoutResetCurrentWorkoutActionType = {
  type: 'RESET_CURR_WORKOUT';
};

export type WorkoutResetCurrentDayActionType = {
  type: 'RESET_CURR_DAY';
};

export type WorkoutLoadCurrentDayActionType = {
  type: 'LOAD_CURR_DAY';
  payload: { currDay: DayType };
};

export type WorkoutLoadCurrentWorkoutActionType = {
  type: 'LOAD_CURR_WORKOUT';
  payload: { currWorkout: WorkoutType };
};

export type WorkoutActionType =
  | WorkoutModCurrentDayPropertyActionType
  | WorkoutFetchWorkoutsActionType
  | WorkoutModWorkoutsActionType
  | WorkoutModCurrentWorkoutPropertyActionType
  | WorkoutLoadCurrentWorkoutActionType
  | WorkoutLoadCurrentDayActionType
  | WorkoutResetCurrentWorkoutActionType
  | WorkoutResetCurrentDayActionType;
