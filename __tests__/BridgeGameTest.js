const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');
const { BRIDGE, MAP } = require('../src/constant/Bridge');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BridgeGame 클래스 테스트', () => {
  test('다리를 건너고 현재까지 다리를 건넌 상태를 저장한다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.UP];
    const upper = [MAP.PASS, MAP.BLANK, MAP.NONPASS];
    const lower = [MAP.BLANK, MAP.PASS, MAP.BLANK];
    const expectedOutput = [lower, upper];
    const size = 3;
    const game = new BridgeGame(size);

    inputs.forEach((input) => {
      game.move(input);
    });

    const map = game.getMap();
    expect(map).toEqual(expectedOutput);
  });

  test('다리를 무사히 건넜는지 확인한다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN];
    const expectedOutput = [true, false];
    const size = 3;

    inputs.forEach((input, index) => {
      const game = new BridgeGame(size);
      game.move(input);
      const output = game.isPass();
      expect(output).toEqual(expectedOutput[index]);
    });
  });

  test('다리를 전부 건넜는지 확인한다. case: 전부 건넌다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.DOWN];
    const expectedOutput = true;
    const size = 3;
    const game = new BridgeGame(size);

    inputs.forEach((input) => {
      game.move(input);
    });

    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });

  test('다리를 전부 건넜는지 확인한다. case: 마지막 칸을 건너다 실패한다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.UP];
    const expectedOutput = false;
    const size = 3;
    const game = new BridgeGame(size);

    inputs.forEach((input) => {
      game.move(input);
    });

    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });

  test('다리를 전부 건넜는지 확인한다. case: 마지막 칸이 아닌 부분을 건너다 실패한다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN];
    const expectedOutput = false;
    const size = 3;
    const game = new BridgeGame(size);

    inputs.forEach((input) => {
      game.move(input);
    });

    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });

  test('재시도를 위한 설정을 한다.', () => {
    mockRandoms([BRIDGE.UPPER, BRIDGE.LOWER, BRIDGE.LOWER]);

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.UP];
    const upper = [MAP.PASS];
    const lower = [MAP.BLANK];
    const expectedTryCount = 2;
    const expectedMap = [lower, upper];
    const size = 3;
    const game = new BridgeGame(size);

    inputs.forEach((input) => {
      game.move(input);
    });
    game.retry();
    game.move(BRIDGE.UP);

    const tryCount = game.getTryCount();
    const map = game.getMap();
    expect(tryCount).toBe(expectedTryCount);
    expect(map).toEqual(expectedMap);
  });
});
