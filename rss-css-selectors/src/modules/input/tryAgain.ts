export function tryAgain(): void {
  const editors = document.querySelector('.editors-wrapper') as HTMLElement;
  editors.classList.add('animate__animated', 'animate__headShake', 'animate__fast');

  setTimeout(() => {
    editors.classList.remove('animate__animated', 'animate__headShake', 'animate__fast');
  }, 300);
}
