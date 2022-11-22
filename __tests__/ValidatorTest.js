const Validator = require('../src/Validator');

describe('유효성 검증 테스트', () => {
  test.each([
    ['-50'], ['1'], [' '], ['c'],
    ['21'], [''], ['500'], ['hello'],
  ])('bridgeSize:%s => error', (input) => {
    expect(() => Validator.bridgeSizeValidate(input)).toThrow();
  });

  test.each([
    ['3'], ['4'], ['5'], ['6'],
    ['17'], ['18'], ['19'], ['20'],
  ])('bridgeSize:%s => success', (input) => {
    expect(() => Validator.bridgeSizeValidate(input)).not.toThrow();
  });
});
