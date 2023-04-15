import { SettingActionContext } from '@context/settings/SettingsActionContext';
import { useContext } from 'react';

export const useSettingsAction = () => {
  const settingsActionCtx = useContext(SettingActionContext);
  if (!settingsActionCtx) {
    throw new Error('Component beyond Settings Action Context');
  }

  return { ...settingsActionCtx };
};
