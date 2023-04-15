import React from 'react';
import { IonInput } from '@ionic/react';

import { Page } from '@components/Page';

type DayDetailsFormSectionProps = {
  nameVal: string;
  onDayDetailsFormChange: (ev: Event) => void;
};

const DayDetailsFormSection: React.FC<DayDetailsFormSectionProps> = ({
  nameVal,
  onDayDetailsFormChange,
}) => {
  return (
    <Page.Section
      title='General information'
      subTitle='Day general information'
    >
      <IonInput
        name='name'
        onIonChange={onDayDetailsFormChange}
        value={nameVal}
        placeholder='Enter name'
      />
    </Page.Section>
  );
};

export default DayDetailsFormSection;
