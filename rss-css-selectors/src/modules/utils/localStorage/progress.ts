import { ProgressUtils, ProgressSave } from '../../../types';

import { getProgressSaveObj } from '../utils';

export const progress: ProgressUtils = {
  has: function (levelNumber, where): boolean {
    const progressSaveObj = getProgressSaveObj();
    return !!progressSaveObj && progressSaveObj[where]?.includes(levelNumber);
  },

  add: function (levelNumber, where): void {
    const progressSaveObj = getProgressSaveObj();
    if (progressSaveObj) {
      progressSaveObj[where].push(levelNumber);
      window.localStorage.setItem('khovaiev-progress', JSON.stringify(progressSaveObj));
    } else {
      let newProgressObj: ProgressSave;
      if (where === 'completed') {
        newProgressObj = {
          completed: [levelNumber],
          helped: [],
        };
      } else {
        newProgressObj = {
          completed: [],
          helped: [levelNumber],
        };
      }
      window.localStorage.setItem('khovaiev-progress', JSON.stringify(newProgressObj));
    }
  },

  completed: {
    has: function (levelNumber): boolean {
      return progress.has(levelNumber, 'completed');
    },

    add: function (levelNumber) {
      progress.add(levelNumber, 'completed');
    },
  },

  helped: {
    has: function (levelNumber) {
      return progress.has(levelNumber, 'helped');
    },

    add: function (levelNumber) {
      progress.add(levelNumber, 'helped');
    },
  },
};
