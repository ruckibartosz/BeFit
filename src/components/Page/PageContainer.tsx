import React from 'react';

import { IonContent, IonPage } from '@ionic/react';

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <IonPage>
      <IonContent className='ion-padding'>{children}</IonContent>
    </IonPage>
  );
};

export default PageContainer;
