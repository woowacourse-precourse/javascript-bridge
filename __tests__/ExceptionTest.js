const { bridgeSizeValidator, directionValidator } = require('../src/Validator');

describe('예외 테스트', () => {
  test.each([
    ['03', false],
    ['a', false],
    [' 3', false],
    ['3.3', false],
    [' ', false],
    ['18', true],
  ])('숫자 예외 테스트(자연수만)', (input, result) => {
    expect(bridgeSizeValidator.isNumber(input)).toEqual(result);
  });

  test.each([
    ['1', false],
    ['21', false],
    ['3', true],
    ['20', true],
  ])('범위 예외 테스트', (input, result) => {
    expect(bridgeSizeValidator.isValidRange(Number(input))).toEqual(result);
  });

  test.each([
    ['U', true],
    ['D', true],
    ['32', false],
    ['', false],
    [' D', false],
    ['DD', false],
  ])('이동할 칸 선택 예외 테스트', (input, result) => {
    expect(directionValidator.isUpOrDown(input)).toEqual(result);
  });
});
