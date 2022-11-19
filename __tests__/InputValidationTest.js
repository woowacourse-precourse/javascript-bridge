const { isValidBridgeSize, isValidRound, isValidRetry } = require('../src/Error/InputValidation');

describe('InputValidation 테스트', () => {
  test.each([3, 4, 6, 20])(
    '3~20까지의 숫자인지 확인하는 isValidBridgeSize 메서드가 정상 동작하는지 확인한다.',
    (input) => expect(isValidBridgeSize(input)).toEqual(true)
  );
  test.each([1, 0, -5, 30])(
    '3~20까지의 숫자인지 확인하는 isValidBridgeSize 메서드가 정상적으로 예외를 처리하는지 확인한다.',
    (input) => expect(isValidBridgeSize(input)).toEqual(false)
  );
  test.each(['U', 'D'])(
    '입력값이 문자 "U" 혹은 "D"인지 확인하는 isValidRound 메서드가 정상 동작하는지 확인한다.',
    (input) => expect(isValidRound(input)).toEqual(true)
  );
  test.each(['Q', 'r', '1', 1])(
    '입력값이 문자 "U" 혹은 "D"인지 확인하는 isValidRound 메서드가 정상적으로 예외를 처리하는지 확인한다.',
    (input) => expect(isValidRound(input)).toEqual(false)
  );
  test.each(['Q', 'R'])(
    '입력값이 문자 "Q" 혹은 "R"인지 확인하는 isValidRetry 메서드가 정상 동작하는지 확인한다.',
    (input) => expect(isValidRetry(input)).toEqual(true)
  );
  test.each(['U', 'D', 'r', 1])(
    '입력값이 문자 "Q" 혹은 "R"인지 확인하는 isValidRetry 메서드가 정상적으로 예외를 처리하는지 확인한다.',
    (input) => expect(isValidRetry(input)).toEqual(false)
  );
});
