import React from 'react';
import { IonFab, IonFabButton, IonIcon, useIonRouter } from '@ionic/react';
import { play } from 'ionicons/icons';

const FabWorkoutButton: React.FC = () => {
  const router = useIonRouter();

  const handleOnFabClick = () => {
    router.push('/current-session');
  };

  return (
    <IonFab
      onClick={handleOnFabClick}
      slot='fixed'
      vertical='bottom'
      horizontal='end'
    >
      <IonFabButton>
        <IonIcon icon={play} />
      </IonFabButton>
    </IonFab>
  );
};

export default FabWorkoutButton;
