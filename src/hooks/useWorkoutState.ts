import { useContext } from 'react';
import { WorkoutStateContext } from '@context/WorkoutStateContext';

export const useWorkoutState = () => {
  const workoutStateCtx = useContext(WorkoutStateContext);
  if (!workoutStateCtx) {
    throw new Error('Component beyond WorkoutStateContext!');
  }

  const currWorkout = workoutStateCtx.currWorkout;
  const workouts = workoutStateCtx.workouts;
  const dispatch = workoutStateCtx.dispatch;
  const currDay = workoutStateCtx.currDay;

  return [currWorkout, workouts, dispatch, currDay] as const;
};