import React from 'react';
import { IonButton } from '@ionic/react';

import { Page } from '@components/Page';
import useWorkoutViewState from '@hooks/useWorkoutViewState';
import useWorkoutViewAction from '@hooks/useWorkoutViewAction';
import WorkoutFormSection from '@components/WorkoutSections/WorkoutFormSection';
import WorkoutDaysSection from '@components/WorkoutSections/WorkoutDaysSection';
import { useWorkoutState } from '@hooks/useWorkoutState';

const CreateWorkout: React.FC = () => {
  const { generalName, generalNote } = useWorkoutViewState();
  const [{ days }] = useWorkoutState();
  const {
    handleOnGeneralNameChange,
    handleOnGeneralNoteChange,
    handleCreateNewDay,
    handleLoadCurrentDay,
    handleUpdateGeneralState,
  } = useWorkoutViewAction();

  return (
    <Page.Container>
      <Page.Heading title='Workout' showBackButton={true}>
        <IonButton
          onClick={() => handleUpdateGeneralState(generalName, generalNote)}
          style={{ width: '90px' }}
          fill='outline'
        >
          Save
        </IonButton>
      </Page.Heading>
      <WorkoutFormSection
        generalNameVal={generalName}
        generalNoteVal={generalNote}
        generalNameSetter={handleOnGeneralNameChange}
        generalNoteSetter={handleOnGeneralNoteChange}
      />
      <WorkoutDaysSection
        days={days}
        handleOnDayCardClick={handleLoadCurrentDay}
        handleCreateNewDayButtonClick={handleCreateNewDay}
      />
    </Page.Container>
  );
};

export default CreateWorkout;
