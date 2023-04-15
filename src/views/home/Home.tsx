import React from 'react';
import { IonIcon, useIonRouter } from '@ionic/react';
import { homeOutline, settingsOutline } from 'ionicons/icons';

import { Page } from '@components/Page';
import { sampleData } from '@constants/workoutSample';
import { useSettingsState } from '@hooks/states/useSettingsState';
import { useWorkoutState } from '@hooks/states/useWorkoutState';
import WorkoutWeekly from '@components/WorkoutWeekly';
import WeeklyGoal from '@components/WeeklyGoal';
import FabButton from '@components/Buttons/FabHomeButton';
import HomeWorkoutsListSection from './workouts-section';

const Home: React.FC = () => {
  const router = useIonRouter();
  const { weeklyGoal } = useSettingsState();
  const { workouts } = useWorkoutState();

  return (
    <Page.Container>
      <FabButton />
      <Page.Heading title='Dashboard' mainIcon={homeOutline}>
        <IonIcon
          onClick={() => router.push('/settings')}
          icon={settingsOutline}
        />
      </Page.Heading>
      <WorkoutWeekly data={sampleData} />
      <WeeklyGoal goal={weeklyGoal} current={1} />
      <HomeWorkoutsListSection workouts={workouts} />
    </Page.Container>
  );
};

export default Home;
