import { getElemLeft } from '../../modules/utils/elements/getElemLeft';

import { elemWithAttrs } from './mockElems';

beforeEach(() => {
  window.scrollX = 30;
});

describe('getElemLeft function:', () => {
  test('should return element left position', () => {
    expect(getElemLeft(elemWithAttrs)).toBe(130);
  });
});
