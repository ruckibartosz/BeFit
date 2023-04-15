import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { options } from 'ionicons/icons';

import { Page } from '@components/Page';
import { useSettingsState } from '@hooks/states/useSettingsState';

type DefaultsSectionProps = {
  onSectionValueChange: (ev: Event) => void;
};

const DefaultsSection: React.FC<DefaultsSectionProps> = ({
  onSectionValueChange,
}) => {
  const { language, weightUnit, distanceUnit } = useSettingsState();

  return (
    <Page.Section title='Default' subTitle='Default values' icon={options}>
      <IonList>
        <IonItem>
          <IonLabel>Language</IonLabel>
          <IonSelect
            onIonChange={onSectionValueChange}
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
            onIonChange={onSectionValueChange}
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
            onIonChange={onSectionValueChange}
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
  );
};

export default DefaultsSection;
