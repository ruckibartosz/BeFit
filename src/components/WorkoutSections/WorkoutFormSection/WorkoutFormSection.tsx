import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';

import { Page } from '@components/Page';

type WorkoutFormSectionProps = {
  generalNameVal: string;
  generalNoteVal: string;
  generalNameSetter: (ev: Event) => void;
  generalNoteSetter: (ev: Event) => void;
};

const WorkoutFormSection: React.FC<WorkoutFormSectionProps> = ({
  generalNameVal,
  generalNoteVal,
  generalNoteSetter,
  generalNameSetter,
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
            onIonChange={generalNameSetter}
            value={generalNameVal}
            placeholder='Enter name'
          />
        </IonItem>
        <IonItem>
          <IonInput
            onIonChange={generalNoteSetter}
            value={generalNoteVal}
            placeholder='Enter note (optional)'
          />
        </IonItem>
      </IonList>
    </Page.Section>
  );
};

export default WorkoutFormSection;
