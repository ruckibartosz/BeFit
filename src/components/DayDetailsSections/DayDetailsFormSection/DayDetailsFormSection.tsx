import React from 'react';
import { IonInput } from '@ionic/react';

import { Page } from '@components/Page';

type DayDetailsFormSectionProps = {
  dayNameVal: string;
  dayNameSetter: (ev: Event) => void;
};

const DayDetailsFormSection: React.FC<DayDetailsFormSectionProps> = ({
  dayNameVal,
  dayNameSetter,
}) => {
  return (
    <Page.Section
      title='General information'
      subTitle='Day general information'
    >
      <IonInput
        onIonChange={dayNameSetter}
        value={dayNameVal}
        placeholder='Enter name'
      />
    </Page.Section>
  );
};

export default DayDetailsFormSection;
