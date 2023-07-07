import { tableElem, viewerElem } from '../globals/elemsFromHTML';

import { toggleHover } from './toggleHover';

export function connectTableAndViewer(): void {
  const tableInnerElemsArr = [...tableElem.querySelectorAll('*')];
  const viewerInnerElemsArr = [...viewerElem.querySelectorAll('*')].slice(1);

  tableInnerElemsArr.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => toggleHover(event, 'add'));
    item.addEventListener('mouseout', (event) => toggleHover(event, 'remove'));
    viewerInnerElemsArr[index].addEventListener('mouseover', (event) => toggleHover(event, 'add'));
    viewerInnerElemsArr[index].addEventListener('mouseout', (event) => toggleHover(event, 'remove'));
  });
}
