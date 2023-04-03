import React, { useCallback } from 'react';

import { ExerciseType } from '../types/exercise.type';
import { useWorkoutAction } from '@hooks/useWorkoutAction';
import { useWorkoutState } from '@hooks/useWorkoutState';
import { DayType } from '../types/workoutData.type';
import { useIonRouter } from '@ionic/react';
import useWorkoutViewState from '@hooks/useWorkoutViewState';

type WorkoutViewActionContextType = {
  handleOnGeneralNameChange: (ev: Event) => void;
  handleOnGeneralNoteChange: (ev: Event) => void;
  handleOnExercisesChange: (exercises: ExerciseType[]) => void;
  handleOnDayNameChange: (ev: Event) => void;
  handleOnSaveDayClick: (day: DayType) => void;
  handleOnWorkoutSave: (name: string, note: string) => void;
  handleLoadCurrentDay: (dayId: string) => void;
  handleCreateNewDay: () => void;
  handleOnAddExerciseButtonClick: () => void;
  handleOnCloseModalButtonClick: () => void;
  handleUpdateGeneralState: (name: string, note: string) => void;
};

type WorkoutViewActionProviderProps = {
  children: React.ReactNode;
};

export const WorkoutViewActionContext = React.createContext<
  WorkoutViewActionContextType | undefined
>(undefined);

export const WorkoutViewActionProvider: React.FC<
  WorkoutViewActionProviderProps
> = ({ children }) => {
  const {
    setGeneralName,
    setGeneralNote,
    setExercises,
    setDayName,
    setIsModalOpen,
  } = useWorkoutViewState();

  const {
    addCurrentWorkout,
    addCurrWorkoutDayState,
    updateCurrWorkoutGeneralState,
    updateCurrDayState,
  } = useWorkoutAction();

  const [currWorkout] = useWorkoutState();
  const router = useIonRouter();

  const handleOnGeneralNameChange = useCallback(
    (ev: Event) => {
      setGeneralName((ev.target as HTMLInputElement).value);
    },
    [setGeneralName]
  );

  const handleOnGeneralNoteChange = useCallback(
    (ev: Event) => {
      setGeneralNote((ev.target as HTMLInputElement).value);
    },
    [setGeneralNote]
  );

  const handleOnExercisesChange = useCallback(
    (exercises: ExerciseType[]) => {
      setExercises(exercises);
    },
    [setExercises]
  );

  const handleOnDayNameChange = useCallback(
    (ev: Event) => {
      setDayName((ev.target as HTMLInputElement).value);
    },
    [setDayName]
  );

  const handleOnSaveDayClick = useCallback(
    (day: DayType) => {
      addCurrWorkoutDayState(day);
      router.goBack();
    },
    [addCurrWorkoutDayState]
  );

  const handleOnWorkoutSave = useCallback(
    (name: string, note: string) => {
      updateCurrWorkoutGeneralState(name, note);
      addCurrentWorkout();
    },
    [addCurrentWorkout, updateCurrWorkoutGeneralState]
  );

  const handleOnAddExerciseButtonClick = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleOnCloseModalButtonClick = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleUpdateGeneralState = useCallback(
    (name: string, note: string) => {
      updateCurrWorkoutGeneralState(name, note);
    },
    [updateCurrWorkoutGeneralState]
  );

  const handleCreateNewDay = useCallback(() => {
    setDayName('');
    setExercises([]);
    router.push('/day-details/create');
  }, [setDayName, setExercises, router]);

  const handleLoadCurrentDay = useCallback(
    (dayId: string) => {
      const { days } = currWorkout;

      const day = days.find((day: DayType) => day.id === dayId);
      if (!day) throw new Error('can not find day by this id');
      updateCurrDayState(day);

      router.push(`/day-details/${dayId}`);
    },
    [currWorkout, updateCurrDayState, router]
  );

  const contextValues = {
    handleOnGeneralNameChange,
    handleOnGeneralNoteChange,
    handleOnExercisesChange,
    handleOnDayNameChange,
    handleOnSaveDayClick,
    handleOnWorkoutSave,
    handleLoadCurrentDay,
    handleCreateNewDay,
    handleOnAddExerciseButtonClick,
    handleOnCloseModalButtonClick,
    handleUpdateGeneralState,
  };

  return (
    <WorkoutViewActionContext.Provider value={contextValues}>
      {children}
    </WorkoutViewActionContext.Provider>
  );
};
