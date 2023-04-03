import { useContext } from 'react';
import { WorkoutViewStateContext } from '@context/WorkoutViewStateContext';

const useWorkoutViewState = () => {
  const workoutViewStateCtx = useContext(WorkoutViewStateContext);
  if (!workoutViewStateCtx) {
    throw new Error('Component beyond WorkoutViewStateContext!');
  }

  return {
    ...workoutViewStateCtx,
  };
};

export default useWorkoutViewState;
