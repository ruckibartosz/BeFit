import React from 'react';
import { IonButton } from '@ionic/react';

import { Page } from '@components/Page';
import DayDetailsFormSection from '@components/DayDetailsSections/DayDetailsFormSection';
import DayDetailsExercisesSections from '@components/DayDetailsSections/DayDetailsExercisesSection';
import useWorkoutViewState from '@hooks/useWorkoutViewState';
import useWorkoutViewAction from '@hooks/useWorkoutViewAction';

const DayDetails: React.FC = () => {
  const { dayName, isModalOpen, exercises } = useWorkoutViewState();
  const {
    handleOnDayNameChange,
    handleOnCloseModalButtonClick,
    handleOnAddExerciseButtonClick,
    handleOnExercisesChange,
    handleOnSaveDayClick,
  } = useWorkoutViewAction();
  return (
    <Page.Container>
      <Page.Heading title='Day details' showBackButton={true}>
        <IonButton
          onClick={() =>
            handleOnSaveDayClick({
              name: dayName,
              exercise: exercises,
              id: 'y89yuh899h98h',
            })
          }
          style={{ width: '90px' }}
          fill='outline'
        >
          Save
        </IonButton>
      </Page.Heading>
      <DayDetailsFormSection
        dayNameVal={dayName}
        dayNameSetter={handleOnDayNameChange}
      />
      <DayDetailsExercisesSections
        isModalOpen={isModalOpen}
        onModalCloseClick={handleOnCloseModalButtonClick}
        onAddExerciseButtonClick={handleOnAddExerciseButtonClick}
        onSelectedExercisesChange={handleOnExercisesChange}
      />
    </Page.Container>
  );
};

export default DayDetails;
