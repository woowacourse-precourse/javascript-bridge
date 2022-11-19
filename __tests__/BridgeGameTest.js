/* eslint-disable max-lines-per-function */
const BridgeGame = require('../src/BridgeGame');

const mockGenerator = (array) =>
  array.reduce((acc, value) => acc.mockReturnValueOnce(value), jest.fn());

const makeBridgeGame = (bridge, moveCount) => new BridgeGame(bridge, moveCount);

describe('다리 건너기 게임 테스트', () => {
  test('BridgeGame 객체를 만들고, 다리와 이동 횟수를 초기화 한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'D', 'U'], 0);

    expect(bridgeGame.getBridge()).toEqual(['U', 'D', 'D', 'U']);
    expect(bridgeGame.getMoveCount()).toEqual(0);
  });

  test('처음에 이동할 수 있는 다리인지 확인한다.', () => {
    const bridgeGame = makeBridgeGame(['U'], 0);
    const direction = 'U';

    expect(bridgeGame.isMove(direction)).toBeTruthy();
  });

  test('다리를 건널 때 이동 횟수가 1씩 증가한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'U', 'D'], 0);
    const moveCount = [1, 2, 3, 4];

    moveCount.forEach((count) => {
      bridgeGame.move();
      expect(bridgeGame.getMoveCount()).toEqual(count);
    });
  });

  test('매번 이동할 수 있는 다리인지 확인한다.', () => {
    const bridgeGame = makeBridgeGame(['D', 'D', 'U'], 0);

    expect(bridgeGame.isMove('D')).toBeTruthy();
    bridgeGame.move();
    expect(bridgeGame.isMove('D')).toBeTruthy();
    bridgeGame.move();
    expect(bridgeGame.isMove('D')).toBeFalsy();
  });

  test('위쪽 다리 모양으로 변환한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D'], 2);
    const upsideBridge = bridgeGame.convertBridge('U');

    expect(upsideBridge).toEqual(['O', ' ']);
  });

  test('아래쪽 다리 모양으로 변환한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D'], 2);
    const downsideBridge = bridgeGame.convertBridge('D');

    expect(downsideBridge).toEqual([' ', 'O']);
  });
});

module.exports = { mockGenerator };
