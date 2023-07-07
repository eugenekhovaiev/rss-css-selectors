import { hintElem } from '../../globals/elemsFromHTML';

export function hideHint(): void {
  hintElem.removeAttribute('style');
  hintElem.textContent = '';
}
