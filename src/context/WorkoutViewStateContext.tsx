import React, { useState } from 'react';
import { ExerciseType } from '../types/exercise.type';

import { useWorkoutState } from '@hooks/useWorkoutState';

type WorkoutViewStateContextType = {
  generalName: string;
  generalNote: string;
  exercises: Array<ExerciseType>;
  dayName: string;
  isModalOpen: boolean;
  setGeneralName: React.Dispatch<React.SetStateAction<string>>;
  setGeneralNote: React.Dispatch<React.SetStateAction<string>>;
  setExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
  setDayName: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type WorkoutViewStateProviderProps = {
  children: React.ReactNode;
};

export const WorkoutViewStateContext = React.createContext<
  WorkoutViewStateContextType | undefined
>(undefined);

export const WorkoutViewStateProvider: React.FC<
  WorkoutViewStateProviderProps
> = ({ children }) => {
  const [{ name, note }, , , currDay] = useWorkoutState();
  const [generalName, setGeneralName] = useState<string>(name);
  const [generalNote, setGeneralNote] = useState<string>(note);
  const [dayName, setDayName] = useState<string>(currDay.name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exercises, setExercises] = useState<Array<ExerciseType>>(
    currDay.exercise
  );

  const contextValues = {
    generalName,
    setGeneralName,
    generalNote,
    setGeneralNote,
    exercises,
    setExercises,
    dayName,
    setDayName,
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <WorkoutViewStateContext.Provider value={contextValues}>
      {children}
    </WorkoutViewStateContext.Provider>
  );
};
