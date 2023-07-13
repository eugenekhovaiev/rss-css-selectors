import { SimpleUtilFunc } from '../../../types';

import { levelsListElem } from '../../globals/elemsFromHTML';

export const highlightChosenLevel: SimpleUtilFunc<number, void> = (levelNumber) => {
  const levelsListItems: Element[] = [...levelsListElem.children];
  levelsListItems.forEach((listItem) => {
    listItem.classList.remove('level-item_chosen');
  });
  levelsListItems[levelNumber].classList.add('level-item_chosen');
};
