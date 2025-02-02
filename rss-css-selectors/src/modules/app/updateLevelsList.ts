import { levels } from '../globals/levels';
import { levelsListElem } from '../globals/elemsFromHTML';

import { currLevel, getLevelNumber, highlightChosenLevel, getLevelCompletionClass } from '../utils/utils';

import { loadLevel } from './loadLevel';

export function updateLevelsList(): void {
  levelsListElem.innerHTML = '';
  levels.forEach((level, index) => {
    const listItemIcon = document.createElement('div');
    listItemIcon.classList.add('level-item__icon');

    const listItem = document.createElement('li');
    listItem.classList.add('level-item', getLevelCompletionClass(level));
    if (index === currLevel.get()) {
      listItem.classList.add('level-item_chosen');
    }
    listItem.textContent = level.description;
    listItem.insertAdjacentElement('afterbegin', listItemIcon);

    levelsListElem.insertAdjacentElement('beforeend', listItem);
  });

  const levelsListItems: Element[] = [...levelsListElem.children];
  levelsListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      highlightChosenLevel(index);
      const itemInnerText = item.textContent;
      if (typeof itemInnerText !== 'string') {
        throw new Error(`Missing inner text in levels list item number ${index + 1}`);
      }
      const levelNumber = getLevelNumber(itemInnerText);
      currLevel.set(levelNumber);
      loadLevel(levelNumber);
    });
  });
}
