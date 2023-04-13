import React, { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DayType, WorkoutType } from '../types/workoutData.type';
import { WorkoutActionType } from '../types/workoutAction.type';
import useLocalStorage from './useLocalStorage';

type WorkoutState = {
  initialized: boolean;
  currWorkout: WorkoutType;
  currDay: DayType;
  workouts: Array<WorkoutType>;
};

export const useWorkoutReducer = (): [
  WorkoutState,
  React.Dispatch<WorkoutActionType>
] => {
  const [storageWorkouts] = useLocalStorage<Array<WorkoutType>>('workouts');

  const workoutReducer = (
    state: WorkoutState,
    action: WorkoutActionType
  ): WorkoutState => {
    switch (action.type) {
      case 'FETCH_WORKOUTS': {
        const { initialized, workouts } = action.payload;
        return { ...state, workouts, initialized };
      }

      case 'MOD_CURR_WORKOUT_PROPERTY': {
        const { property, value } = action.payload;
        return {
          ...state,
          currWorkout: { ...state.currWorkout, [property]: value },
        };
      }

      case 'LOAD_CURR_WORKOUT': {
        const { currWorkout } = action.payload;
        return {
          ...state,
          currWorkout,
        };
      }

      case 'MOD_CURR_DAY_PROPERTY': {
        const { property, value } = action.payload;
        return { ...state, currDay: { ...state.currDay, [property]: value } };
      }

      case 'LOAD_CURR_DAY': {
        const { currDay } = action.payload;
        return { ...state, currDay };
      }

      case 'MOD_WORKOUTS': {
        const { workouts } = action.payload;
        return { ...state, workouts, initialized: true };
      }

      case 'RESET_CURR_WORKOUT': {
        return {
          ...state,
          currWorkout: { id: uuidv4(), name: '', note: '', days: [] },
        };
      }

      case 'RESET_CURR_DAY': {
        return {
          ...state,
          currDay: { id: uuidv4(), name: '', exercise: [] },
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(workoutReducer, {
    currWorkout: {
      id: uuidv4(),
      name: '',
      note: '',
      days: [],
    },
    currDay: {
      id: uuidv4(),
      name: '',
      exercise: [],
    },
    workouts: [],

    initialized: false,
  });

  useEffect(() => {
    if (storageWorkouts?.length) {
      dispatch({
        type: 'FETCH_WORKOUTS',
        payload: {
          workouts: storageWorkouts,
          initialized: true,
        },
      });
    }
  }, [storageWorkouts]);

  return [state, dispatch];
};
