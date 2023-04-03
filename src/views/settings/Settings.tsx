import React from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonToggle,
  IonSelectOption,
  IonInput,
} from '@ionic/react';
import { notifications, options, star } from 'ionicons/icons';

import { Page } from '@components/Page';

const Settings: React.FC = () => {
  return (
    <Page.Container>
      <Page.Heading title='Settings' showBackButton={true} />
      <Page.Section
        title='Notifications'
        subTitle='Apply notifications'
        icon={notifications}
      >
        <IonList>
          <IonItem>
            <IonLabel>Play sound upon finish</IonLabel>
            <IonToggle />
          </IonItem>
          <IonItem>
            <IonLabel>Show rest timer notification</IonLabel>
            <IonToggle />
          </IonItem>
          <IonItem>
            <IonLabel>Notification reminder</IonLabel>
            <IonToggle />
          </IonItem>
        </IonList>
      </Page.Section>
      <Page.Section title='Default' subTitle='Default values' icon={options}>
        <IonList>
          <IonItem>
            <IonLabel>Language</IonLabel>
            <IonSelect aria-label='fruit' placeholder='Select language'>
              <IonSelectOption value='pl'>Polish</IonSelectOption>
              <IonSelectOption value='eng'>English</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Weight unit</IonLabel>
            <IonSelect
              aria-label='weight-unit'
              placeholder='Select weight unit'
            >
              <IonSelectOption value='kg'>Kilograms</IonSelectOption>
              <IonSelectOption value='lbs'>Pounds</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Distance unit</IonLabel>
            <IonSelect
              aria-label='distance-unit'
              placeholder='Select distance unit'
            >
              <IonSelectOption value='km'>Kilometers</IonSelectOption>
              <IonSelectOption value='mi'>Miles</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </Page.Section>
      <Page.Section title='Goals' subTitle='Set goals' icon={star}>
        <IonList>
          <IonItem>
            <IonLabel>Weekly goals</IonLabel>
            <IonInput value={4} type='number' placeholder='0' />
          </IonItem>
          <IonItem>
            <IonLabel>Sets</IonLabel>
            <IonInput type='number' placeholder='0' />
          </IonItem>
        </IonList>
      </Page.Section>
    </Page.Container>
  );
};

export default Settings;
