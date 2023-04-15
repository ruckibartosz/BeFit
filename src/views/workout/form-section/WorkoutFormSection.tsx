import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';

import { Page } from '@components/Page';

type WorkoutFormSectionProps = {
  generalName: string;
  generalNote: string;
  onFormChange: (ev: Event) => void;
};

const WorkoutFormSection: React.FC<WorkoutFormSectionProps> = ({
  generalName,
  generalNote,
  onFormChange,
}) => {
  return (
    <Page.Section
      title='General workout info'
      subTitle='Enter information about workout'
      icon={informationCircle}
    >
      <IonList>
        <IonItem>
          <IonInput
            onIonChange={onFormChange}
            name='name'
            value={generalName}
            placeholder='Enter name'
          />
        </IonItem>
        <IonItem>
          <IonInput
            onIonChange={onFormChange}
            name='note'
            value={generalNote}
            placeholder='Enter note (optional)'
          />
        </IonItem>
      </IonList>
    </Page.Section>
  );
};

export default WorkoutFormSection;
