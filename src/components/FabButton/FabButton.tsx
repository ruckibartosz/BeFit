import React from 'react';
import { IonFab, IonFabButton, IonIcon, useIonRouter } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useWorkoutAction } from '@hooks/useWorkoutAction';
const FabButton: React.FC = () => {
  const { resetCurrWorkout } = useWorkoutAction();
  const router = useIonRouter();

  const handleOnFabClick = () => {
    resetCurrWorkout();
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

export default FabButton;
