import 'normalize.css';
import 'animate.css';
import './sass/main.scss';

import { levels } from './modules/globals/levels';

import {
  inputElem,
  enterButtonElem,
  resetButtonElem,
  helpButtonElem,
  editorsWrapperElem,
  burgerElem,
  levelsMenuElem,
} from './modules/globals/elemsFromHTML';

import { currLevel, progress, writeStrCharByChar } from './modules/utils/utils';
import { loadLevel } from './modules/app/loadLevel';
import { checkInput } from './modules/input/checkInput';
import { updateLevelsList } from './modules/app/updateLevelsList';

loadLevel(currLevel.get());
updateLevelsList();

enterButtonElem.addEventListener('click', checkInput);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === inputElem) enterButtonElem.click();
});
editorsWrapperElem.addEventListener('click', () => {
  inputElem.focus();
});

inputElem.addEventListener('input', () => {
  if (inputElem.value === '') {
    inputElem.classList.add('animate__flash');
  } else {
    inputElem.classList.remove('animate__flash');
  }
});

resetButtonElem.addEventListener('click', () => {
  window.localStorage.clear();
  loadLevel(0);
  updateLevelsList();
});

helpButtonElem.addEventListener('click', () => {
  inputElem.value = '';
  const helperStr = levels[currLevel.get()].helper;
  writeStrCharByChar(inputElem, helperStr);
  inputElem.focus();

  progress.helped.add(currLevel.get());
});

burgerElem.addEventListener('click', () => {
  levelsMenuElem.classList.toggle('visible');
});
