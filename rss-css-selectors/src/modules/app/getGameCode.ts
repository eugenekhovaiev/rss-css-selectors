import { getElemTagName, getElemAttrStr } from '../utils/utils';

export function getGameCode(elem: HTMLElement): HTMLElement {
  const elemChildrenArr = [...elem.children];
  const elemTagName = getElemTagName(elem);
  const elemAttrStr = getElemAttrStr(elem);

  const divWrapper = document.createElement('div');
  divWrapper.textContent = `<${elemTagName + elemAttrStr}>`;

  if (elemChildrenArr.length) {
    elemChildrenArr.forEach((el) => {
      divWrapper.insertAdjacentElement('beforeend', getGameCode(el as HTMLElement));
    });
  }

  divWrapper.insertAdjacentText('beforeend', `</${elemTagName}>`);
  return divWrapper;
}
