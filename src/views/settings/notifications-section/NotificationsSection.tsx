import React from 'react';
import { IonToggle, IonList, IonItem, IonLabel } from '@ionic/react';
import { notifications } from 'ionicons/icons';

import { Page } from '@components/Page';
import { useSettingsState } from '@hooks/states/useSettingsState';

type NotificationsSectionProps = {
  onSectionValueChange: (ev: Event) => void;
};

const NotificationsSection: React.FC<NotificationsSectionProps> = ({
  onSectionValueChange,
}) => {
  const {
    playSoundUponFinish,
    showRestTimeNotification,
    notificationReminder,
  } = useSettingsState();

  return (
    <Page.Section
      title='Notifications'
      subTitle='Apply notifications'
      icon={notifications}
    >
      <IonList>
        <IonItem>
          <IonLabel>Play sound upon finish</IonLabel>
          <IonToggle
            onIonChange={onSectionValueChange}
            name='playSoundUponFinish'
            checked={playSoundUponFinish}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Show rest timer notification</IonLabel>
          <IonToggle
            onIonChange={onSectionValueChange}
            name='showRestTimeNotification'
            checked={showRestTimeNotification}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Notification reminder</IonLabel>
          <IonToggle
            onIonChange={onSectionValueChange}
            name='notificationReminder'
            checked={notificationReminder}
          />
        </IonItem>
      </IonList>
    </Page.Section>
  );
};

export default NotificationsSection;
