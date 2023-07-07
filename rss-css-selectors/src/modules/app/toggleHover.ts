import { tableElem, viewerElem } from '../globals/elemsFromHTML';

import { showHint, hideHint } from './hint/hint';

export function toggleHover(event: Event, flag: 'add' | 'remove'): void {
  const tableInnerElemsArr = [...tableElem.querySelectorAll('*')];
  const viewerInnerElemsArr = [...viewerElem.querySelectorAll('*')].slice(1);

  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    throw new Error('Needed target is missing!');
  }
  const targetIndex = tableInnerElemsArr.includes(target)
    ? tableInnerElemsArr.indexOf(target)
    : viewerInnerElemsArr.indexOf(target);

  const viewerHoveredElem = viewerInnerElemsArr[targetIndex];
  const tableHoveredElem = tableInnerElemsArr[targetIndex];

  if (flag === 'add') {
    viewerHoveredElem.setAttribute('data-hovered', 'true');
    tableHoveredElem.setAttribute('data-hovered', 'true');
    showHint(targetIndex);
  } else {
    viewerHoveredElem.removeAttribute('data-hovered');
    tableHoveredElem.removeAttribute('data-hovered');
    hideHint();
  }
}
