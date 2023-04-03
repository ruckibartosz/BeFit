import React, { useState, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import { ExerciseType } from '../../types/exercise.type';
import { exerciseSampleArr } from '@constants/exerciseSample';
import ExerciseCard from '@components/ExerciseCard/ExerciseCard';

import style from './ExerciseModal.module.scss';

type ExerciseModalProps = {
  isOpen: boolean;
  userSelect: ExerciseType[];
  onCloseButtonClick: () => void;
  onChange: (exercises: ExerciseType[]) => void;
};

const ExerciseModal: React.FC<ExerciseModalProps> = ({
  isOpen,
  userSelect,
  onCloseButtonClick,
  onChange,
}) => {
  const [selected, setSelected] = useState<ExerciseType[]>(userSelect);

  const onCardClick = (exercise: ExerciseType) => {
    const indexOfWorkout = selected.findIndex(
      (val) => val.name === exercise.name
    );

    if (indexOfWorkout !== -1) {
      const arr = selected.filter((val) => val.name !== exercise.name);
      setSelected(arr);
    } else {
      setSelected((prevState) => {
        return [...prevState, exercise];
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      onChange(selected);
    }
  }, [isOpen, onChange, selected]);

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of exercises</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={onCloseButtonClick}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div className={style.exerciseCardsContent}>
          {exerciseSampleArr.map((exercise, index) => {
            return (
              <ExerciseCard
                onClick={() => onCardClick(exercise)}
                isSelected={
                  selected.find((data) => data.name === exercise.name)
                    ? true
                    : false
                }
                key={index}
              />
            );
          })}
        </div>
      </IonContent>
    </IonModal>
  );
};

ExerciseModal.defaultProps = {
  userSelect: [],
};

export default ExerciseModal;
