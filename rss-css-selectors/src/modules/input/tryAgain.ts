import { editorsWrapperElem } from '../globals/elemsFromHTML';

export function tryAgain(): void {
  editorsWrapperElem.classList.add('animate__animated', 'animate__headShake', 'animate__fast');

  setTimeout(() => {
    editorsWrapperElem.classList.remove('animate__animated', 'animate__headShake', 'animate__fast');
  }, 300);
}
