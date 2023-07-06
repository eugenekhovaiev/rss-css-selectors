import 'normalize.css';
import 'animate.css';
import './sass/main.scss';

import { levels } from './modules/globals/levels';
import { currLevel, progress, writeStrCharByChar } from './modules/utils/utils';
import { loadLevel } from './modules/app/loadLevel';
import { checkInput } from './modules/input/checkInput';
import { updateLevelsList } from './modules/app/updateLevelsList';

loadLevel(currLevel.get());
updateLevelsList();

const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
const editor = document.querySelector('.editors-wrapper') as HTMLElement;
const enterButton = document.querySelector('.editor__button') as HTMLButtonElement;
enterButton.addEventListener('click', checkInput);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === inputElem) enterButton.click();
});
editor.addEventListener('click', () => {
  inputElem.focus();
});

inputElem.addEventListener('input', () => {
  if (inputElem.value === '') {
    inputElem.classList.add('animate__flash');
  } else {
    inputElem.classList.remove('animate__flash');
  }
});

const resetButton = document.querySelector('.levels-menu__button') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
  window.localStorage.clear();
  loadLevel(0);
  updateLevelsList();
});

const helpButton = document.querySelector('.help-button') as HTMLButtonElement;
helpButton.addEventListener('click', () => {
  inputElem.value = '';
  const helperStr = levels[currLevel.get()].helper;
  writeStrCharByChar(inputElem, helperStr);
  inputElem.focus();

  progress.helped.add(currLevel.get());
});

const burger = document.querySelector('.burger') as HTMLButtonElement;
const levelsMenu = document.querySelector('.levels-menu') as HTMLButtonElement;
burger.addEventListener('click', () => {
  levelsMenu.classList.toggle('visible');
});
