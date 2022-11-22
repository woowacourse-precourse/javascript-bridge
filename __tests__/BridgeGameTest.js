const BridgeGame = require('../src/BridgeGame.js');
const { GameState } = require('../src/constants/Constant.js');

describe('브릿지 게임 테스트', () => {
  test('다리 이동 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    const way = ['U', 'D', 'U', 'D'];
    const movingLog = [
      ['O', ' ', 'O', ' '],
      [' ', 'O', ' ', 'X'],
    ];

    way.forEach(direction => {
      bridgeGame.move(direction);
    });

    expect(bridgeGame.getMovingLog()).toEqual(movingLog);
  });

  test('게임 성공 테스트', () => {
    const bridge = ['U', 'U', 'D'];
    const bridgeGame = new BridgeGame(bridge);
    const way = ['U', 'U', 'D'];
    const answer = [GameState.PLAYING, GameState.PLAYING, GameState.VICTORY];

    way.forEach((direction, idx) => {
      bridgeGame.move(direction);
      expect(bridgeGame.getGameState()).toEqual(answer[idx]);
    });
  });

  test('게임 실패 테스트', () => {
    const bridge = ['U', 'U', 'D'];
    const bridgeGame = new BridgeGame(bridge);
    const way = ['U', 'U', 'U'];
    const answer = [GameState.PLAYING, GameState.PLAYING, GameState.GAME_OVER];

    way.forEach((direction, idx) => {
      bridgeGame.move(direction);
      expect(bridgeGame.getGameState()).toEqual(answer[idx]);
    });
  });

  test('시도 횟수 증가 테스트', () => {
    const bridge = ['U', 'U', 'D'];
    const bridgeGame = new BridgeGame(bridge);
    const count = 12;
    for (let i = 0; i < count; i += 1) {
      bridgeGame.retry();
    }

    expect(bridgeGame.getTryCount()).toEqual(1 + count);
  });
});
