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
    mockRandoms([1, 0, 0]);
    //bridge = ['U','D','D']

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.UP];
    const upper = [MAP.PASS, MAP.BLANK, MAP.NONPASS];
    const lower = [MAP.BLANK, MAP.PASS, MAP.BLANK];
    const expectedOutput = [lower, upper];

    const game = new BridgeGame(3);
    inputs.forEach((input) => {
      game.move(input);
    });
    const map = game.getMap();

    expect(map).toEqual(expectedOutput);
  });

  test('다리를 무사히 건넜는지 확인한다.', () => {
    mockRandoms([1, 0, 0]);
    //bridge = ['U','D','D']

    const inputs = [BRIDGE.UP, BRIDGE.DOWN];
    const expectedOutput = [true, false];

    inputs.forEach((input, index) => {
      const game = new BridgeGame(3);
      game.move(input);
      const output = game.isPass();
      expect(output).toEqual(expectedOutput[index]);
    });
  });

  test('다리를 전부 건넜는지 확인한다. case1', () => {
    mockRandoms([1, 0, 0]);
    //bridge = ['U','D','D']

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.DOWN];
    const expectedOutput = true;
    const game = new BridgeGame(3);

    inputs.forEach((input) => {
      game.move(input);
    });
    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });

  test('다리를 전부 건넜는지 확인한다. case2', () => {
    mockRandoms([1, 0, 0]);
    //bridge = ['U','D','D']

    const inputs = [BRIDGE.UP, BRIDGE.DOWN, BRIDGE.UP];
    const expectedOutput = false;
    const game = new BridgeGame(3);

    inputs.forEach((input) => {
      game.move(input);
    });
    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });

  test('다리를 전부 건넜는지 확인한다. case3', () => {
    mockRandoms([1, 0, 0]);
    //bridge = ['U','D','D']

    const inputs = [BRIDGE.UP, BRIDGE.DOWN];
    const expectedOutput = false;
    const game = new BridgeGame(3);

    inputs.forEach((input) => {
      game.move(input);
    });
    const output = game.isClear();
    expect(output).toEqual(expectedOutput);
  });
});
