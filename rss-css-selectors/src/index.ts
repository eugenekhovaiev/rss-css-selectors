import 'normalize.css';
import './sass/main.scss';

import { currLevel } from './modules/tools';
import { loadLevel } from './modules/loadLevel';
import { checkInput } from './modules/checkInput';
import { updateLevelsList } from './modules/updateLevelsList';

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

const resetButton = document.querySelector('.levels-menu__button') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
  window.localStorage.clear();
  loadLevel(0);
  updateLevelsList();
});
