import React, { useReducer, useEffect } from 'react';

import { SettingsState, SettingsAction } from '../types/settingsReducer.type';
import useLocalStorage from './useLocalStorage';

export const useSettingsReducer = (): [
  SettingsState,
  React.Dispatch<SettingsAction>
] => {
  const [storageSettings] = useLocalStorage<SettingsState>('settings');

  const settingsReducer = (
    state: SettingsState,
    action: SettingsAction
  ): SettingsState => {
    switch (action.type) {
      case 'FETCH_SETTINGS': {
        const { settings } = action.payload;
        return { ...state, ...settings };
      }

      case 'CHANGE_SETTING_VALUE': {
        const { property, value } = action.payload;

        return { ...state, [property]: value };
      }

      default: {
        return state;
      }
    }
  };

  const defaultValues: SettingsState = {
    playSoundUponFinish: false,
    showRestTimeNotification: false,
    notificationReminder: false,
    language: 'eng',
    weightUnit: 'kg',
    distanceUnit: 'km',
    weeklyGoal: undefined,
    sets: undefined,
  };

  const [state, dispatch] = useReducer(settingsReducer, defaultValues);

  useEffect(() => {
    dispatch({
      type: 'FETCH_SETTINGS',
      payload: { settings: storageSettings },
    });
  }, [storageSettings]);

  return [state, dispatch];
};
