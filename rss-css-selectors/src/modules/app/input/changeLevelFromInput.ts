import { currLevel, highlightChosenLevel } from '../../utils/utils';

import { loadLevel } from '../loadLevel';

export function changeLevelFromInput(userInput: string): void {
  currLevel.set(+userInput - 1);
  loadLevel(currLevel.get());
  highlightChosenLevel(currLevel.get());
}
