import React from 'react';
import { IonButton, useIonRouter } from '@ionic/react';

import { Page } from '@components/Page';
import { useSettingsAction } from '@hooks/actions/useSettingsAction';
import NotificationsSection from './notifications-section/NotificationsSection';
import DefaultsSection from './defaults-section/DefaultsSection';
import GoalsSection from './goals-section/GoalsSection';

const Settings: React.FC = () => {
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
      <NotificationsSection onSectionValueChange={onInputChange} />
      <DefaultsSection onSectionValueChange={onInputChange} />
      <GoalsSection onSectionValueChange={onInputChange} />
    </Page.Container>
  );
};

export default Settings;
