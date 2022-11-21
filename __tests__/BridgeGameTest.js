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
    mockRandoms(['1', '0', '0']);
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
});
