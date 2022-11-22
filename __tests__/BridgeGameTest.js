/* eslint-disable max-lines-per-function */
const BridgeGame = require('../src/model/BridgeGame');

const makeBridgeGame = (bridge, moveCount = 0, retryCount = 1) =>
  new BridgeGame(bridge, moveCount, retryCount);

describe('BridgeGame 클래스 테스트', () => {
  test('BridgeGame 객체를 만들고, 다리, 이동 횟수, 재시도 횟수를 초기화 한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'D', 'U']);

    expect(bridgeGame.getBridge()).toEqual(['U', 'D', 'D', 'U']);
    expect(bridgeGame.getMoveCount()).toEqual(0);
    expect(bridgeGame.getRetryCount()).toEqual(1);
  });

  test('처음에 이동할 수 있는 다리인지 확인한다.', () => {
    const bridgeGame = makeBridgeGame(['U']);
    const direction = 'U';

    expect(bridgeGame.isMove(direction)).toBeTruthy();
  });

  test('다리를 건널 때 이동 횟수가 1씩 증가한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'U', 'D']);
    const moveCount = [1, 2, 3, 4];

    moveCount.forEach((count) => {
      bridgeGame.move();
      expect(bridgeGame.getMoveCount()).toEqual(count);
    });
  });

  test('매번 이동할 수 있는 다리인지 확인한다.', () => {
    const bridgeGame = makeBridgeGame(['D', 'D', 'U']);

    expect(bridgeGame.isMove('D')).toBeTruthy();
    bridgeGame.move();
    expect(bridgeGame.isMove('D')).toBeTruthy();
    bridgeGame.move();
    expect(bridgeGame.isMove('D')).toBeFalsy();
  });

  test('현재 이동까지 성공한 위쪽 다리 모양을 변환한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'U'], 2);
    const upsideBridge = bridgeGame.convertBridge('U');

    expect(upsideBridge).toEqual(['O', ' ']);
  });

  test('현재 이동까지 성공한 아래쪽 다리 모양을 변환한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'U'], 2);
    const downsideBridge = bridgeGame.convertBridge('D');

    expect(downsideBridge).toEqual([' ', 'O']);
  });

  test('현재 이동까지 성공한 위,아래 다리 모양을 변환하여 한 번에 받아온다.', () => {
    const bridgeGame = makeBridgeGame(['D', 'U', 'U', 'D'], 3);
    const { upsideBridge, downsideBridge } = bridgeGame.getConvertedBridge();

    expect(upsideBridge).toEqual([' ', 'O', 'O']);
    expect(downsideBridge).toEqual(['O', ' ', ' ']);
  });

  test('이동 실패한 다리에 X로 표시한다.', () => {
    const bridgeGame = makeBridgeGame(['D', 'U', 'D'], 2);
    const upsideBridge = [' ', 'O'];
    const downsideBridge = ['O', ' '];
    const failBridge = bridgeGame.getFailureBridge({ upsideBridge, downsideBridge });

    expect(failBridge.upsideBridge).toEqual([' ', 'O', 'X']);
    expect(failBridge.downsideBridge).toEqual(['O', ' ', ' ']);
  });

  test('다리를 모두 건넜는지 확인한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'U']);

    bridgeGame.move();
    expect(bridgeGame.isCompletion()).toBeFalsy();
    bridgeGame.move();
    expect(bridgeGame.isCompletion()).toBeTruthy();
  });

  test('게임 재시작 시 이동 횟수를 초기화한다.', () => {
    const bridgeGame = makeBridgeGame(['D', 'D', 'U'], 3);
    bridgeGame.retry();

    expect(bridgeGame.getMoveCount()).toEqual(0);
  });

  test('게임 재시작 시 시도 횟수가 1씩 증가한다.', () => {
    const bridgeGame = makeBridgeGame(['U', 'D', 'U']);
    const retryCount = [2, 3, 4, 5];

    retryCount.forEach((count) => {
      bridgeGame.retry();
      expect(bridgeGame.getRetryCount()).toEqual(count);
    });
  });
});
