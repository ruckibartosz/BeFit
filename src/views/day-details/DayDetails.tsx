import React from 'react';
import { IonButton, useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';

import { Page } from '@components/Page';
import { useWorkoutState } from '@hooks/states/useWorkoutState';
import { useWorkoutAction } from '@hooks/actions/useWorkoutAction';
import DayDetailsFormSection from './form-section';
import DayDetailsExercisesSections from './exercises-section';

const DayDetails: React.FC = () => {
  const { currDay } = useWorkoutState();
  const { updateCurrDayProperty, addCurrDay, updateDay } = useWorkoutAction();
  const { name } = currDay;
  const { dayParam } = useParams<{ dayParam: string }>();
  const router = useIonRouter();

  const handleOnDayDetailsFormChange = (ev: Event) => {
    const { name, value } = ev.target as HTMLInputElement;
    updateCurrDayProperty(name, value);
  };

  const handleOnSaveDayButtonClick = () => {
    if (dayParam === 'create') {
      addCurrDay();
    } else {
      updateDay(dayParam);
    }
    router.goBack();
  };

  return (
    <Page.Container>
      <Page.Heading title='Day details' showBackButton={true}>
        <IonButton onClick={handleOnSaveDayButtonClick} fill='outline'>
          Save
        </IonButton>
      </Page.Heading>
      <DayDetailsFormSection
        nameVal={name}
        onDayDetailsFormChange={handleOnDayDetailsFormChange}
      />
      <DayDetailsExercisesSections />
    </Page.Container>
  );
};

export default DayDetails;
