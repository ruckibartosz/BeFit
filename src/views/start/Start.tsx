import React from 'react';

import { IonContent, IonFooter } from '@ionic/react';

const Start: React.FC = () => {
  return (
    <>
      <IonContent className='ion-padding'>
        <div>content!</div>
      </IonContent>
      <IonFooter>
        <div>start!</div>
      </IonFooter>
    </>
  );
};

export default Start;
