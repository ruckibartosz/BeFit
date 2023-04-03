import React, { useCallback } from 'react';
import moment from 'moment';

import { SessionType } from '../../types/sessionData.type';
import Flex from '@components/Flex';
import WorkoutWeeklyDay from './WorkoutWeeklyDay';

import style from './WorkoutWeekly.module.scss';

type WorkoutWeeklyProps = {
  data: Array<SessionType>;
  onDayClick?: () => void;
};

const WorkoutWeekly: React.FC<WorkoutWeeklyProps> = ({ onDayClick, data }) => {
  const renderDayOfWeek = useCallback(() => {
    const dayOfWeek: Array<React.ReactElement> = [];
    for (let i = 1; i <= 7; i++) {
      const dayDate = moment().weekday(i).format('MM/DD/YYYY');
      const hasFinishedSession = data.some(
        (session) =>
          moment(session.startTimestamp).format('MM/DD/YYYY') === dayDate
      );
      dayOfWeek.push(
        <WorkoutWeeklyDay
          dayDate={dayDate}
          isActive={hasFinishedSession}
          onClick={onDayClick}
        />
      );
    }

    return dayOfWeek;
  }, [data, onDayClick]);

  return (
    <Flex
      className={style.workoutWeekly}
      justifyContent='space-around'
      gap='5px'
    >
      {renderDayOfWeek()}
    </Flex>
  );
};

export default WorkoutWeekly;
