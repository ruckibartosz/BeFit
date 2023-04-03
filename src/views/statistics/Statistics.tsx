import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import {
  statsChart,
  barbell,
  calendarNumber,
  timer,
  hourglass,
  accessibility,
} from 'ionicons/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Page } from '@components/Page';
import StatisticCard from '@components/StatisticCard';
import Flex from '@components/Flex';

import style from './Statistics.module.scss';

const Statistics: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Workout per month',
        data: [5, 2, 10, 11, 7, 9, 12, 10, 9, 1, 20, 12],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const dataExercise = {
    labels,
    datasets: [
      {
        label: 'Exercise per month',
        data: [5, 2, 10, 11, 7, 9, 12, 10, 9, 1, 20, 12],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Page.Container>
      <Page.Heading title='Statistics' />
      <Page.Section
        title='General'
        subTitle='General information about training'
        icon={statsChart}
      >
        <div className={style.statisticsGeneral}>
          <StatisticCard icon={barbell} heading='Workout sessions' value='4' />
          <StatisticCard
            icon={timer}
            color='warning'
            heading='Total time (hrs)'
            value='1,2'
          />
          <StatisticCard
            icon={hourglass}
            color='danger'
            heading='Avg. session duration'
            value='38:02'
          />
          <StatisticCard
            icon={accessibility}
            color='success'
            heading='Sets completed'
            value='37'
          />
        </div>
      </Page.Section>
      <Page.Section
        title='Workout per month'
        subTitle='Amount of workouts in each month'
        icon={calendarNumber}
      >
        <Bar options={options} data={data} />
      </Page.Section>
      <Page.Section title='Exercise' subTitle='Choose exercise' icon={barbell}>
        <Flex flexDirection='column' gap='12px'>
          <IonList className={style.statisticsList}>
            <IonItem>
              <IonSelect placeholder='Select exercise'>
                <IonSelectOption value='barbell-squat'>
                  Barbell Squat
                </IonSelectOption>
                <IonSelectOption value='barbell-bench-press'>
                  Barbell Bench Press
                </IonSelectOption>
                <IonSelectOption value='butterfly-machine'>
                  Butterfly Machine
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <Bar options={options} data={dataExercise} />
        </Flex>
      </Page.Section>
    </Page.Container>
  );
};

export default Statistics;
