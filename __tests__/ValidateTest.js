const Validate = require('../src/Validate');

describe('예외 테스트', () => {
  test.each([1, NaN])('다리 길이 예외 테스트', (input) => {
    expect(Validate.checkBridgeSize(input)).toBeFalsy();
  });

  test.each(['u', 'A', '!', ' '])('이동 키 예외 테스트', (input) => {
    expect(Validate.checkMovingKey(input)).toBeFalsy();
  });

  test.each(['r', 'A', '!', ' '])('명령 키 예외 테스트', (input) => {
    expect(Validate.checkCommandKey(input)).toBeFalsy();
  });
});
