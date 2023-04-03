import React from 'react';
import { IonButton } from '@ionic/react';

import { Page } from '@components/Page';
import { exerciseUserSampleArr } from '@constants/exerciseSample';
import ExerciseModal from '@components/ExerciseModal/ExerciseModal';
import { ExerciseType } from '../../../types/exercise.type';

type DayDetailsExercisesSectionsProps = {
  isModalOpen: boolean;
  onModalCloseClick: () => void;
  onAddExerciseButtonClick: () => void;
  onSelectedExercisesChange: (exercise: ExerciseType[]) => void;
};

const DayDetailsExercisesSections: React.FC<
  DayDetailsExercisesSectionsProps
> = ({
  isModalOpen,
  onModalCloseClick,
  onAddExerciseButtonClick,
  onSelectedExercisesChange,
}) => {
  return (
    <Page.Section title='Exercise' subTitle='Your exercise'>
      <IonButton onClick={onAddExerciseButtonClick}>Add Exercise</IonButton>
      <ExerciseModal
        isOpen={isModalOpen}
        userSelect={exerciseUserSampleArr}
        onCloseButtonClick={onModalCloseClick}
        onChange={onSelectedExercisesChange}
      />
    </Page.Section>
  );
};

export default DayDetailsExercisesSections;
