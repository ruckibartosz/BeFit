import { useContext } from 'react';
import { SettingsStateContext } from '@context/settings/SettingsStateContext';

export const useSettingsState = () => {
  const settingsStateCtx = useContext(SettingsStateContext);
  if (!settingsStateCtx) {
    throw new Error('Component beyond SettingsStateContext');
  }

  return { ...settingsStateCtx };
};
