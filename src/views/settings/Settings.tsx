import React from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonToggle,
  IonSelectOption,
  IonInput,
  IonButton,
  useIonRouter,
} from '@ionic/react';
import { notifications, options, star } from 'ionicons/icons';

import { Page } from '@components/Page';
import { useSettingsState } from '@hooks/useSettingsState';
import { useSettingsAction } from '@hooks/useSettingsAction';

const Settings: React.FC = () => {
  const {
    playSoundUponFinish,
    showRestTimeNotification,
    notificationReminder,
    language,
    weightUnit,
    distanceUnit,
    weeklyGoal,
    sets,
  } = useSettingsState();
  const { updateSettingValue, saveSettings } = useSettingsAction();
  const router = useIonRouter();

  const onInputChange = (ev: Event) => {
    const { name, value, ariaChecked } = ev.target as HTMLInputElement;

    if (ariaChecked) {
      updateSettingValue(name, ariaChecked);
    } else {
      updateSettingValue(name, value);
    }
  };

  const onSaveSettingsButtonClick = () => {
    saveSettings();
    router.goBack();
  };

  return (
    <Page.Container>
      <Page.Heading title='Settings' showBackButton={true}>
        <IonButton onClick={onSaveSettingsButtonClick} fill='outline'>
          Save
        </IonButton>
      </Page.Heading>
      <Page.Section
        title='Notifications'
        subTitle='Apply notifications'
        icon={notifications}
      >
        <IonList>
          <IonItem>
            <IonLabel>Play sound upon finish</IonLabel>
            <IonToggle
              onIonChange={onInputChange}
              name='playSoundUponFinish'
              checked={playSoundUponFinish}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Show rest timer notification</IonLabel>
            <IonToggle
              onIonChange={onInputChange}
              name='showRestTimeNotification'
              checked={showRestTimeNotification}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Notification reminder</IonLabel>
            <IonToggle
              onIonChange={onInputChange}
              name='notificationReminder'
              checked={notificationReminder}
            />
          </IonItem>
        </IonList>
      </Page.Section>
      <Page.Section title='Default' subTitle='Default values' icon={options}>
        <IonList>
          <IonItem>
            <IonLabel>Language</IonLabel>
            <IonSelect
              onIonChange={onInputChange}
              value={language}
              name='language'
              placeholder='Select language'
            >
              <IonSelectOption value='pl'>Polish</IonSelectOption>
              <IonSelectOption value='eng'>English</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Weight unit</IonLabel>
            <IonSelect
              onIonChange={onInputChange}
              name='weightUnit'
              placeholder='Select weight unit'
              value={weightUnit}
            >
              <IonSelectOption value='kg'>Kilograms</IonSelectOption>
              <IonSelectOption value='lbs'>Pounds</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Distance unit</IonLabel>
            <IonSelect
              onIonChange={onInputChange}
              name='distanceUnit'
              placeholder='Select distance unit'
              value={distanceUnit}
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
            <IonInput
              onIonChange={onInputChange}
              name='weeklyGoal'
              value={weeklyGoal}
              type='number'
              placeholder='0'
            />
          </IonItem>
          <IonItem>
            <IonLabel>Sets</IonLabel>
            <IonInput
              onIonChange={onInputChange}
              name='sets'
              value={sets}
              type='number'
              placeholder='0'
            />
          </IonItem>
        </IonList>
      </Page.Section>
    </Page.Container>
  );
};

export default Settings;
