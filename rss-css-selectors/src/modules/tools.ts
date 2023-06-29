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

export function arrAreEqual(arrA: unknown[], arrB: unknown[]): boolean {
  if (arrA.length !== arrB.length) return false;
  arrA.forEach((item, index) => {
    if (item !== arrB[index]) return false;
  });
  return true;
}

export const currLevel = {
  get: function (): number {
    const save = window.localStorage.getItem('currLevel');
    return save ? +save : 0;
  },
  set: function (value: number): number {
    localStorage.setItem('currLevel', value.toString());
    return value;
  },
  incr: function (): number {
    return this.set(this.get() + 1);
  },
};
