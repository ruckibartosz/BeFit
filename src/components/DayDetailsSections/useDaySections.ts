import React from 'react';
import { useState } from 'react';

import { ExerciseType } from '../../types/exercise.type';

const useDaySections = () => {
  const [dayName, setDayName] = useState<string>('frajer');
  const [exercise, setExercise] = useState<Array<ExerciseType>>([]);
  const [isExerciseModalOpen, setIsExerciseModalOpen] =
    useState<boolean>(false);

  const handleOnModalCloseButtonClick = () => {
    setIsExerciseModalOpen(false);
  };

  const handleOnAddExerciseButtonClick = () => setIsExerciseModalOpen(true);

  const handleOnChangeSelectedExercise = (exercises: ExerciseType[]) => {
    setExercise(exercises);
  };

  const handleOnChangeDayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDayName(e.target.value);
  };

  return {
    dayName,
    exercise,
    isExerciseModalOpen,
    handleOnAddExerciseButtonClick,
    handleOnModalCloseButtonClick,
    handleOnChangeSelectedExercise,
    handleOnChangeDayName,
  };
};

export default useDaySections;
