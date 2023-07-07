import { levels } from '../globals/levels';
import {
  inputElem,
  enterButtonElem,
  resetButtonElem,
  helpButtonElem,
  editorsWrapperElem,
  burgerElem,
  levelsMenuElem,
} from '../globals/elemsFromHTML';

import { currLevel, progress, writeStrCharByChar } from '../utils/utils';

import { loadLevel } from './loadLevel';
import { updateLevelsList } from './updateLevelsList';

import { checkInput } from './input/input';

export function startApp(): void {
  loadLevel(currLevel.get());
  updateLevelsList();

  helpButtonElem.addEventListener('click', () => {
    inputElem.value = '';
    const helperStr = levels[currLevel.get()].helper;
    writeStrCharByChar(inputElem, helperStr);
    inputElem.focus();

    progress.helped.add(currLevel.get());
  });

  inputElem.addEventListener('input', () => {
    if (inputElem.value === '') {
      inputElem.classList.add('animate__flash');
    } else {
      inputElem.classList.remove('animate__flash');
    }
  });

  enterButtonElem.addEventListener('click', checkInput);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.activeElement === inputElem) enterButtonElem.click();
  });

  editorsWrapperElem.addEventListener('click', () => {
    inputElem.focus();
  });

  burgerElem.addEventListener('click', () => {
    levelsMenuElem.classList.toggle('visible');
  });

  resetButtonElem.addEventListener('click', () => {
    window.localStorage.clear();
    loadLevel(0);
    updateLevelsList();
  });
}
