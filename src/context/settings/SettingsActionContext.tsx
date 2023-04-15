import React from 'react';
import { useSettingsState } from '@hooks/states/useSettingsState';
import { SettingsState } from '../../types/settingsReducer.type';
import useLocalStorage from '@hooks/common/useLocalStorage';

type SettingsActionContextProps = {
  children: React.ReactNode;
};

type SettingsContextActions = {
  updateSettingValue: (property: string, value: any) => void;
  saveSettings: () => void;
};

export const SettingActionContext = React.createContext<
  SettingsContextActions | undefined
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
