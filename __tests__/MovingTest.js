const BridgeGame = require('../src/model/BridgeGame');
const Moving = require('../src/model/Moving');

describe('Moving Test', () => {
  test.each(['a', 'A', '1'])('다음 이동 입력 유효성 테스트', (input) => {
    const game = new BridgeGame();
    expect(() => {
      game.setMoving(input);
    }).toThrow('[ERROR]');
  });

  test.each(['U', 'D'])(
    '입력한 다음 이동이 맞게 저장되는지 테스트',
    (input) => {
      Moving.setMoving(input);

      expect(Moving.getMoving()).toEqual(input);
    }
  );
});
