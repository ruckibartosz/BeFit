import React from 'react';
import { useSettingsState } from '@hooks/useSettingsState';
import { SettingsState } from '../types/settingsReducer.type';
import useLocalStorage from '@hooks/useLocalStorage';

type SettingsActionContextProps = {
  children: React.ReactNode;
};

type SettingsActionContextType = {
  updateSettingValue: (property: string, value: any) => void;
  saveSettings: () => void;
};

export const SettingActionContext = React.createContext<
  SettingsActionContextType | undefined
>(undefined);

export const SettingsActionProvider: React.FC<SettingsActionContextProps> = ({
  children,
}) => {
  const { dispatch, ...settings } = useSettingsState();
  const [, setStorageSettings] = useLocalStorage<SettingsState>('settings');

  const updateSettingValue = (property: string, value: any) => {
    dispatch({ type: 'CHANGE_SETTING_VALUE', payload: { property, value } });
  };

  const saveSettings = () => {
    setStorageSettings(settings);
  };

  const contextValues = {
    updateSettingValue,
    saveSettings,
  };

  return (
    <SettingActionContext.Provider value={{ ...contextValues }}>
      {children}
    </SettingActionContext.Provider>
  );
};
