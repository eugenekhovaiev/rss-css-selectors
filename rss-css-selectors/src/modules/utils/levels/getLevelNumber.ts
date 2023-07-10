export function getLevelNumber(string: string): number {
  const levelNumberStr = string.split(' ')[0];
  const levelNumber1Based = +levelNumberStr;
  if (levelNumberStr !== `${levelNumber1Based}`) {
    throw new Error(`'${string}' is not valid level name!`);
  }
  return levelNumber1Based - 1;
}
