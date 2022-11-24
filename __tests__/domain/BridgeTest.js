const MissionUtils = require('@woowacourse/mission-utils');
const Bridge = require('../../src/domain/Bridge');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

// eslint-disable-next-line max-lines-per-function
describe('Bridge 테스트', () => {
  const bridge = new Bridge();
  beforeEach(() => {
    mockRandoms([1, 0, 1]); // U D U
    bridge.make(3);
  });

  test('플레이어가 현재 다리의 마지막까지 도달했는지 알 수 있다.', () => {
    expect(bridge.isLastPosition(3)).toEqual(true);
  });

  test('다리를 건널 수 있는지 알 수 있다.', () => {
    expect(bridge.canCross('U', 0)).toEqual(true);
    expect(bridge.canCross('U', 1)).toEqual(false);
  });
});
