import { CurrLevelUtils } from '../../../types';

export const currLevel: CurrLevelUtils = {
  get: function () {
    const currLevelSave = window.localStorage.getItem('khovaiev-currLevel');
    return currLevelSave ? +currLevelSave : 0;
  },
  set: function (value) {
    localStorage.setItem('khovaiev-currLevel', value.toString());
    return value;
  },
  incr: function () {
    return this.set(this.get() + 1);
  },
};
