const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('랜덤 값 테스트', () => {
  test('0 또는 1을 생성하는지 확인', () => {
    const result = BridgeRandomNumberGenerator.generate();

    expect(result === 0 || result === 1).toEqual(true);
  });

  test('0 또는 1이 아닌 경우', () => {
    const result = BridgeRandomNumberGenerator.generate();

    expect(result === 3).toEqual(false);
  });
});

afterAll(() => {
  Console.close();
});
