const Validation = require('../src/Validation');
const { ERROR } = require('../src/Constants');

describe('다리 길이 유효성 테스트', () => {
  test.each([['a'], ['#'], [' ']])('다리 길이가 문자이면 예외가 발생한다.', (input) => {
    expect(() => {
      Validation.checkBridgeSize(input);
    }).toThrow(ERROR.NOT_NUMBER);
  });

  test.each([['2'], ['21']])(
    '다리 길이가 3부터 20까지의 숫자가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validation.checkBridgeSize(input);
      }).toThrow(ERROR.NOT_THREE_TO_TWENTY);
    }
  );
  test.each([['3'], ['20']])(
    '다리 길이가 올바르게 입력되면 아무 문제도 발생하지 않는다.',
    (input) => {
      expect(() => {
        Validation.checkBridgeSize(input);
      }).not.toThrow();
    }
  );
});
