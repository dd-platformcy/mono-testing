import { isEmptyObject } from './index';

describe('object helpers', () => {
  it('is Empty Object', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ 1: 2 })).toBe(false);
  });
});
