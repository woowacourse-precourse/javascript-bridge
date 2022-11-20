const { isCommandRetry } = require('../src/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('IsCommandRetry - 커맨드에 맞게 올바른 값을 반환하는지 검사', () => {
    // Given
    const commands = ['R', 'Q'];

    // When
    const expected = commands.map((command) => isCommandRetry(command));
    const result = [true, false];

    // Then
    expect(expected).toStrictEqual(result);
  });
});
