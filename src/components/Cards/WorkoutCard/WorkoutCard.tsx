import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import { chevronForward } from 'ionicons/icons';

import Flex from '@components/Flex';

import style from './WorkoutCard.module.scss';

type WorkoutCardProps = {
  key: string;
  cardTitle: string;
  cardSubtitle: string;
  img: string;
  onClick: () => void;
};

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  key,
  cardTitle,
  cardSubtitle,
  onClick,
  img,
}) => {
  return (
    <IonCard className={style.workoutCard} key={key}>
      <img
        className={style.workoutCardImg}
        alt='Silhouette of mountains'
        src={img}
      />
      <IonCardHeader className={style.workoutCardHeading}>
        <IonCardTitle className={style.workoutCardHeadingTitle}>
          {cardTitle}
        </IonCardTitle>
        <IonCardSubtitle>{cardSubtitle}</IonCardSubtitle>
        <button onClick={onClick} className={style.workoutCardHeadingButton}>
          <Flex alignItems='center' justifyContent='center'>
            <IonIcon icon={chevronForward} />
          </Flex>
        </button>
      </IonCardHeader>
    </IonCard>
  );
};

export default WorkoutCard;
