import { Level } from '../../../types';

import { progress, getLevelNumber } from '../utils';

export function getLevelCompletionClass(level: Level): string {
  if (progress.helped.has(getLevelNumber(level.description))) return 'level-item_helped';
  if (progress.completed.has(getLevelNumber(level.description))) return 'level-item_completed';
  return 'level-item_incompleted';
}
