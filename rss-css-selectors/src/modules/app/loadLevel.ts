import { levels } from '../globals/levels';
import { tableElem, viewerElem, taskElem, inputElem } from '../globals/elemsFromHTML';

import { getElemWrappedHTML } from './getElemWrappedHTML';
import { connectTableAndViewer } from './connectElemsAndCode';

export function loadLevel(levelNum: number): void {
  const level = levels[levelNum];

  taskElem.innerHTML = level.task;

  tableElem.innerHTML = level.layout;

  viewerElem.innerHTML = '';
  viewerElem.insertAdjacentElement('beforeend', getElemWrappedHTML(tableElem));

  connectTableAndViewer();

  inputElem.value = '';
  inputElem.dispatchEvent(new Event('input'));
}
