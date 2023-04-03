import React from 'react';
import { useWorkoutReducer } from '@hooks/useWorkoutReducer';
import { DayType, WorkoutType } from '../types/workoutData.type';
import { WorkoutActionType } from '../types/workoutAction.type';

type WorkoutStateContextType = {
  currWorkout: WorkoutType;
  currDay: DayType;
  workouts: Array<WorkoutType>;
  dispatch: React.Dispatch<WorkoutActionType>;
};

type WorkoutStateProviderProps = {
  children: React.ReactNode;
};

export const WorkoutStateContext = React.createContext<
  WorkoutStateContextType | undefined
>(undefined);

export const WorkoutStateProvider: React.FC<WorkoutStateProviderProps> = ({
  children,
}) => {
  const [{ currWorkout, workouts, currDay }, dispatch] = useWorkoutReducer();
  return (
    <WorkoutStateContext.Provider
      value={{ currWorkout, workouts, dispatch, currDay }}
    >
      {children}
    </WorkoutStateContext.Provider>
  );
};
