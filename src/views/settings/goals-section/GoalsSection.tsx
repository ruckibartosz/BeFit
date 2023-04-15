import React from 'react';
import { IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import { star } from 'ionicons/icons';

import { Page } from '@components/Page';
import { useSettingsState } from '@hooks/states/useSettingsState';

type GoalsSectionProps = {
  onSectionValueChange: (ev: Event) => void;
};

const GoalsSection: React.FC<GoalsSectionProps> = ({
  onSectionValueChange,
}) => {
  const { weeklyGoal, sets } = useSettingsState();

  return (
    <Page.Section title='Goals' subTitle='Set goals' icon={star}>
      <IonList>
        <IonItem>
          <IonLabel>Weekly goals</IonLabel>
          <IonInput
            aria-label='Custom input'
            style={{ textAlign: 'right' }}
            onIonChange={onSectionValueChange}
            name='weeklyGoal'
            value={weeklyGoal}
            type='number'
            placeholder='0'
            min={0}
            max={10}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Sets</IonLabel>
          <IonInput
            style={{ textAlign: 'right' }}
            onIonChange={onSectionValueChange}
            name='sets'
            value={sets}
            type='number'
            placeholder='0'
            min={2}
          />
        </IonItem>
      </IonList>
    </Page.Section>
  );
};

export default GoalsSection;
