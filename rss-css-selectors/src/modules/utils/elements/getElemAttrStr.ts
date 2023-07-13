import { SimpleUtilFunc } from '../../../types';

export const getElemAttrStr: SimpleUtilFunc<Element, string> = (elem) => {
  const elemAttrArr = [...elem.attributes].filter((attr) => !attr.name.includes('data'));
  let elemAttrStr = '';
  elemAttrArr.forEach((attr) => {
    let elemAttrValue = '';
    if (attr.name === 'class') {
      elemAttrValue = attr.value
        .split(' ')
        .filter((value) => !value.includes('animate'))
        .join(' ');
    } else {
      elemAttrValue = attr.value;
    }
    elemAttrStr += elemAttrValue ? ` ${attr.name}="${elemAttrValue}"` : '';
  });
  return elemAttrStr;
};
