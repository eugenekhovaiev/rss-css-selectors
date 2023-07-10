import { currLevel } from '../../modules/utils/localStorage/currLevel';

describe('currLevel:', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  test('method get should return 0 when localStorage is empty', () => {
    expect(currLevel.get()).toBe(0);
  });

  test('method get should return value from localStorage', () => {
    window.localStorage.setItem('khovaiev-currLevel', '3');
    expect(currLevel.get()).toBe(3);
  });

  test('method set should put value in localStorage', () => {
    currLevel.set(4);
    expect(window.localStorage.getItem('khovaiev-currLevel')).toBe('4');
  });

  test('method incr should increment current level value in localStorage by 1', () => {
    window.localStorage.setItem('khovaiev-currLevel', '5');
    currLevel.incr();
    expect(window.localStorage.getItem('khovaiev-currLevel')).toBe('6');
  });
});
