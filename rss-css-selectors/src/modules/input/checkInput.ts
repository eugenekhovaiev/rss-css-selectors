import { levels } from '../globals/levels';
import { animationClass } from '../globals/animationClass';

import { arrAreEqual } from '../utils/utils';

import { changeLevelFromInput } from './changeLevelFromInput';
import { continueGame } from './continueGame';
import { tryAgain } from './tryAgain';

export function checkInput(): void {
  const table = document.querySelector('.table') as HTMLElement;

  const neededElems: Element[] = [...table.querySelectorAll(`.${animationClass}`)];

  const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
  const inputStr = inputElem.value;
  if (+inputStr > 0 && +inputStr <= levels.length) {
    changeLevelFromInput(inputStr);
  } else {
    const selectedElems = table.querySelectorAll(inputStr);
    let selectedElemsArr: Element[] | null[];
    if (selectedElems) {
      selectedElemsArr = [...selectedElems];
    } else {
      selectedElemsArr = [null];
    }

    if (arrAreEqual(neededElems, selectedElemsArr) && neededElems.length) {
      continueGame();
    } else {
      tryAgain();
    }
  }
}
