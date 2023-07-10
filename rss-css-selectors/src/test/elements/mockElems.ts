export const elemWithoutAttrs = document.createElement('input');

export const elemWithAttrs = document.createElement('div');
elemWithAttrs.setAttribute('data-test', 'datatestvalue');
elemWithAttrs.setAttribute('emptyattr', '');
elemWithAttrs.setAttribute('id', 'testid');
elemWithAttrs.classList.add('test', 'animate__animated');
elemWithAttrs.insertAdjacentElement('beforeend', document.createElement('span'));

Element.prototype.getBoundingClientRect = jest.fn(() => {
  return {
    left: 100,
    top: 200,
  } as DOMRect;
});
