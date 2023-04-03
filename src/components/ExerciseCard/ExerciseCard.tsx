import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import style from './ExerciseCard.module.scss';

type ExerciseProps = {
  key?: number | string;
  isSelected?: boolean;
  onClick?: () => void;
};

const ExerciseCard: React.FC<ExerciseProps> = ({
  key,
  isSelected,
  onClick,
}) => {
  return (
    <IonCard
      onClick={onClick}
      key={key}
      className={`${style.exerciseCard} ${
        isSelected && style.exerciseCardActive
      }`}
    >
      <img
        className={style.exerciseCardImg}
        alt='Silhouette of mountains'
        src='https://assets.telegraphindia.com/telegraph/2022/Aug/1660686108_new-project-23.jpg'
      />
      <IonCardHeader>
        <IonCardTitle className={style.exerciseCardTitle}>
          Card Title
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

ExerciseCard.defaultProps = {
  isSelected: false,
};

export default ExerciseCard;
