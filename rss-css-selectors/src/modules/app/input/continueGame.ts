import { animationClass } from '../../globals/animationClass';
import { levels } from '../../globals/levels';
import { tableElem, inputElem } from '../../globals/elemsFromHTML';

import { currLevel, progress } from '../../utils/utils';

import { updateLevelsList } from '../updateLevelsList';
import { loadLevel } from '../loadLevel';

export function continueGame(): void {
  if (!progress.completed.has(currLevel.get())) {
    progress.completed.add(currLevel.get());
  }

  const neededElems: Element[] = [...tableElem.querySelectorAll(`.${animationClass}`)];
  neededElems.forEach((elem) => {
    elem.classList.remove(animationClass);
    setTimeout(() => {
      (elem as HTMLElement).style.transform = 'translateY(-50rem)';
    }, 1);
  });
  setTimeout(() => {
    if (currLevel.get() === levels.length - 1) {
      tableElem.innerHTML = 'You win! Good job!';
      inputElem.value = '';
    } else {
      loadLevel(currLevel.incr());
    }
    updateLevelsList();
  }, 500);
}
