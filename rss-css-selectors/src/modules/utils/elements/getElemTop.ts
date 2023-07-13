import { SimpleUtilFunc } from '../../../types';

export const getElemTop: SimpleUtilFunc<Element, number> = (elem) => elem.getBoundingClientRect().top + window.scrollY;
