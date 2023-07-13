import { SimpleUtilFunc, Level } from '../../../types';

import { progress, getLevelNumber } from '../utils';

export const getLevelCompletionClass: SimpleUtilFunc<Level, string> = (level) => {
  if (progress.helped.has(getLevelNumber(level.description))) return 'level-item_helped';
  if (progress.completed.has(getLevelNumber(level.description))) return 'level-item_completed';
  return 'level-item_incompleted';
};
