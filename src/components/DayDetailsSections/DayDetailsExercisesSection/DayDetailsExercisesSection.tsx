import React from 'react';
import { IonButton } from '@ionic/react';

import { Page } from '@components/Page';
import ExerciseModal from '@components/ExerciseModal/ExerciseModal';

const DayDetailsExercisesSections: React.FC = () => {
  return (
    <Page.Section title='Exercise' subTitle='Your exercise'>
      <IonButton>Add Exercise</IonButton>
      <ExerciseModal />
    </Page.Section>
  );
};

export default DayDetailsExercisesSections;
