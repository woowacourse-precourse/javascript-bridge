const BridgeGame = require('../src/model/BridgeGame');
const GameCommand = require('../src/model/GameCommand');

describe('GameCommand Test', () => {
  test.each(['a', 'A', '1'])('재시작/종료 여부 입력 유효성 테스트', (input) => {
    const game = new BridgeGame();
    expect(() => {
      game.setGameCommand(input);
    }).toThrow('[ERROR]');
  });

  test.each(['R', 'Q'])(
    '재시작/종료 여부가 맞게 저장되는지 테스트',
    (input) => {
      GameCommand.setGameCommand(input);

      expect(GameCommand.getGameCommand()).toEqual(input);
    }
  );
});
