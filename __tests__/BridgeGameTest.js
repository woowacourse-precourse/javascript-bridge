const BridgeGame = require('../src/models/BridgeGame');

describe('다리 건너기 게임 클래스 테스트', () => {
  test.each([[2], [-1], [21]])('다리 길이가 3미만 20초과인 경우 예외 처리', (size) => {
    const bridgeGame = new BridgeGame();

    expect(() => {
      bridgeGame.setBridge(size);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' '], ['a'], ['2']])(
    '이동 입력 값이 U 또는 D가 아닌 경우 예외 처리',
    (input) => {
      const bridgeGame = new BridgeGame();

      expect(() => {
        bridgeGame.move(input);
      }).toThrow('[ERROR]');
    },
  );
});
