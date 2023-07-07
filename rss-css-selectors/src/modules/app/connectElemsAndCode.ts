import { tableElem, viewerElem, hintElem } from '../globals/elemsFromHTML';

import { getElemTagName, getElemAttrStr, getElemTop, getElemLeft } from '../utils/utils';

function toggleHover(event: Event, flag: 'add' | 'remove'): void {
  const tableInnerElemsArr = [...tableElem.querySelectorAll('*')];
  const viewerInnerElemsArr = [...viewerElem.querySelectorAll('*')].slice(1);

  const target = event.target as HTMLElement;
  const targetIndex = tableInnerElemsArr.includes(target)
    ? tableInnerElemsArr.indexOf(target)
    : viewerInnerElemsArr.indexOf(target);

  const viewerHoveredElem = viewerInnerElemsArr[targetIndex];
  const tableHoveredElem = tableInnerElemsArr[targetIndex];

  if (flag === 'add') {
    const elemTagName = getElemTagName(tableInnerElemsArr[targetIndex]);
    const elemAttrStr = getElemAttrStr(tableInnerElemsArr[targetIndex]);
    const hintInnerText = `<${elemTagName + elemAttrStr}></${elemTagName}>`;

    const hintTop = `${getElemTop(tableHoveredElem) - 40}px`;
    const hintLeft = `${getElemLeft(tableHoveredElem) + tableHoveredElem.clientWidth / 2 + 10}px`;

    viewerHoveredElem.setAttribute('data-hovered', 'true');
    tableHoveredElem.setAttribute('data-hovered', 'true');
    hintElem.textContent = hintInnerText;
    hintElem.style.top = hintTop;
    hintElem.style.left = hintLeft;
    hintElem.style.display = 'block';
  } else {
    viewerHoveredElem.removeAttribute('data-hovered');
    tableHoveredElem.removeAttribute('data-hovered');
    hintElem.removeAttribute('style');
    hintElem.textContent = '';
  }
}

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
