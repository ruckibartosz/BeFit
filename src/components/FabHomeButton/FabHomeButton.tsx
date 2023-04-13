import React from 'react';
import { IonFab, IonFabButton, IonIcon, useIonRouter } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useWorkoutAction } from '@hooks/useWorkoutAction';

const FabHomeButton: React.FC = () => {
  const router = useIonRouter();
  const { resetState } = useWorkoutAction();

  const handleOnFabClick = () => {
    resetState();
    router.push('/workout/create');
  };

  return (
    <IonFab
      onClick={handleOnFabClick}
      slot='fixed'
      vertical='bottom'
      horizontal='end'
    >
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};

export default FabHomeButton;
