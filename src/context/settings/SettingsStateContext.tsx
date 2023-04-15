import React from 'react';
import { useSettingsReducer } from '@hooks/reducers/useSettingsReducer';
import { SettingsAction } from '../../types/settingsReducer.type';

type SettingsStateContextProps = {
  children: React.ReactNode;
};

type SettingsStateContextType = {
  playSoundUponFinish: boolean;
  showRestTimeNotification: boolean;
  notificationReminder: boolean;
  language: 'eng' | 'pl';
  weightUnit: 'kg' | 'lbs';
  distanceUnit: 'km' | 'mi';
  weeklyGoal: number;
  sets: number;
  dispatch: React.Dispatch<SettingsAction>;
};

export const SettingsStateContext = React.createContext<
  SettingsStateContextType | undefined
>(undefined);

export const SettingsStateProvider: React.FC<SettingsStateContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useSettingsReducer();

  return (
    <SettingsStateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SettingsStateContext.Provider>
  );
};
