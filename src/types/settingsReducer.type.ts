export type SettingsState = {
  playSoundUponFinish: boolean;
  showRestTimeNotification: boolean;
  notificationReminder: boolean;
  language: 'eng' | 'pl';
  weightUnit: 'kg' | 'lbs';
  distanceUnit: 'km' | 'mi';
  weeklyGoal: number;
  sets: number;
};

type SettingsFetchAction = {
  type: 'FETCH_SETTINGS';
  payload: { settings: SettingsState };
};

type SettingsChangeValueAction = {
  type: 'CHANGE_SETTING_VALUE';
  payload: { property: string; value: unknown };
};

export type SettingsAction = SettingsFetchAction | SettingsChangeValueAction;
