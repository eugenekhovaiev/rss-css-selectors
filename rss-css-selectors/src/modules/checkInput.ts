import { arrAreEqual, currLevel, progress } from './tools';
import { levels } from './levels';
import { loadLevel } from './loadLevel';
import { updateLevelsList } from './updateLevelsList';

export function checkInput(): void {
  const table = document.querySelector('.table') as HTMLElement;

  const neededElems: Element[] = [...table.querySelectorAll('.animate__heartBeat')];

  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const inputStr = inputElem.value;
  if (+inputStr > 0 && +inputStr <= levels.length) {
    currLevel.set(+inputStr - 1);
    loadLevel(currLevel.get());
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
      tryAgain(inputElem);
    }
  }
}

function continueGame(): void {
  if (!progress.completed.has(currLevel.get())) {
    progress.completed.add(currLevel.get());
  }

  const table = document.querySelector('.table') as HTMLElement;
  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const neededElems: Element[] = [...table.querySelectorAll('.animate__heartBeat')];
  neededElems.forEach((elem) => {
    elem.classList.remove('animate__heartBeat');
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

function tryAgain(inputElem: HTMLInputElement): void {
  inputElem.style.backgroundColor = 'red';
  setTimeout(() => inputElem.removeAttribute('style'), 1000);
}
