import React, { useCallback } from 'react';

import { Day, Workout } from '../../types/workoutData.type';
import { Exercise } from '../../types/exercise.type';
import { useWorkoutState } from '@hooks/states/useWorkoutState';
import useLocalStorage from '@hooks/common/useLocalStorage';

type WorkoutActionContextType = {
  resetState: () => void;
  updateWorkout: (id: string) => void;
  updateDay: (id: string) => void;
  deleteDay: (id: string) => void;
  deleteWorkout: (id: string) => void;
  addCurrWorkout: () => void;
  addCurrDay: () => void;
  loadCurrWorkout: (id: string) => void;
  loadCurrDay: (id: string) => void;
  updateCurrWorkoutProperty: (property: string, value: Day[] | string) => void;
  updateCurrDayProperty: (property: string, value: Exercise[] | string) => void;
};

type WorkoutActionProviderProps = {
  children: React.ReactNode;
};

export const WorkoutActionContext = React.createContext<
  WorkoutActionContextType | undefined
>(undefined);

export const WorkoutActionProvider: React.FC<WorkoutActionProviderProps> = ({
  children,
}) => {
  const { currWorkout, workouts, dispatch, currDay } = useWorkoutState();
  const [, setLocalStorageValue] = useLocalStorage<Workout[]>('workouts');

  const resetCurrWorkoutState = useCallback(() => {
    dispatch({ type: 'RESET_CURR_WORKOUT' });
  }, [dispatch]);

  const resetCurrDayState = useCallback(() => {
    dispatch({ type: 'RESET_CURR_DAY' });
  }, [dispatch]);

  const resetState = useCallback(() => {
    resetCurrWorkoutState();
    resetCurrDayState();
  }, []);

  const updateWorkout = useCallback(
    (id: string) => {
      const indexOfWorkout = workouts.findIndex((workout) => workout.id === id);
      if (indexOfWorkout !== -1) {
        const updatedWorkouts = workouts;
        updatedWorkouts[indexOfWorkout] = currWorkout;
        dispatch({
          type: 'MOD_WORKOUTS',
          payload: { workouts: updatedWorkouts },
        });
        setLocalStorageValue(updatedWorkouts);
      }
    },
    [currWorkout, dispatch, setLocalStorageValue, workouts]
  );

  const updateCurrWorkoutProperty = useCallback(
    (property: string, value: Day[] | string) => {
      dispatch({
        type: 'MOD_CURR_WORKOUT_PROPERTY',
        payload: { property, value },
      });
    },
    [dispatch]
  );

  const updateDay = useCallback(
    (id: string) => {
      const { days } = currWorkout;
      const indexOfDay = days.findIndex((day: Day) => day.id === id);
      if (indexOfDay !== -1) {
        const updatedDays = days;
        updatedDays[indexOfDay] = currDay;
        dispatch({
          type: 'MOD_CURR_WORKOUT_PROPERTY',
          payload: { property: 'days', value: updatedDays },
        });
        resetCurrDayState();
      }
    },
    [currDay, currWorkout, dispatch, resetCurrDayState]
  );

  const updateCurrDayProperty = useCallback(
    (property: string, value: Exercise[] | string) => {
      dispatch({ type: 'MOD_CURR_DAY_PROPERTY', payload: { property, value } });
    },
    [dispatch]
  );

  const deleteDay = useCallback(
    (id: string) => {
      const { days } = currWorkout;
      const updatedDaysArray = days.filter((day: Day) => day.id != id);

      dispatch({
        type: 'MOD_CURR_WORKOUT_PROPERTY',
        payload: { property: 'days', value: updatedDaysArray },
      });
    },
    [currWorkout, dispatch]
  );

  const deleteWorkout = useCallback(
    (id: string) => {
      const updatedWorkoutsArray = workouts.filter(
        (workout: Workout) => workout.id != id
      );
      dispatch({
        type: 'MOD_WORKOUTS',
        payload: { workouts: updatedWorkoutsArray },
      });
      setLocalStorageValue(updatedWorkoutsArray);
    },
    [dispatch, setLocalStorageValue, workouts]
  );

  const addCurrWorkout = useCallback(() => {
    const updatedWorkoutsArray = [...workouts, currWorkout];
    dispatch({
      type: 'MOD_WORKOUTS',
      payload: { workouts: updatedWorkoutsArray },
    });
    resetCurrWorkoutState();
    setLocalStorageValue(updatedWorkoutsArray);
  }, [
    currWorkout,
    dispatch,
    resetCurrWorkoutState,
    setLocalStorageValue,
    workouts,
  ]);

  const addCurrDay = useCallback(() => {
    const { days } = currWorkout;
    const updatedDaysArray = [...days, currDay];

    dispatch({
      type: 'MOD_CURR_WORKOUT_PROPERTY',
      payload: { property: 'days', value: updatedDaysArray },
    });

    resetCurrDayState();
  }, [currDay, currWorkout, dispatch, resetCurrDayState]);

  const loadCurrWorkout = useCallback(
    (id: string) => {
      const workout = workouts.find((workout) => workout.id === id);
      if (workout) {
        dispatch({
          type: 'LOAD_CURR_WORKOUT',
          payload: { currWorkout: workout },
        });
      } else {
        throw new Error('Wrong workout id');
      }
    },
    [dispatch, workouts]
  );

  const loadCurrDay = useCallback(
    (id: string) => {
      const { days } = currWorkout;
      const day = days.find((day: Day) => day.id === id);
      if (day) {
        dispatch({
          type: 'LOAD_CURR_DAY',
          payload: { currDay: day },
        });
      } else {
        throw new Error('Wrong day id');
      }
    },
    [currWorkout, dispatch]
  );

  const actionsContext = {
    updateWorkout,
    updateDay,
    updateCurrWorkoutProperty,
    updateCurrDayProperty,
    deleteDay,
    deleteWorkout,
    addCurrWorkout,
    addCurrDay,
    loadCurrWorkout,
    loadCurrDay,
    resetState,
  };

  return (
    <WorkoutActionContext.Provider value={actionsContext}>
      {children}
    </WorkoutActionContext.Provider>
  );
};
