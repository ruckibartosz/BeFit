import React from 'react';
import { IonDatetime } from '@ionic/react';

import { Page } from '@components/Page';
import Flex from '@components/Flex';
import HistoryCard from '@components/HistoryCard';

const History: React.FC = () => {
  return (
    <Page.Container>
      <Page.Heading title='History' />
      <Flex style={{ width: '100%' }} justifyContent='center'>
        <IonDatetime
          style={{ width: '100%', borderRadius: '18px' }}
          presentation='date'
          highlightedDates={[
            {
              date: '2023-03-25',
              textColor: '#800080',
              backgroundColor: '#ffc0cb',
            },
            {
              date: '2023-03-26',
              textColor: '#09721b',
              backgroundColor: '#c8e5d0',
            },
          ]}
        ></IonDatetime>
      </Flex>
      <Flex
        flexDirection='column'
        justifyContent='center'
        style={{ marginTop: '15px' }}
      >
        <HistoryCard
          title='My push workout'
          color='orange'
          date='Yesterday'
          onClick={() => {
            console.log('history card!');
          }}
        />
      </Flex>
    </Page.Container>
  );
};

export default History;
