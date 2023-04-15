import React from 'react';
import { IonIcon } from '@ionic/react';
import { flag } from 'ionicons/icons';

import Flex from '@components/Flex';

import style from './WeeklyGoal.module.scss';

type WeeklyGoalProps = {
  goal: number;
  current: number;
};

const WeeklyGoal: React.FC<WeeklyGoalProps> = ({ goal, current }) => {
  if (goal) {
    return (
      <Flex
        className={style.weeklyGoal}
        gap='4px'
        alignItems='center'
        justifyContent='flex-end'
      >
        <IonIcon className={style.weeklyGoalIcon} icon={flag} />
        <span className={style.weeklyGoalBolded}>{`${current} / ${goal}`}</span>
        <span>days completed</span>
      </Flex>
    );
  }

  return null;
};

export default WeeklyGoal;
