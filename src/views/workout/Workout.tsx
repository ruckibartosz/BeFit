/* eslint-disable */
import React from 'react';
import { IonButton, useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';

import { Page } from '@components/Page';
import { useWorkoutAction } from '@hooks/useWorkoutAction';
import { useWorkoutState } from '@hooks/useWorkoutState';
import WorkoutFormSection from '@components/WorkoutSections/WorkoutFormSection';
import WorkoutDaysSection from '@components/WorkoutSections/WorkoutDaysSection';
import FabWorkoutButton from '@components/FabWorkoutButton';

const CreateWorkout: React.FC = () => {
  const { currWorkout } = useWorkoutState();
  const { workoutParam } = useParams<{ workoutParam: string }>();
  const { name, note, days } = currWorkout;
  const { updateCurrWorkoutProperty, addCurrWorkout, updateWorkout, loadCurrDay } = useWorkoutAction();
  const router = useIonRouter();
  const isInCreateMode = workoutParam === 'create' ? true : false;

  const handleWorkoutFormChange = (ev: Event) => {
    const { name, value } = ev.target as HTMLInputElement;
    updateCurrWorkoutProperty(name, value);
  };

  const handleOnCreateDayClick = () => router.push('/day-details/create');

  const handleOnSaveWorkoutClick = () => {
    if (workoutParam === 'create') {
      addCurrWorkout();
    } else {
      updateWorkout(workoutParam);
    }
    router.goBack();
  };

  const handleOnDayCardClick = (id: string) => {
    loadCurrDay(id);
    router.push(`/day-details/${id}`);
  }

  return (
    <Page.Container>
      <Page.Heading title='Workout' showBackButton={true}>
        <IonButton onClick={handleOnSaveWorkoutClick} fill='outline'>
          Save
        </IonButton>
      </Page.Heading>
      <WorkoutFormSection
        generalName={name}
        generalNote={note}
        onFormChange={handleWorkoutFormChange}
      />
      <WorkoutDaysSection
        days={days}
        onCreateDayClick={handleOnCreateDayClick}
        onDayCardClick={handleOnDayCardClick}
      />
      {!isInCreateMode && <FabWorkoutButton />}
    </Page.Container>
  );
};

export default CreateWorkout;
