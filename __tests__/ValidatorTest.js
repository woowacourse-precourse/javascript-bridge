const Validator = require('../src/utils/Validator');

const getExceptionTest = (inputList, validatorFunction) => {
  return () => {
    inputList.forEach((input) => {
      expect(() => {
        validatorFunction(input);
      }).toThrow();
    });
  };
};

describe('Validator 테스트', () => {
  test(
    '문자열 중 숫자가 아니면 예외가 발생한다.',
    getExceptionTest(['3.0', '+3'], Validator.checkNumber)
  );

  test(
    '다리 길이가 3 미만이면 예외가 발생한다.',
    getExceptionTest(['2', '-3'], Validator.checkBridgeSize)
  );

  test(
    '다리 길이가 20 초과면 예외가 발생한다.',
    getExceptionTest(['21'], Validator.checkBridgeSize)
  );

  test(
    'U 와 D 중 한 글자가 아니면 예외가 발생한다.',
    getExceptionTest(['UU', 'DD', 'U ', 'S'], Validator.checkMoving)
  );

  test(
    'R 과 Q 중 한 글자가 아니면 예외가 발생한다.',
    getExceptionTest(['RR', 'QQ', 'R ', 'S'], Validator.checkGameCommand)
  );
});
