import { levels } from './levels';
import { getLevelNumber, currLevel, progress, highlightChosenLevel } from './tools';
import { loadLevel } from './loadLevel';
import { Level } from '../types';

export function updateLevelsList(): void {
  const levelsList = document.querySelector('.levels-menu__list') as HTMLElement;
  levelsList.innerHTML = '';
  levels.forEach((level, index) => {
    const listItemIcon = document.createElement('div');
    listItemIcon.classList.add('level-item__icon');

    const listItem = document.createElement('li');
    listItem.classList.add('level-item', getCompletionClass(level));
    if (index === currLevel.get()) {
      listItem.classList.add('level-item_chosen');
    }
    listItem.textContent = level.description;
    listItem.insertAdjacentElement('afterbegin', listItemIcon);

    levelsList.insertAdjacentElement('beforeend', listItem);
  });

  const levelsListItems: Element[] = [...levelsList.children];
  levelsListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      highlightChosenLevel(index);
      const levelNumber = getLevelNumber(item.textContent as string);
      currLevel.set(levelNumber);
      loadLevel(levelNumber);
    });
  });
}

function getCompletionClass(level: Level): string {
  if (progress.completed.has(getLevelNumber(level.description))) return 'level-item_completed';
  return 'level-item_incompleted';
}
