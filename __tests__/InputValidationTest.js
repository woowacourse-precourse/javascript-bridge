const { ERROR } = require('../src/constants/Messages');
const {
  checkValidBridgeSize,
  checkValidSpace,
  checkValidRetry,
} = require('../src/InputValidation');

test.each([1, 0, -5, 30])(
  '3~20까지의 숫자인지 확인하는 isValidBridgeSize 메서드가 정상적으로 예외를 처리하는지 확인한다.',
  (input) => expect(() => checkValidBridgeSize(input)).toThrow(ERROR)
);

test.each(['Q', 'r', '1', 1])(
  '입력값이 문자 "U" 혹은 "D"인지 확인하는 isValidRound 메서드가 정상적으로 예외를 처리하는지 확인한다.',
  (input) => expect(() => checkValidSpace(input)).toThrow(ERROR)
);

test.each(['U', 'D', 'r', 1])(
  '입력값이 문자 "Q" 혹은 "R"인지 확인하는 isValidRetry 메서드가 정상적으로 예외를 처리하는지 확인한다.',
  (input) => expect(() => checkValidRetry(input)).toThrow(ERROR)
);
