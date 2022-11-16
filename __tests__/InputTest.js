const bridgeValidation = require('../src/validation/bridgeValidation');
const movingValidation = require('../src/validation/movingValidation');

describe('User Input 테스트', () => {
  test('다리 갯수 3~20까지의 숫자', () => {
    expect(bridgeValidation(3)).toBeTruthy();
    expect(bridgeValidation(1)).toBeFalsy();
    expect(bridgeValidation('a')).toBeFalsy();
    expect(bridgeValidation('')).toBeFalsy();
    expect(bridgeValidation(' ')).toBeFalsy();
  });

  test('다리 이동 U/D의 문자 확인', () => {
    expect(movingValidation('U')).toBeTruthy();
    expect(movingValidation('D')).toBeTruthy();
    expect(movingValidation(1)).toBeFalsy();
    expect(movingValidation('a')).toBeFalsy();
    expect(movingValidation('')).toBeFalsy();
    expect(movingValidation(' ')).toBeFalsy();
  });
});
