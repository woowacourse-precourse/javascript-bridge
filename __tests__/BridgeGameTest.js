const BridgeGame = require('../src/Model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  const bridge = ['U', 'D', 'D'];
  const upMoveAnswer = 'U';
  const downMoveAnswer = 'D';

  test('입력 받은 이동 칸에 대한 이동 성공여부를 확인한다.', () => {
    const bridgeGame = new BridgeGame(bridge);

    const firstMoveResult = bridgeGame.move(upMoveAnswer);
    const secondMoveResult = bridgeGame.move(downMoveAnswer);
    const thirdMoveResult = bridgeGame.move(upMoveAnswer);
    
    expect(firstMoveResult).toEqual([upMoveAnswer, true]);
    expect(secondMoveResult).toEqual([downMoveAnswer, true]);
    expect(thirdMoveResult).toEqual([upMoveAnswer, false]);
  });

  test('건널 다리가 남았는지 모두 건넌건지 확인한다.', () => {
    const bridgeGame = new BridgeGame(bridge);
    
    bridgeGame.move(upMoveAnswer);
    expect(bridgeGame.checkRemainBridge()).toEqual(true);

    bridgeGame.move(downMoveAnswer);
    bridgeGame.move(upMoveAnswer);
    expect(bridgeGame.checkRemainBridge()).toEqual(false);
  });

  test('재시작 시 #bridgeIndex 필드를 0으로 초기화 시킨다', () => {
    const bridgeGame = new BridgeGame(bridge);

    bridgeGame.move(upMoveAnswer);
    expect(bridgeGame.retry()).toEqual(0);
  });
});