import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import style from './DayCard.module.scss';

type DayCardProps = {
  title: string;
  key?: string;
  onClick?: () => void;
};

const DayCard: React.FC<DayCardProps> = ({ title, key, onClick }) => {
  return (
    <IonCard
      key={key}
      onClick={onClick}
      color='primary'
      className={style.dayCard}
    >
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};
export default DayCard;
