import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from '@ionic/react';
import { time, calendar } from 'ionicons/icons';

import Flex from '@components/Flex';

import style from './HistoryCard.module.scss';

type HistoryCardProps = {
  title: string;
  color: string;
  date: string;
  onClick: () => void;
};

const HistoryCard: React.FC<HistoryCardProps> = ({
  title,
  color,
  onClick,
  date,
}) => {
  return (
    <IonCard className={style.historyCard}>
      <IonCardHeader>
        <div
          style={{ backgroundColor: color }}
          className={style.historyCardColorTag}
        />

        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className={style.historyCardContent}>
        <Flex alignItems='center' justifyContent='space-between'>
          <div className={style.historyCardDate}>
            <div className={style.historyCardDateShort}>
              <IonIcon icon={time} />
              {date}
            </div>
            <div className={style.historyCardDateFull}>
              <IonIcon icon={calendar} />
              04/03/2023
            </div>
          </div>
          <IonButton onClick={onClick}>Check</IonButton>
        </Flex>
      </IonCardContent>
    </IonCard>
  );
};
export default HistoryCard;
