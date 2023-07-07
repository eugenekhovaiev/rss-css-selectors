import { levels } from '../globals/levels';
import { tableElem, viewerElem, taskElem, inputElem } from '../globals/elemsFromHTML';

import { getElemWrapped } from '../utils/utils';

import { connectTableAndViewer } from './connectElemsAndCode';

export function loadLevel(levelNum: number): void {
  const level = levels[levelNum];

  taskElem.innerHTML = level.task;

  tableElem.innerHTML = level.layout;

  viewerElem.innerHTML = '';
  viewerElem.insertAdjacentElement('beforeend', getElemWrapped(tableElem));

  connectTableAndViewer();

  inputElem.value = '';
  inputElem.dispatchEvent(new Event('input'));
}
