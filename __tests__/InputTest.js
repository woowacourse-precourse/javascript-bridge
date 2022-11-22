const {
  bridgeValidation,
  checkRetryBridge,
} = require('../src/validation/bridgeValidation');
const {
  movingValidation,
  checkRetryMoving,
} = require('../src/validation/movingValidation');
const {
  commandValidation,
  checkRetryCommand,
} = require('../src/validation/commandValidation');

describe('User Input 테스트', () => {
  test.each([3, 20])('다리 갯수 3~20까지의 숫자', (input) => {
    expect(bridgeValidation(input)).toBeTruthy();
  });

  test.each(['U', 'D'])('다리 이동 U/D의 문자 확인', (input) => {
    expect(movingValidation(input)).toBeTruthy();
  });

  test.each(['R', 'Q'])('재시작,종료 R/Q의 문자 확인', (input) => {
    expect(commandValidation(input)).toBeTruthy();
  });

  [
    ['다리 갯수 3~20까지의 숫자 예외 처리', bridgeValidation],
    ['다리 이동 U/D의 문자 확인 예외 처리', movingValidation],
    ['재시작,종료 R/Q의 문자 확인 예외 처리', commandValidation],
  ].forEach((element) => {
    const message = 0;
    const checkFunction = 1;
    test.each([1, 'a', '', ' '])(element[message], (input) => {
      expect(element[checkFunction](input)).toBeFalsy();
    });
  });
});

describe('User Retry Test', () => {
  test.each([3, 20])('다리 갯수 Error Retry 확인', (input) => {
    expect(checkRetryBridge(input)).toBeTruthy();
  });

  test.each(['U', 'D'])('다리 이동 Error Retry 확인', (input) => {
    expect(checkRetryMoving(input)).toBeTruthy();
  });

  test.each(['R', 'Q'])('재시작,종료 Error Retry 확인', (input) => {
    expect(checkRetryCommand(input)).toBeTruthy();
  });

  [
    ['다리 갯수 Error Retry 확인 예외 처리', checkRetryBridge],
    ['다리 이동 Error Retry 확인 예외 처리', checkRetryMoving],
    ['재시작,종료 Error Retry 확인 예외 처리', checkRetryCommand],
  ].forEach((element) => {
    const message = 0;
    const checkFunction = 1;
    test.each([1, 'a', '', ' '])(element[message], (input) => {
      expect(element[checkFunction](input)).toBeFalsy();
    });
  });
});
