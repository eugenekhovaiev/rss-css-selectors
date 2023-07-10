import { getElemWrapped } from '../../modules/utils/elements/getElemWrapped';

import { elemWithoutAttrs, elemWithAttrs } from './mockElems';

jest.mock('../../modules/utils/utils', () => {
  return {
    getElemTagName: jest.fn(() => 'test-tag-name'),
    getElemAttrStr: jest.fn(() => ' test-attr-string'),
  };
});

describe('getElemWrapped function:', () => {
  test('should return "div" element', () => {
    expect(getElemWrapped(elemWithAttrs).tagName).toBe('DIV');
  });

  test('should return wrapped element with basic childless element as text content', () => {
    expect(getElemWrapped(elemWithoutAttrs).textContent).toBe('<test-tag-name test-attr-string></test-tag-name>');
  });

  test('should return wrapped element children wrapped', () => {
    expect(getElemWrapped(elemWithAttrs).children[0].tagName).toBe('DIV');
  });

  test('should return wrapped element children with basic child element as text content', () => {
    expect(getElemWrapped(elemWithAttrs).children[0].textContent).toBe(
      '<test-tag-name test-attr-string></test-tag-name>'
    );
  });
});
