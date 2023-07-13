import { SimpleUtilFunc, ProgressSave } from '../../../types';

export const getProgressSaveObj: SimpleUtilFunc<void, ProgressSave | null> = () => {
  const progressSaveStr = window.localStorage.getItem('khovaiev-progress');
  if (progressSaveStr) {
    return JSON.parse(progressSaveStr);
  }
  return null;
};
