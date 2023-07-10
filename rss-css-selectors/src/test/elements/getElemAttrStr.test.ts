import { getElemAttrStr } from '../../modules/utils/elements/getElemAttrStr';
import { elemWithoutAttrs, elemWithAttrs } from './mockElems';

describe('getElemAttrStr function:', () => {
  const strFromElemWithoutAttrs = getElemAttrStr(elemWithoutAttrs);
  const strFromElemWithAttrs = getElemAttrStr(elemWithAttrs);

  test('should return empty string on element with no attributes', () => {
    expect(strFromElemWithoutAttrs).toBe('');
  });

  test('should NOT include data attributes in returned string', () => {
    expect(strFromElemWithAttrs).not.toContain('data-test');
  });

  test('should NOT include classnames which contain "animate" in returned string', () => {
    expect(strFromElemWithAttrs).not.toContain('animate');
  });

  test('should NOT include attributes with empty value in returned string', () => {
    expect(strFromElemWithAttrs).not.toContain('emptyattr');
  });

  test('should return correct attributes string', () => {
    // expect(strFromElemWithAttrs[0]).toBe(' ');
    expect(strFromElemWithAttrs).toBe(' id="testid" class="test"');
  });
});
