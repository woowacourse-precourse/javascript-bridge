const MissionUtils = require('@woowacourse/mission-utils');
const Bridge = require('../src/Bridge');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe('다리 관련 로직 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridge = new Bridge(3);

  test.each([
    ['U', 0],
    ['D', 1],
    ['U', 2],
  ])('플레이어의 입력이 다리의 안전한 부분인지 비교', (input, idx) => {
    expect(bridge.compare(input, idx)).toEqual(true);
  });

  test.each([0, 1, 2])('플레이어가 더 움직일 수 있음 테스트', (moveCount) => {
    expect(bridge.canMoveMore(moveCount)).toEqual(true);
  });

  test.each([3, 4, 5])('플레이어가 더 움직일 수 없음 테스트', (moveCount) => {
    expect(bridge.canMoveMore(moveCount)).toEqual(false);
  });
});
