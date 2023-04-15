import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';

type StatisticCardProps = {
  heading: string;
  value: string;
  color?: string;
  icon?: string;
};

import style from './StatisticCard.module.scss';

const StatisticCard: React.FC<StatisticCardProps> = ({
  color,
  heading,
  value,
  icon,
}) => {
  return (
    <IonCard className={style.statisticCard} color={color ? color : 'primary'}>
      <IonCardHeader>
        <IonCardTitle className={style.statisticCardHeading}>
          {heading}
          <IonIcon icon={icon} />
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent className={style.statisticCardValue}>
        {value}
      </IonCardContent>
    </IonCard>
  );
};

export default StatisticCard;
