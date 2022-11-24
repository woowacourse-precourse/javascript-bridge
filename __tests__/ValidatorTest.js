const Validator = require('../src/Validator');

describe('유효성 검증 테스트', () => {
  test.each([
    ['-50'], ['1'], [' '], ['c'], ['10.1'],
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
  test.each([
    ['u'], ['d'], ['1'], ['2'],
    ['UD'], ['DU'], ['Z'], [''],
  ])('movement: %s => error', (input) => {
    expect(() => Validator.movingValidate(input)).toThrow();
  });

  test.each([
    ['U'], ['D'],
  ])('movement: %s => success', (input) => {
    expect(() => Validator.movingValidate(input)).not.toThrow();
  });
  test.each([
    ['r'], ['q'], ['1'], ['2'],
    ['RQ'], ['QR'], ['Z'], [''],
  ])('command: %s => success', (input) => {
    expect(() => Validator.commandValidate(input)).toThrow();
  });

  test.each([
    ['R'], ['Q'],
  ])('command: %s => success', (input) => {
    expect(() => Validator.commandValidate(input)).not.toThrow();
  });
});
