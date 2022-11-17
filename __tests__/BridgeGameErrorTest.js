const BridgeGameError = require('../src/BridgeGameError');

describe('BridgeGameError test', () => {
  test('원하는 메시지를 포함한 custom error객체가 생성된다.', () => {
    const testMessage = '테스트 에러입니다.';
    const testError = new BridgeGameError(testMessage);

    expect(() => {
      throw new BridgeGameError(testMessage);
    }).toThrowError(testError);
    expect(testError.name).toBe('BridgeGameError');
  });

  test('메시지에 prefix를 포함하고 있다.', () => {
    const testMessage = '테스트 에러입니다.';
    const testError = new BridgeGameError(testMessage);

    expect(testError.message).toBe(`[ERROR] ${testMessage}`);
  });
});
