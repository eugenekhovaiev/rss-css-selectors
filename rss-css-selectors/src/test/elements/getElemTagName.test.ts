import { getElemTagName } from '../../modules/utils/elements/getElemTagName';

import { elemWithAttrs } from './mockElems';

describe('getElemTagName function:', () => {
  test('should return element tag name', () => {
    expect(getElemTagName(elemWithAttrs)).toBe('div');
  });
});
