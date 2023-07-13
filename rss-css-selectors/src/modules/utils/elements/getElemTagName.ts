import { SimpleUtilFunc } from '../../../types';

export const getElemTagName: SimpleUtilFunc<Element, string> = (elem) => elem.tagName.toLowerCase();
