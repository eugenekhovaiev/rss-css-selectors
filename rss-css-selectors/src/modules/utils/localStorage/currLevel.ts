export const currLevel = {
  get: function (): number {
    const currLevelSave = window.localStorage.getItem('khovaiev-currLevel');
    return currLevelSave ? +currLevelSave : 0;
  },
  set: function (value: number): number {
    localStorage.setItem('khovaiev-currLevel', value.toString());
    return value;
  },
  incr: function (): number {
    return this.set(this.get() + 1);
  },
};
