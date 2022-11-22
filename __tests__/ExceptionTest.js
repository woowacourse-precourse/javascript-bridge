const {
  bridgeSizeValidator,
  directionValidator,
  commandValidator,
} = require('../src/Validator');

describe('예외 테스트', () => {
  test.each([
    ['03', true],
    ['a', false],
    [' 3', false],
    ['3.3', false],
    ['7', true],
    ['10', true],
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

  test.each([
    ['R', true],
    ['Q', true],
    ['2', false],
    ['', false],
    [' Rr', false],
    ['q', false],
  ])('재시도 선택 예외 테스트', (input, result) => {
    expect(commandValidator.isRegameOrQuit(input)).toEqual(result);
  });
});
