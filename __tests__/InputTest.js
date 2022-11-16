const bridgeValidation = require('../src/validation/bridgeValidation');

describe('User Input 테스트', () => {
  test('다리 갯수 3~20까지의 숫자', () => {
    expect(bridgeValidation(3)).toBeTruthy();
    expect(bridgeValidation(1)).toBeFalsy();
    expect(bridgeValidation('a')).toBeFalsy();
    expect(bridgeValidation('')).toBeFalsy();
    expect(bridgeValidation(' ')).toBeFalsy();
  });
});
