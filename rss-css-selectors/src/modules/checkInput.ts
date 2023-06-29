import { arrAreEqual, currLevel } from './tools';
import { levels } from './levels';
import { loadLevel } from './loadLevel';

export function checkInput(): void {
  const table = document.querySelector('.table') as HTMLElement;

  const neededElems: Element[] = [...table.querySelectorAll('.animate__heartBeat')];

  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const inputStr = inputElem.value;
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

function continueGame(): void {
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
  }, 500);
}

function tryAgain(inputElem: HTMLInputElement): void {
  inputElem.style.backgroundColor = 'red';
  setTimeout(() => inputElem.removeAttribute('style'), 1000);
}
