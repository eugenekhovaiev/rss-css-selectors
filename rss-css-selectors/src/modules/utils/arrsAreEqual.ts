export function arrsAreEqual(arrA: unknown[], arrB: unknown[]): boolean {
  if (arrA.length !== arrB.length) return false;
  for (let index = 0; index < arrA.length; index++) {
    if (arrA[index] !== arrB[index]) return false;
  }
  return true;
}
