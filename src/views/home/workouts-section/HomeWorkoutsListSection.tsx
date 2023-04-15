import React from 'react';
import { useIonRouter } from '@ionic/react';

import { Page } from '@components/Page';
import { Workout } from '../../../types/workoutData.type';
import { useWorkoutAction } from '@hooks/actions/useWorkoutAction';
import WorkoutCard from '@components/Cards/WorkoutCard';

import style from './HomeWorkoutsListSection.module.scss';

type HomeWorkoutsListSectionProps = {
  workouts: Workout[];
};

const HomeWorkoutsListSection: React.FC<HomeWorkoutsListSectionProps> = ({
  workouts,
}) => {
  const { loadCurrWorkout } = useWorkoutAction();
  const router = useIonRouter();

  const navigateToWorkoutDetails = (id: string) => {
    loadCurrWorkout(id);
    router.push(`/workout/${id}`);
  };

  const renderWorkoutCards = () => {
    return (
      <div className={style.userWorkoutsList}>
        {workouts.map((workout) => {
          return (
            <WorkoutCard
              key={workout.id}
              onClick={() => navigateToWorkoutDetails(workout.id)}
              cardTitle={workout.name}
              cardSubtitle={workout.note}
              img='https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2021/06/GRT-weight-dumbbell-1296x728-header.jpg?w=1155&h=1528'
            />
          );
        })}
      </div>
    );
  };

  return (
    <Page.Section title={`Your workouts (${workouts.length})`}>
      {renderWorkoutCards()}
    </Page.Section>
  );
};

export default HomeWorkoutsListSection;
