const BridgeGame = require('../src/BridgeGame');

describe('다리 이동 테스트', () => {
  const size = 5;
  const bridgeGame = new BridgeGame();
  bridgeGame.init(size);

  test('위로 두번 아래로 한번 총 3번 이동한 결과를 저장한다.', () => {
    const moveTo = ['U', 'U', 'D'];
    const result = { accMoveCount: 3, curMoveCount: 3, movedRoutes: ['U', 'U', 'D'] };

    let moveResult;
    moveTo.forEach((direction) => {
      moveResult = bridgeGame.move(direction);
    });

    expect(moveResult.status).toEqual(result);
  });
});
