import { levels } from '../globals/levels';
import { animationClass } from '../globals/animationClass';

import { tableElem, inputElem } from '../globals/elemsFromHTML';

import { arrAreEqual } from '../utils/utils';

import { changeLevelFromInput } from './changeLevelFromInput';
import { continueGame } from './continueGame';
import { tryAgain } from './tryAgain';

export function checkInput(): void {
  const neededElems: Element[] = [...tableElem.querySelectorAll(`.${animationClass}`)];

  const inputStr = inputElem.value;
  if (+inputStr > 0 && +inputStr <= levels.length) {
    changeLevelFromInput(inputStr);
  } else {
    const selectedElems = tableElem.querySelectorAll(inputStr);
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
