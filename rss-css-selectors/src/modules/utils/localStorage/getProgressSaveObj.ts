import { ProgressSave } from '../../../types';

export function getProgressSaveObj(): ProgressSave | null {
  const progressSaveStr = window.localStorage.getItem('khovaiev-progress');
  if (progressSaveStr) {
    return JSON.parse(progressSaveStr);
  }
  return null;
}
