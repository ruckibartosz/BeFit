import { useMemo, useState } from 'react';
import { useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';

import { useWorkoutState } from '@hooks/useWorkoutState';
import { DayType } from '../../types/workoutData.type';
import { useWorkoutReducer } from '@hooks/useWorkoutReducer';

const useWorkoutSections = () => {
  const { workoutParam } = useParams<{ workoutParam: string }>();
  const [{ name, note, days }] = useWorkoutState();
  const [state] = useWorkoutReducer();
  const router = useIonRouter();

  const isCreatingWorkout = useMemo<boolean>(() => {
    return workoutParam === 'create' ? true : false;
  }, [workoutParam]);

  const [generalName, setGeneralName] = useState<string>(
    isCreatingWorkout ? '' : name
  );
  const [generalNote, setGeneralNote] = useState<string>(
    isCreatingWorkout ? '' : note
  );
  const [generalDays, setGeneralDays] = useState<DayType[]>(
    isCreatingWorkout ? [] : days
  );

  const handleOnGeneralNameChange = (ev: Event) => {
    setGeneralName((ev.target as HTMLInputElement).value);
  };

  const handleOnGeneralNoteChange = (ev: Event) =>
    setGeneralNote((ev.target as HTMLInputElement).value);

  const handleUpdateDays = () => setGeneralDays([]);

  const handleCreateDayButtonClick = () => {
    router.push(`/day-details/create`);
  };

  const handleOnDayCardClick = (dayId: string) =>
    router.push(`/day-details/${dayId}`);

  return {
    state,
    generalName,
    generalNote,
    generalDays,
    isCreatingWorkout,
    handleOnGeneralNameChange,
    handleOnGeneralNoteChange,
    handleUpdateDays,
    handleCreateDayButtonClick,
    handleOnDayCardClick,
  };
};

export default useWorkoutSections;
