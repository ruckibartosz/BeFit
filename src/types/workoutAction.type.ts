import { Exercise } from './exercise.type';
import { Day, Workout } from './workoutData.type';

export type WorkoutFetchWorkoutsActionType = {
  type: 'FETCH_WORKOUTS';
  payload: { workouts: Workout[]; initialized: boolean };
};

export type WorkoutModWorkoutsActionType = {
  type: 'MOD_WORKOUTS';
  payload: { workouts: Workout[] };
};

export type WorkoutModCurrentWorkoutPropertyActionType = {
  type: 'MOD_CURR_WORKOUT_PROPERTY';
  payload: { property: string; value: string | Day[] };
};

export type WorkoutModCurrentDayPropertyActionType = {
  type: 'MOD_CURR_DAY_PROPERTY';
  payload: { property: string; value: string | Exercise[] };
};

export type WorkoutResetCurrentWorkoutActionType = {
  type: 'RESET_CURR_WORKOUT';
};

export type WorkoutResetCurrentDayActionType = {
  type: 'RESET_CURR_DAY';
};

export type WorkoutLoadCurrentDayActionType = {
  type: 'LOAD_CURR_DAY';
  payload: { currDay: Day };
};

export type WorkoutLoadCurrentWorkoutActionType = {
  type: 'LOAD_CURR_WORKOUT';
  payload: { currWorkout: Workout };
};

export type WorkoutActions =
  | WorkoutModCurrentDayPropertyActionType
  | WorkoutFetchWorkoutsActionType
  | WorkoutModWorkoutsActionType
  | WorkoutModCurrentWorkoutPropertyActionType
  | WorkoutLoadCurrentWorkoutActionType
  | WorkoutLoadCurrentDayActionType
  | WorkoutResetCurrentWorkoutActionType
  | WorkoutResetCurrentDayActionType;
