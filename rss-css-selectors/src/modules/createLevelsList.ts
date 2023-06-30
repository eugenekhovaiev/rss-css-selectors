import { levels } from './levels';
import { currLevel } from './tools';
import { loadLevel } from './loadLevel';

export function createLevelsList(): void {
  const levelsList = document.querySelector('.levels-menu__list') as HTMLElement;
  levels.forEach((level) => {
    const listItem = document.createElement('li');
    listItem.classList.add('level-item');
    listItem.innerHTML = level.description;
    levelsList.insertAdjacentElement('beforeend', listItem);
  });

  const levelsListItems: Element[] = [...levelsList.children];
  levelsListItems.forEach((item) => {
    item.addEventListener('click', () => {
      const levelNumber = getLevelNumber(item);
      currLevel.set(levelNumber);
      loadLevel(levelNumber);
    });
  });
}

function getLevelNumber(listItem: Element): number {
  return +listItem.innerHTML.split(' ').slice(0, 1) - 1;
}
