import { animationClass } from '../globals/animationClass';
import { levels } from '../globals/levels';

import { currLevel, progress } from '../utils/utils';

import { updateLevelsList } from '../app/updateLevelsList';
import { loadLevel } from '../app/loadLevel';

export function continueGame(): void {
  if (!progress.completed.has(currLevel.get())) {
    progress.completed.add(currLevel.get());
  }

  const table = document.querySelector('.table') as HTMLElement;
  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const neededElems: Element[] = [...table.querySelectorAll(`.${animationClass}`)];
  neededElems.forEach((elem) => {
    elem.classList.remove(animationClass);
    setTimeout(() => {
      (elem as HTMLElement).style.transform = 'translateY(-50rem)';
    }, 1);
  });
  setTimeout(() => {
    if (currLevel.get() === levels.length - 1) {
      table.innerHTML = 'You win! Good job!';
      inputElem.value = '';
    } else {
      loadLevel(currLevel.incr());
    }
    updateLevelsList();
  }, 500);
}
