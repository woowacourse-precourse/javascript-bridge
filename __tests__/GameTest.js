const BridgeGame = require('../src/BridgeGame');

describe('게임 테스트', () => {
  test('다리 세팅 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    expect(game.getBridge()).toEqual(bridge);
  });

  test('재시작 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    game.move('U');
    game.move('U');
    game.retry();
    expect(game.getChoices()).toEqual([]);
    expect(game.getCount()).toEqual(2);
  });

  test('게임 성공 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    game.move('U');
    game.move('D');
    game.move('U');
    game.move('U');
    expect(game.checkClear()).toEqual(true);
  });

  test('게임 실패 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    game.move('U');
    game.move('D');
    game.move('U');
    game.move('D');
    expect(game.checkClear()).toEqual(false);
  });

  test('move 성공 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    expect(game.move('U')).toEqual(true);
  });

  test('move 실패 테스트', () => {
    const bridge = ['U', 'D', 'U', 'U'];
    const game = new BridgeGame();

    game.setBridge(bridge);
    expect(game.move('D')).toEqual(false);
  });
});
