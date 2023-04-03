import React from 'react';
import { IonButton } from '@ionic/react';
import { today } from 'ionicons/icons';

import { Page } from '@components/Page';
import { DayType } from '../../../types/workoutData.type';
import DayCard from '@components/DayCard';

import style from './WorkoutDaysSection.module.scss';

type WorkoutDaysSectionProps = {
  days: Array<DayType>;
  handleOnDayCardClick: (dayId: string) => void;
  handleCreateNewDayButtonClick: () => void;
};

const WorkoutDaysSection: React.FC<WorkoutDaysSectionProps> = ({
  days,
  handleCreateNewDayButtonClick,
  handleOnDayCardClick,
}) => {
  const renderDaysOfWorkout = () => {
    return (
      <div className={style.workoutDaysSectionContent}>
        {days.length > 0 &&
          days.map((day) => {
            return (
              <DayCard
                onClick={() => handleOnDayCardClick(day.id)}
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
        <IonButton onClick={handleCreateNewDayButtonClick}>
          Create day
        </IonButton>
        {renderDaysOfWorkout()}
      </div>
    </Page.Section>
  );
};

export default WorkoutDaysSection;
