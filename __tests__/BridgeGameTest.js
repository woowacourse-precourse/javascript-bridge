const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getBridgeGame = (random) => {
  if (random) mockRandoms(random);
  const bridgeGame = new BridgeGame(random.length);

  return bridgeGame;
};

describe('BridgeGame 클래스 테스트', () => {
  test('move: 다리 중간에서 틀린 경우 false 반환', () => {
    const bridgeGame = getBridgeGame(['1', '0', '1']);

    expect(bridgeGame.move('U')).toEqual(true);
    expect(bridgeGame.move('U')).toEqual(false);
  });

  test('move: 다리 끝까지 이동한 경우 false 반환', () => {
    const bridgeGame = getBridgeGame(['1', '0', '1']);

    expect(bridgeGame.move('U')).toEqual(true);
    expect(bridgeGame.move('D')).toEqual(true);
    expect(bridgeGame.move('U')).toEqual(false);
  });

  test('isFailed: 다리 중간에서 틀린 경우 true 반환', () => {
    const bridgeGame = getBridgeGame(['1', '0', '1']);

    bridgeGame.move('U');
    expect(bridgeGame.isFailed()).toEqual(false);

    bridgeGame.move('U');
    expect(bridgeGame.isFailed()).toEqual(true);
  });

  test('isFinished: 다리 끝까지 이동한 경우 true 반환', () => {
    const bridgeGame = getBridgeGame(['1', '0', '1']);

    bridgeGame.move('U');
    expect(bridgeGame.isFinished()).toEqual(false);

    bridgeGame.move('D');
    expect(bridgeGame.isFinished()).toEqual(false);

    bridgeGame.move('U');
    expect(bridgeGame.isFinished()).toEqual(true);
  });

  test('getSingleResultArray: 다리 배열을 위/아래 각각 변환', () => {
    const commands = ['U', 'D', 'U'];
    const upper = ['O', ' ', 'O'];
    const lower = [' ', 'O', ' '];

    const bridgeGame = getBridgeGame(['1', '0', '1']);

    expect(bridgeGame.getSingleResultArray('U', commands)).toEqual(upper);
    expect(bridgeGame.getSingleResultArray('D', commands)).toEqual(lower);
  });

  test('getFailedMarkedResultArrays: 실패 지점을 표시', () => {
    const commands = ['U', 'D', 'D'];
    const upper = ['O', ' ', 'O'];
    const lower = [' ', 'O', ' '];

    const bridgeGame = getBridgeGame(['1', '0', '1']);

    commands.forEach((direction) => bridgeGame.move(direction));

    expect(bridgeGame.getFailedMarkedResultArrays({ upper, lower })).toEqual({
      upper: ['O', ' ', ' '],
      lower: [' ', 'O', 'X'],
    });
  });
});
