import { progress } from '../../modules/utils/localStorage/progress';

jest.mock('../../modules/utils/utils', () => ({
  getProgressSaveObj: jest.fn(() => {
    return {
      completed: [0, 1, 2, 3],
      helped: [4, 5],
    };
  }),
}));

describe('progress method has', () => {
  test('method has should return false if level number is NOT completed', () => {
    expect(progress.has(4, 'completed')).toBe(false);
  });

  test('method has should return true if level number is completed', () => {
    expect(progress.has(0, 'completed')).toBe(true);
  });

  test('method has should return false if level number is NOT helped', () => {
    expect(progress.has(1, 'helped')).toBe(false);
  });

  test('method has should return true if level number is helped', () => {
    expect(progress.has(5, 'helped')).toBe(true);
  });
});
