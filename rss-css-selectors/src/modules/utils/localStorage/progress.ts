import { ProgressSave } from '../../../types';

function getProgressSaveObj(): ProgressSave | null {
  const progressSaveStr = window.localStorage.getItem('khovaiev-progress');
  if (progressSaveStr) {
    return JSON.parse(progressSaveStr);
  }
  return null;
}

export const progress = {
  has: function (levelNumber: number, where: 'completed' | 'helped'): boolean {
    const progressSaveObj = getProgressSaveObj();
    return !!progressSaveObj && progressSaveObj[where]?.includes(levelNumber);
  },

  add: function (levelNumber: number, where: 'completed' | 'helped'): void {
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
    has: function (levelNumber: number): boolean {
      return progress.has(levelNumber, 'completed');
    },

    add: function (levelNumber: number): void {
      return progress.add(levelNumber, 'completed');
    },
  },

  helped: {
    has: function (levelNumber: number): boolean {
      return progress.has(levelNumber, 'helped');
    },

    add: function (levelNumber: number): void {
      return progress.add(levelNumber, 'helped');
    },
  },
};
