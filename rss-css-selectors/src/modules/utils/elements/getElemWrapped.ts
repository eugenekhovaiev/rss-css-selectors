import { SimpleUtilFunc } from '../../../types';

import { getElemTagName, getElemAttrStr } from '../utils';

export const getElemWrapped: SimpleUtilFunc<Element, HTMLElement> = (elem) => {
  const elemChildrenArr = [...elem.children];
  const elemTagName = getElemTagName(elem);
  const elemAttrStr = getElemAttrStr(elem);

  const divWrapper = document.createElement('div');
  divWrapper.textContent = `<${elemTagName + elemAttrStr}>`;

  if (elemChildrenArr.length) {
    elemChildrenArr.forEach((el) => {
      if (!(el instanceof HTMLElement)) {
        throw new Error(`Element ${el.outerHTML} is not an HTML element!`);
      }
      divWrapper.insertAdjacentElement('beforeend', getElemWrapped(el));
    });
  }

  divWrapper.insertAdjacentText('beforeend', `</${elemTagName}>`);
  return divWrapper;
};
