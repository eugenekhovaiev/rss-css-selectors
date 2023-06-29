import { levels } from './levels';

import { getGameCode } from './getGameCode';
import { connectElemsAndCode } from './connectElemsAndCode';

export function loadLevel(levelNum: number): void {
  const level = levels[levelNum];

  const task = document.querySelector('.task') as HTMLElement;
  task.innerHTML = level.task;

  const table = document.querySelector('.table') as HTMLDivElement;
  table.innerHTML = level.layout;

  const gameCode = document.querySelector('.editor_viewer .editor__codefield') as HTMLDivElement;
  gameCode.innerHTML = '';
  gameCode.insertAdjacentElement('beforeend', getGameCode(table));

  connectElemsAndCode(table, gameCode);

  const input = document.querySelector('.editor__input') as HTMLInputElement;
  input.value = '';
}
