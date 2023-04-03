import { DayType, WorkoutType } from '../types/workoutData.type';
import React, { useCallback } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import { WorkoutActionType } from '../types/workoutAction.type';
import { useWorkoutState } from '@hooks/useWorkoutState';

type WorkoutActionContextType = {
  dispatch: React.Dispatch<WorkoutActionType>;
  loadWorkouts: () => void;
  loadCurrWorkout: (workoutId: string) => void;
  updateCurrWorkoutGeneralState: (name: string, note: string) => void;
  updateCurrDayState: (day: DayType) => void;
  updateCurrWorkoutDayState: (day: DayType, dayId: string) => void;
  addCurrWorkoutDayState: (day: DayType) => void;
  addCurrentWorkout: () => void;
  deleteCurrWorkoutDayState: (dayId: string) => void;
  deleteWorkoutState: (workoutId: string) => void;
  getDayByIndex: (dayId: string) => DayType | undefined;
  resetCurrWorkout: () => void;
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
  const [currWorkout, workouts, dispatch] = useWorkoutState();
  const [, setLocalStorageValue] =
    useLocalStorage<Array<WorkoutType>>('workouts');

  const updateCurrWorkoutGeneralState = (name: string, note: string) =>
    dispatch({ type: 'MOD_GENERAL', payload: { name, note } });

  const updateCurrWorkoutDayState = (day: DayType, dayId: string) => {
    const { days: stateDays } = currWorkout;

    const indexOfDay = stateDays.findIndex((day: DayType) => day.id === dayId);
    if (indexOfDay === -1 && dayId !== '') return console.error('wrong id');

    stateDays[indexOfDay] = day;
    dispatch({ type: 'MOD_DAYS', payload: { days: stateDays } });
  };

  const updateCurrDayState = useCallback(
    (day: DayType) => {
      dispatch({ type: 'MOD_CURR_DAY', payload: { day } });
    },
    [dispatch]
  );

  const addCurrWorkoutDayState = (day: DayType) => {
    const { days } = currWorkout;
    const stateDays = [...days, day];
    dispatch({ type: 'MOD_DAYS', payload: { days: stateDays } });
  };

  const loadWorkouts = useCallback(() => {
    if (workouts?.length) {
      dispatch({ type: 'MOD_WORKOUTS', payload: { workouts } });
    }
  }, [dispatch, workouts]);

  const loadCurrWorkout = (workoutId: string) => {
    const workout = workouts?.find((workout) => workout.id === workoutId);
    if (workout) {
      dispatch({
        type: 'MOD_CURR_WORKOUT',
        payload: { workout },
      });
    }
  };

  const addCurrentWorkout = () => {
    const arr = [...workouts, currWorkout];

    setLocalStorageValue(arr);

    dispatch({ type: 'MOD_WORKOUTS', payload: { workouts: arr } });
  };

  const deleteCurrWorkoutDayState = useCallback(
    (dayId: string) => {
      const { days: stateDays } = currWorkout;

      const indexOfDay = stateDays.findIndex(
        (day: DayType) => day.id === dayId
      );
      if (indexOfDay === -1) return console.error('wrong id');

      const arr = stateDays.filter((day: DayType) => day.id != dayId);

      dispatch({ type: 'MOD_DAYS', payload: { days: arr } });
    },
    [dispatch, currWorkout]
  );

  const deleteWorkoutState = useCallback(
    (workoutId: string) => {
      const indexOfWorkout = workouts?.findIndex(
        (workout: WorkoutType) => workout.id === workoutId
      );

      if (indexOfWorkout === -1) return console.error('wrong id');

      const arr = workouts?.filter(
        (workout: WorkoutType) => workout.id != workoutId
      );
      if (arr === undefined) {
        console.error('could not update values');
        return false;
      }

      dispatch({ type: 'MOD_WORKOUTS', payload: { workouts: arr } });
    },
    [dispatch, workouts]
  );

  const getDayByIndex = useCallback(
    (dayId: string): DayType | undefined => {
      const { days } = currWorkout;
      const day: DayType | undefined = days.find(
        (day: DayType) => day.id === dayId
      );

      if (day) {
        return day;
      }

      return undefined;
    },
    [currWorkout]
  );

  const resetCurrWorkout = useCallback(() => {
    const defaultCurrWorkout: WorkoutType = {
      id: '',
      name: '',
      note: '',
      days: [],
    };
    dispatch({
      type: 'MOD_CURR_WORKOUT',
      payload: { workout: defaultCurrWorkout },
    });
  }, [dispatch]);

  const actions = {
    dispatch,
    loadWorkouts,
    loadCurrWorkout,
    updateCurrWorkoutGeneralState,
    updateCurrWorkoutDayState,
    addCurrWorkoutDayState,
    addCurrentWorkout,
    deleteCurrWorkoutDayState,
    deleteWorkoutState,
    getDayByIndex,
    resetCurrWorkout,
    updateCurrDayState,
  };

  return (
    <WorkoutActionContext.Provider value={actions}>
      {children}
    </WorkoutActionContext.Provider>
  );
};
