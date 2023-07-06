import { getElemTagName, getElemAttrStr, getElemTop, getElemLeft } from '../utils/utils';

export function connectElemsAndCode(table: HTMLElement, gameCode: HTMLElement): void {
  const tableElemsArr = [...table.querySelectorAll('*')];
  const viewerElemsArr = [...gameCode.querySelectorAll('*')].slice(1);

  const hint = document.querySelector('.hint') as HTMLElement;

  function toggleHover(event: Event, flag: 'add' | 'remove'): void {
    const target = event.target as HTMLElement;
    const targetIndex = tableElemsArr.includes(target) ? tableElemsArr.indexOf(target) : viewerElemsArr.indexOf(target);

    const viewerElem = viewerElemsArr[targetIndex];
    const tableElem = tableElemsArr[targetIndex];

    if (flag === 'add') {
      const elemTagName = getElemTagName(tableElemsArr[targetIndex]);
      const elemAttrStr = getElemAttrStr(tableElemsArr[targetIndex]);
      const hintInnerText = `<${elemTagName + elemAttrStr}></${elemTagName}>`;

      const hintTop = `${getElemTop(tableElem) - 40}px`;
      const hintLeft = `${getElemLeft(tableElem) + tableElem.clientWidth / 2 + 10}px`;

      viewerElem.setAttribute('data-hovered', 'true');
      tableElem.setAttribute('data-hovered', 'true');
      hint.textContent = hintInnerText;
      hint.style.top = hintTop;
      hint.style.left = hintLeft;
      hint.style.display = 'block';
    } else {
      viewerElem.removeAttribute('data-hovered');
      tableElem.removeAttribute('data-hovered');
      hint.removeAttribute('style');
      hint.textContent = '';
    }
  }

  tableElemsArr.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => toggleHover(event, 'add'));
    item.addEventListener('mouseout', (event) => toggleHover(event, 'remove'));
    viewerElemsArr[index].addEventListener('mouseover', (event) => toggleHover(event, 'add'));
    viewerElemsArr[index].addEventListener('mouseout', (event) => toggleHover(event, 'remove'));
  });
}
