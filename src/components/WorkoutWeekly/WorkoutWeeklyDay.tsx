import React, { useMemo } from 'react';
import moment from 'moment';
import { IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';

import Flex from '@components/Flex';

import style from './WorkoutWeekly.module.scss';

type WorkoutWeeklyDayProps = {
  dayDate: string;
  isActive?: boolean;
  onClick?: () => void;
};

const WorkoutWeeklyDay: React.FC<WorkoutWeeklyDayProps> = ({
  isActive,
  dayDate,
  onClick,
}) => {
  const formattedDate = useMemo(() => moment(dayDate).format('ddd'), [dayDate]);

  return (
    <button
      className={`${style.workoutWeeklyDay} ${isActive && style.active}`}
      disabled={!isActive}
      onClick={onClick}
    >
      <Flex
        style={{ height: '100%' }}
        flexDirection='column'
        alignItems='center'
        justifyContent='space-around'
        gap='15px'
      >
        <span className={style.workoutWeeklyDayDate}>{formattedDate}</span>
        {isActive ? (
          <IonIcon icon={checkmarkCircle} />
        ) : (
          <div className={style.workoutWeeklyDayDot} />
        )}
      </Flex>
    </button>
  );
};

WorkoutWeeklyDay.defaultProps = {
  isActive: false,
};

export default WorkoutWeeklyDay;
