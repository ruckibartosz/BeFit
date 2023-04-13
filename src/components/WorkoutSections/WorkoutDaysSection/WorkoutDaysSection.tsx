import React from 'react';
import { IonButton } from '@ionic/react';
import { today } from 'ionicons/icons';

import { Page } from '@components/Page';
import { DayType } from '../../../types/workoutData.type';
import DayCard from '@components/DayCard/DayCard';

import style from './WorkoutDaysSection.module.scss';

type WorkoutDaysSectionProps = {
  days: DayType[];
  onCreateDayClick: () => void;
  onDayCardClick: (id: string) => void;
};

const WorkoutDaysSection: React.FC<WorkoutDaysSectionProps> = ({
  days,
  onCreateDayClick,
  onDayCardClick,
}) => {
  const renderDaysOfWorkout = () => {
    return (
      <div className={style.workoutDaysSectionContent}>
        {days.map((day) => {
          return (
            <DayCard
              onClick={() => onDayCardClick(day.id)}
              key={day.id}
              title={day.name}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Page.Section
      title='Days of workout'
      subTitle='Create workout days'
      icon={today}
    >
      <div>
        <IonButton onClick={onCreateDayClick}>Create day</IonButton>
        {renderDaysOfWorkout()}
      </div>
    </Page.Section>
  );
};

export default WorkoutDaysSection;
