const { validateBridge, validateMove, validateRetry } = require('../src/utils/validate');
describe('다리 예외 케이스', () => {
  test.each(['a', ' ', '!'])('다리 길이로 숫자가 아닌 값이 들어오면 에러가 발생한다.', (input) => {
    expect(() => {
      validateBridge(input).toThrow('[ERROR]');
    });
  });

  test.each([0, 1, 30])('다리 길이가 3미만 20초과라면 에러가 발생한다.', (input) => {
    expect(() => {
      validateBridge(input).toThrow('[ERROR]');
    });
  });
});
