export function highlightChosenLevel(levelNumber: number): void {
  const levelsListItems: Element[] = [...document.querySelectorAll('.level-item')];
  levelsListItems.forEach((listItem) => {
    listItem.classList.remove('level-item_chosen');
  });
  levelsListItems[levelNumber].classList.add('level-item_chosen');
}
