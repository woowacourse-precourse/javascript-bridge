const BridgeGame = require('../src/models/BridgeGame');

describe('정답 확인 로직 테스트', () => {
  test('사용자가 정답을 입력할 때(아직 마지막 문자 입력하지 않은 경우)', () => {
    const bridge = ['U', 'D', 'D'];
    const userMove = [['U'], ['U', 'D']];
    const bridgeGame = new BridgeGame(bridge);

    userMove.forEach((eachUserMove) => {
      expect(bridgeGame.move(eachUserMove)).toEqual(1);
    });
  });

  test('사용자가 오답을 입력할 때', () => {
    const bridge = ['U', 'D', 'D'];
    const userMove = [['D'], ['U', 'U']];
    const bridgeGame = new BridgeGame(bridge);

    userMove.forEach((eachUserMove) => {
      expect(bridgeGame.move(eachUserMove)).toEqual(0);
    });
  });

  test('모든 정답을 맞춘 경우', () => {
    const bridge = ['U', 'D', 'D'];
    const userMove = ['U', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);

    expect(bridgeGame.move(userMove)).toEqual(2);
  });
});
