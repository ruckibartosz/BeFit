import React from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import { exerciseSampleArr } from '@constants/exerciseSample';
import ExerciseCard from '@components/ExerciseCard/ExerciseCard';

import style from './ExerciseModal.module.scss';

const ExerciseModal: React.FC = () => {
  return (
    <IonModal>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of exercises</IonTitle>
          <IonButtons slot='end'>
            <IonButton>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div className={style.exerciseCardsContent}>
          {exerciseSampleArr.map((exercise, index) => {
            return (
              <ExerciseCard
                onClick={() => console.log('clicked')}
                isSelected={true}
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
