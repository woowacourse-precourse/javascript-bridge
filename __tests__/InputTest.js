const { bridgeValidation } = require('../src/validation/bridgeValidation');
const { movingValidation } = require('../src/validation/movingValidation');
const { commandValidation } = require('../src/validation/commandValidation');

describe('User Input 테스트', () => {
  test.each([3, 20])('다리 갯수 3~20까지의 숫자', (input) => {
    expect(bridgeValidation(input)).toBeTruthy();
  });

  test.each([1, 'a', '', ' '])(
    '다리 갯수 3~20까지의 숫자 예외 처리',
    (input) => {
      expect(bridgeValidation(input)).toBeFalsy();
    }
  );

  test.each(['U', 'D'])('다리 이동 U/D의 문자 확인', (input) => {
    expect(movingValidation(input)).toBeTruthy();
  });

  test.each([1, 'a', '', ' '])(
    '다리 이동 U/D의 문자 확인 예외 처리',
    (input) => {
      expect(movingValidation(input)).toBeFalsy();
    }
  );

  test.each(['R', 'Q'])('재시작,종료 R/Q의 문자 확인', (input) => {
    expect(commandValidation(input)).toBeTruthy();
  });

  test.each([1, 'a', '', ' '])(
    '재시작,종료 R/Q의 문자 확인 예외 처리',
    (input) => {
      expect(commandValidation(input)).toBeFalsy();
    }
  );
});
