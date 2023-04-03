import React, { useEffect, useReducer } from 'react';

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

      case 'MOD_CURR_WORKOUT': {
        const { workout } = action.payload;
        return { ...state, currWorkout: workout };
      }

      case 'MOD_CURR_DAY': {
        const { day } = action.payload;
        return { ...state, currDay: day };
      }

      case 'MOD_WORKOUTS': {
        const { workouts } = action.payload;
        return { ...state, workouts, initialized: true };
      }

      case 'MOD_GENERAL': {
        const { name, note } = action.payload;
        return { ...state, currWorkout: { ...state.currWorkout, name, note } };
      }

      case 'MOD_DAYS': {
        const { days } = action.payload;
        return {
          ...state,
          currWorkout: {
            ...state.currWorkout,
            days,
          },
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(workoutReducer, {
    currWorkout: {
      id: '',
      name: '',
      note: '',
      days: [],
    },
    currDay: {
      id: '',
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
