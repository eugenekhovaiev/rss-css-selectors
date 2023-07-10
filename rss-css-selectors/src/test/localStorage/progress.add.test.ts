import { progress } from '../../modules/utils/localStorage/progress';

jest.mock('../../modules/utils/utils', () => ({
  getProgressSaveObj: jest.fn(() => {
    return {
      completed: [0, 1, 2, 3],
      helped: [4, 5],
    };
  }),
}));

describe('method add while working with existing progress object:', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  test('should add level number', () => {
    progress.add(6, 'completed');
    const completedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).completed;
    expect(completedArr).toContain(6);
  });

  test('should add level number to existing helped array in localStorage', () => {
    progress.add(6, 'helped');
    const helpedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).helped;
    expect(helpedArr).toContain(6);
  });
});

jest.mock('../../modules/utils/utils', () => ({
  getProgressSaveObj: jest.fn(() => null),
}));

describe('method add while working with NOT existing progress object', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  test('should create progress object in localStorage with passed level number in competed array', () => {
    progress.add(7, 'completed');
    const completedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).completed;
    const helpedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).helped;
    expect(completedArr).toContain(7);
    expect(helpedArr).toHaveLength(0);
  });

  test('should create progress object in localStorage with passed level number in helped array', () => {
    progress.add(7, 'helped');
    const helpedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).helped;
    const completedArr = JSON.parse(window.localStorage.getItem('khovaiev-progress') as string).completed;
    expect(helpedArr).toContain(7);
    expect(completedArr).toHaveLength(0);
  });
});
