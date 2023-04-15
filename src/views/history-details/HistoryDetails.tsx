import React from 'react';
import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/react';

import {
  options,
  pencil,
  statsChart,
  repeat,
  timer,
  barbell,
  hourglass,
  accessibility,
} from 'ionicons/icons';
import { Page } from '@components/Page';
import StatisticCard from '@components/Cards/StatisticCard';

import style from './HistoryDetails.module.scss';

const HistoryDetails: React.FC = () => {
  return (
    <Page.Container>
      <Page.Heading title='History details' showBackButton={true} />
      <Page.Section title='Casual' subTitle='Simple data' icon={options}>
        <IonList>
          <IonItem>
            <IonLabel>My pull workout</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Yesterday, 24th of march</IonLabel>
          </IonItem>
        </IonList>
      </Page.Section>
      <Page.Section title='Note' subTitle='Session note' icon={pencil}>
        <IonList>
          <IonItem>
            <IonTextarea
              placeholder='Type something here'
              autoGrow={true}
              value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum.'
            ></IonTextarea>
          </IonItem>
        </IonList>
      </Page.Section>
      <Page.Section
        title='Statistics'
        subTitle='General infomation about training'
        icon={statsChart}
      >
        <div className={style.historyDetailsStats}>
          <StatisticCard icon={barbell} heading='Workout sessions' value='4' />
          <StatisticCard
            icon={timer}
            color='warning'
            heading='Workout sessions'
            value='4'
          />
          <StatisticCard
            icon={hourglass}
            color='danger'
            heading='Duration'
            value='44:45'
          />
          <StatisticCard
            icon={accessibility}
            color='success'
            heading='Workout sessions'
            value='4'
          />
        </div>
      </Page.Section>
      <Page.Section title='Reps' subTitle='Check your reps' icon={repeat}>
        <IonList>
          <IonLabel>Chin Up</IonLabel>
          <IonItem>1. 25kg x 7 reps</IonItem>
          <IonItem>2. 25kg x 7 reps</IonItem>
          <IonItem>3. 25kg x 7 reps</IonItem>
          <IonItem>4. 25kg x 7 reps</IonItem>
        </IonList>
      </Page.Section>
    </Page.Container>
  );
};

export default HistoryDetails;
