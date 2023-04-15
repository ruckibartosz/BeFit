import { useContext } from 'react';
import { WorkoutActionContext } from '@context/workout/WorkoutActionContext';

export const useWorkoutAction = () => {
  const workoutActionCtx = useContext(WorkoutActionContext);
  if (!workoutActionCtx) {
    throw new Error('Component beyond WorkoutActionContext!');
  }

  return workoutActionCtx;
};
