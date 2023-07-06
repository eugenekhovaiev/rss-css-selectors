export function writeStrCharByChar(to: HTMLInputElement, from: string): void {
  let i = 0;
  const interval = setInterval(() => {
    to.dispatchEvent(new Event('input'));
    if (i < from.length) {
      to.value += from[i];
      i += 1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}
