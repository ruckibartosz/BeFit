import React from 'react';
import { IonButton, IonSpinner, useIonRouter } from '@ionic/react';

import { Page } from '@components/Page';
import WorkoutCard from '@components/WorkoutCard';
import Flex from '@components/Flex';

import style from './UserWorkoutListSection.module.scss';
import { useWorkoutState } from '@hooks/useWorkoutState';
import { useWorkoutAction } from '@hooks/useWorkoutAction';

const UserWorkoutListSection: React.FC = () => {
  const router = useIonRouter();
  const { workouts } = useWorkoutState();
  const { loadCurrWorkout } = useWorkoutAction();

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

  const renderNotFoundWorkouts = () => {
    return (
      <Flex justifyContent='center' flexDirection='column' alignItems='center'>
        <h5 className={style.userWorkoutsNotFoundHeading}>
          You have not any workouts
        </h5>
        <IonButton onClick={() => navigateToWorkoutDetails('1')}>
          Create one!
        </IonButton>
      </Flex>
    );
  };

  return (
    <Page.Section title={`Your workouts (${workouts.length})`}>
      {workouts.length ? renderWorkoutCards() : renderNotFoundWorkouts()}
    </Page.Section>
  );
};

export default UserWorkoutListSection;
