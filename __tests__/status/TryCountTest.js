const TryCount = require('../../src/models/status/TryCount');

describe('시도 횟수 클래스 테스트', () => {
  const tryCount = new TryCount();

  test('시도 횟수의 초기값은 0', () => {
    const result = tryCount.getState();

    expect(result).toEqual(0);
  });

  test('시도 횟수 증가', () => {
    tryCount.increment();
    const result = tryCount.getState();

    expect(result).toEqual(1);
  });
});
