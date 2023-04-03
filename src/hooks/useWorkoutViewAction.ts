import { useContext } from 'react';
import { WorkoutViewActionContext } from '@context/WorkoutViewActionContext';

const useWorkoutViewAction = () => {
  const workoutViewActionCtx = useContext(WorkoutViewActionContext);
  if (!workoutViewActionCtx) {
    throw new Error('Component beyond WorkoutViewActionContext!');
  }

  return {
    ...workoutViewActionCtx,
  };
};

export default useWorkoutViewAction;
