import { getProgressSaveObj } from '../../modules/utils/localStorage/getProgressSaveObj';

describe('getProgressSaveObj function:', () => {
  // afterEach(() => {
  //   window.localStorage.clear();
  // });

  test('should return null if progress is missing in localStorage', () => {
    expect(getProgressSaveObj()).toBeNull();
  });

  test('should return correct progress object from localStorage', () => {
    const progressObj = {
      completed: [0, 1, 2, 3],
      helped: [4, 5],
    };
    window.localStorage.setItem('khovaiev-progress', JSON.stringify(progressObj));
    expect(getProgressSaveObj()).toEqual(progressObj);
  });
});
