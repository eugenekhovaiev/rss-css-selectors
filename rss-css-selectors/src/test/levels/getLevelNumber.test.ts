import { getLevelNumber } from '../../modules/utils/levels/getLevelNumber';

describe('getLevelNumber function:', () => {
  test('should return level zero based number from its name', () => {
    expect(getLevelNumber('12 Level')).toBe(11);
  });

  test('should throw error on invalid level name', () => {
    expect(() => {
      getLevelNumber('Level 12');
    }).toThrow(`'Level 12' is not valid level name!`);
  });
});
