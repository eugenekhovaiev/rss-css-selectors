import { SimpleUtilFunc } from '../../../types';

export const getElemLeft: SimpleUtilFunc<Element, number> = (elem) => elem.getBoundingClientRect().left + window.scrollX;
