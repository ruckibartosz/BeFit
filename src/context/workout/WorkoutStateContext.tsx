import React from 'react';
import { useWorkoutReducer } from '@hooks/reducers/useWorkoutReducer';
import { Day, Workout } from '../../types/workoutData.type';
import { WorkoutActions } from '../../types/workoutAction.type';

type WorkoutStateContextType = {
  currWorkout: Workout;
  currDay: Day;
  workouts: Workout[];
  dispatch: React.Dispatch<WorkoutActions>;
  initialized: boolean;
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
  const [{ currWorkout, workouts, currDay, initialized }, dispatch] =
    useWorkoutReducer();
  return (
    <WorkoutStateContext.Provider
      value={{ currWorkout, workouts, dispatch, currDay, initialized }}
    >
      {children}
    </WorkoutStateContext.Provider>
  );
};
