import { levelsListElem } from '../../globals/elemsFromHTML';

export function highlightChosenLevel(levelNumber: number): void {
  const levelsListItems: Element[] = [...levelsListElem.children];
  levelsListItems.forEach((listItem) => {
    listItem.classList.remove('level-item_chosen');
  });
  levelsListItems[levelNumber].classList.add('level-item_chosen');
}
