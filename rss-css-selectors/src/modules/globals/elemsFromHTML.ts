import { ElemType } from '../../types';

function getElem<T>(selector: string, elemType: ElemType<T>): T {
  const elem = document.querySelector(selector);
  if (!(elem instanceof elemType)) {
    throw new Error(`Element with '${selector}' class is missing!`);
  }
  return elem;
}

export const taskElem = getElem<HTMLHeadingElement>('.task', HTMLHeadingElement);
export const helpButtonElem = getElem<HTMLButtonElement>('.help-button', HTMLButtonElement);
export const tableElem = getElem<HTMLDivElement>('.table', HTMLDivElement);
export const hintElem = getElem<HTMLDivElement>('.hint', HTMLDivElement);

export const editorsWrapperElem = getElem<HTMLElement>('.editors-wrapper', HTMLElement);
export const inputElem = getElem<HTMLInputElement>('.editor__input', HTMLInputElement);
export const enterButtonElem = getElem<HTMLButtonElement>('.editor__button', HTMLButtonElement);

export const viewerElem = getElem<HTMLDivElement>('.editor_viewer .editor__codefield', HTMLDivElement);

export const levelsMenuElem = getElem<HTMLElement>('.levels-menu', HTMLElement);
export const burgerElem = getElem<HTMLDivElement>('.burger', HTMLDivElement);
export const levelsListElem = getElem<HTMLUListElement>('.levels-menu__list', HTMLUListElement);
export const resetButtonElem = getElem<HTMLButtonElement>('.levels-menu__button', HTMLButtonElement);
