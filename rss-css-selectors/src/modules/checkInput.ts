import { arrAreEqual, currLevel, progress, highlightChosenLevel } from './tools';
import { levels } from './levels';
import { loadLevel } from './loadLevel';
import { updateLevelsList } from './updateLevelsList';
import { animationClass } from './animationClass';

export function checkInput(): void {
  const table = document.querySelector('.table') as HTMLElement;

  const neededElems: Element[] = [...table.querySelectorAll(`.${animationClass}`)];

  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const inputStr = inputElem.value;
  if (+inputStr > 0 && +inputStr <= levels.length) {
    currLevel.set(+inputStr - 1);
    loadLevel(currLevel.get());
    highlightChosenLevel(currLevel.get());
  } else {
    let selectedElems: Element[] | null[];
    try {
      selectedElems = [...table.querySelectorAll(inputStr)];
    } catch {
      selectedElems = [null];
    }

    if (arrAreEqual(neededElems, selectedElems) && neededElems.length) {
      continueGame();
    } else {
      tryAgain();
    }
  }
}

function continueGame(): void {
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

function tryAgain(): void {
  const editors = document.querySelector('.editors-wrapper') as HTMLElement;
  editors.classList.add('animate__animated', 'animate__headShake', 'animate__fast');

  setTimeout(() => {
    editors.classList.remove('animate__animated', 'animate__headShake', 'animate__fast');
  }, 300);
}
