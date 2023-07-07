import { getElemTagName, getElemAttrStr } from '../utils';

export function getElemWrapped(elem: HTMLElement): HTMLElement {
  const elemChildrenArr = [...elem.children];
  const elemTagName = getElemTagName(elem);
  const elemAttrStr = getElemAttrStr(elem);

  const divWrapper = document.createElement('div');
  divWrapper.textContent = `<${elemTagName + elemAttrStr}>`;

  if (elemChildrenArr.length) {
    elemChildrenArr.forEach((el) => {
      divWrapper.insertAdjacentElement('beforeend', getElemWrapped(el as HTMLElement));
    });
  }

  divWrapper.insertAdjacentText('beforeend', `</${elemTagName}>`);
  return divWrapper;
}
