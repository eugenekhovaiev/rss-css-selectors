import { ProgressSave } from '../types';

export const getElemTagName = (elem: Element): string => elem.tagName.toLowerCase();

export function getElemAttrStr(elem: Element): string {
  const elemAttrArr = [...elem.attributes].filter((attr) => !attr.name.includes('data'));
  let elemAttrStr = '';
  elemAttrArr.forEach((attr) => {
    let elemAttrValue = '';
    if (attr.name === 'class') {
      elemAttrValue = attr.value
        .split(' ')
        .filter((value) => !value.includes('animate'))
        .join(' ');
    } else {
      elemAttrValue = attr.value;
    }
    elemAttrStr += elemAttrValue ? ` ${attr.name}="${elemAttrValue}"` : '';
  });
  return elemAttrStr;
}

export const getElemTop = (elem: Element): number => elem.getBoundingClientRect().top + window.scrollY;

export const getElemLeft = (elem: Element): number => elem.getBoundingClientRect().left + window.scrollX;

export function arrAreEqual(arrA: unknown[], arrB: unknown[]): boolean {
  if (arrA.length !== arrB.length) return false;
  for (let index = 0; index < arrA.length; index++) {
    if (arrA[index] !== arrB[index]) return false;
  }
  return true;
}

export function getLevelNumber(string: string): number {
  return +string.split(' ').slice(0, 1) - 1;
}

export function highlightChosenLevel(levelNumber: number): void {
  const levelsListItems: Element[] = [...document.querySelectorAll('.level-item')];
  levelsListItems.forEach((listItem) => {
    listItem.classList.remove('level-item_chosen');
  });
  levelsListItems[levelNumber].classList.add('level-item_chosen');
}

export const currLevel = {
  get: function (): number {
    const currLevelSave = window.localStorage.getItem('khovaiev-currLevel');
    return currLevelSave ? +currLevelSave : 0;
  },
  set: function (value: number): number {
    localStorage.setItem('khovaiev-currLevel', value.toString());
    return value;
  },
  incr: function (): number {
    return this.set(this.get() + 1);
  },
};

function getProgressSaveObj(): ProgressSave | null {
  const progressSaveStr = window.localStorage.getItem('khovaiev-progress');
  if (progressSaveStr) {
    return JSON.parse(progressSaveStr);
  }
  return null;
}

export const progress = {
  has: function (levelNumber: number, where: 'completed' | 'helped'): boolean {
    // const levelNumber = getLevelNumber(level.description);
    const progressSaveObj = getProgressSaveObj();
    return !!progressSaveObj && progressSaveObj[where]?.includes(levelNumber);
  },
  add: function (levelNumber: number, where: 'completed' | 'helped'): void {
    // const levelNumber = getLevelNumber(level.description);
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

export function writeStrCharByChar(to: HTMLInputElement, from: string): void {
  let i = 0;
  const interval = setInterval(() => {
    to.dispatchEvent(new Event('input'));
    if (i < from.length) {
      to.value += from[i];
      i += 1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}
