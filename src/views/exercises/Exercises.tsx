import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { barbellOutline } from 'ionicons/icons';

import { Page } from '@components/Page';
import ExerciseCard from '../../components/Cards/ExerciseCard';

const Exercises: React.FC = () => {
  return (
    <Page.Container>
      <Page.Heading title='Exercises' showBackButton={true} />
      <Page.Section
        title='Pick exercises'
        subTitle='You can pick as many exercises as you want'
        icon={barbellOutline}
      >
        <IonList style={{ width: 'auto' }}>
          <IonItem>
            <IonSelect placeholder='Select muscle'>
              <IonSelectOption value='apples'>Apples</IonSelectOption>
              <IonSelectOption value='oranges'>Oranges</IonSelectOption>
              <IonSelectOption value='bananas'>Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </Page.Section>
      <ExerciseCard />
      <ExerciseCard />
    </Page.Container>
  );
};

export default Exercises;
