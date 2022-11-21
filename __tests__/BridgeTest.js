const BridgeGame = require('../src/model/BridgeGame');
const Bridge = require('../src/model/Bridge');

describe('Bridge Test', () => {
  test.each(['500', '1', 'a'])('다리 개수 유효성 테스트', (input) => {
    expect(() => {
      const game = new BridgeGame();
      game.setBridge(input);
    }).toThrow('[ERROR]');
  });

  test.each(['3', '5', '10'])(
    '다리 길이가 맞게 생성 되는지 테스트',
    (input) => {
      const bridge = new Bridge(input);

      expect(bridge.getBridge().length).toEqual(Number(input));
    }
  );
});
