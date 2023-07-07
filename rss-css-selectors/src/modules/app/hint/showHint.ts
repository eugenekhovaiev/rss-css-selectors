import { tableElem, hintElem } from '../../globals/elemsFromHTML';

import { getElemTagName, getElemAttrStr, getElemTop, getElemLeft } from '../../utils/utils';

export function showHint(targetIndex: number): void {
  const tableInnerElemsArr = [...tableElem.querySelectorAll('*')];
  const tableHoveredElem = tableInnerElemsArr[targetIndex];

  const elemTagName = getElemTagName(tableInnerElemsArr[targetIndex]);
  const elemAttrStr = getElemAttrStr(tableInnerElemsArr[targetIndex]);
  const hintInnerText = `<${elemTagName + elemAttrStr}></${elemTagName}>`;

  const hintTop = `${getElemTop(tableHoveredElem) - 40}px`;
  const hintLeft = `${getElemLeft(tableHoveredElem) + tableHoveredElem.clientWidth / 2 + 10}px`;
  hintElem.textContent = hintInnerText;
  hintElem.style.top = hintTop;
  hintElem.style.left = hintLeft;
  hintElem.style.display = 'block';
}
