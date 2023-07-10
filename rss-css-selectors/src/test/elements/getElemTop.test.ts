import { getElemTop } from '../../modules/utils/elements/getElemTop';

import { elemWithAttrs } from './mockElems';

beforeEach(() => {
  window.scrollY = 150;
});

describe('getElemLeft function:', () => {
  test('should return element left position', () => {
    expect(getElemTop(elemWithAttrs)).toBe(350);
  });
});
