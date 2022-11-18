const InputValidator = require('../src/utils/InputValidator');

describe('입력 유효성 검사 테스트', () => {
  test('빈 값 유효성 검증', () => {
    const input = '';

    expect(() => {
      InputValidator.validateEmpty(input);
    }).toThrow('[ERROR]');
  });

  test('공백 포함 유효성 검증', () => {
    const input = ' 1';

    expect(() => {
      InputValidator.validateSpace(input);
    }).toThrow('[ERROR]');
  });

  test('숫자 유효성 검증', () => {
    const input = 'a';

    expect(() => {
      InputValidator.validateNumber(input);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' 1'], ['a']])('다리 길이 값이 숫자가 아닌 경우 예외 처리', (size) => {
    expect(() => {
      InputValidator.validateSize(size);
    }).toThrow('[ERROR]');
  });

  test.each([['2'], ['-1'], ['21']])('다리 길이 값이 3미만 20초과인 경우 예외 처리', (size) => {
    expect(() => {
      InputValidator.validateSize(size);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' '], ['a'], ['2']])('이동 값이 U 또는 D가 아닌 경우 예외 처리', (input) => {
    expect(() => {
      InputValidator.validateMovingCommand(input);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' '], ['a'], ['2']])(
    '게임 커맨드 값이 R 또는 Q가 아닌 경우 예외 처리',
    (input) => {
      expect(() => {
        InputValidator.validateGameCommand(input);
      }).toThrow('[ERROR]');
    },
  );
});
