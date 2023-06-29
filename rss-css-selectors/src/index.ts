import 'normalize.css';
import './sass/main.scss';

import { currLevel } from './modules/tools';
import { loadLevel } from './modules/loadLevel';
import { checkInput } from './modules/checkInput';

loadLevel(currLevel.get());

const inputElem = document.querySelector('.editor__input') as HTMLInputElement;
const enterButton = document.querySelector('.editor__button') as HTMLButtonElement;
const editor = document.querySelector('.editors-wrapper') as HTMLElement;

enterButton.addEventListener('click', checkInput);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === inputElem) enterButton.click();
});
editor.addEventListener('click', () => {
  inputElem.focus();
});
