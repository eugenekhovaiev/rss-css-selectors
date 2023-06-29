export const getElemTagName = (elem: Element): string => elem.tagName.toLowerCase();

export function getElemAttrStr(elem: Element): string {
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
}

export const getElemTop = (elem: Element): number => elem.getBoundingClientRect().top + window.scrollY;

export const getElemLeft = (elem: Element): number => elem.getBoundingClientRect().left + window.scrollX;
