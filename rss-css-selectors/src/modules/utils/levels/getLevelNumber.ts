export function getLevelNumber(string: string): number {
  return +string.split(' ').slice(0, 1) - 1;
}
