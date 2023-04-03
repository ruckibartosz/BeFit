import React from 'react';
import { IonIcon, useIonRouter } from '@ionic/react';
import { homeOutline, settingsOutline } from 'ionicons/icons';

import { Page } from '@components/Page';
import { sampleData } from '@constants/workoutSample';
import WorkoutWeekly from '@components/WorkoutWeekly';
import WeeklyGoal from '@components/WeeklyGoal';
import FabButton from '@components/FabButton';
import WorkoutListSection from '@components/UserWorkoutListSection';

const Home: React.FC = () => {
  const router = useIonRouter();

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
      <WeeklyGoal goal={5} current={1} />
      <WorkoutListSection />
    </Page.Container>
  );
};

export default Home;
