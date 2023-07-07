import { getElemTagName, getElemAttrStr } from '../utils/utils';

export function getElemWrappedHTML(elem: HTMLElement): HTMLElement {
  const elemChildrenArr = [...elem.children];
  const elemTagName = getElemTagName(elem);
  const elemAttrStr = getElemAttrStr(elem);

  const divWrapper = document.createElement('div');
  divWrapper.textContent = `<${elemTagName + elemAttrStr}>`;

  if (elemChildrenArr.length) {
    elemChildrenArr.forEach((el) => {
      divWrapper.insertAdjacentElement('beforeend', getElemWrappedHTML(el as HTMLElement));
    });
  }

  divWrapper.insertAdjacentText('beforeend', `</${elemTagName}>`);
  return divWrapper;
}
