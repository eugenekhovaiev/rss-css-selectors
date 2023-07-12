import { arrsAreEqual } from '../modules/utils/arrsAreEqual';

describe('arrsAreEqual function:', () => {
  test('should return false on arrays with different lenghts', () => {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [0, 1, 2];
    expect(arrsAreEqual(arr1, arr2)).toBe(false);
  });

  test('should return false on arrays with same lengths but different values', () => {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [1, 1, 2, 3];
    expect(arrsAreEqual(arr1, arr2)).toBe(false);
  });

  test('should return true on two equal array', () => {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [0, 1, 2, 3];
    expect(arrsAreEqual(arr1, arr2)).toBe(true);
  });

  test('should work with object arrays', () => {
    const arr1 = [{}, { name: 'Viktor', surname: 'Viktor' }, { name: 'Sania', surname: 'Sania' }];
    const arr2 = [...arr1];
    expect(arrsAreEqual(arr1, arr2)).toBe(true);
  });
});
