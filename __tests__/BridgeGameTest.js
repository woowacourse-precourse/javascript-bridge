const BridgeGame = require('../src/BridgeGame.js');

describe('BridgeGame 클래스 테스트', () => {
  describe('isLatestMoveSucceeded 메서드 테스트', () => {
    test('다리생성과 이동 이후 호출된 isLatestMoveSucceeded 메서드는 true, false중 하나를 return 해야 한다.', () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.build('3');
      bridgeGame.move('U');

      const result = bridgeGame.isLatestMoveSucceeded();

      expect([true, false]).toContain(result);
    });
  });

  describe('isEnd 메서드 테스트', () => {
    test('다리 길이 만큼의 이동 명령이 실행된 후 호출된 isEnd 메서드는 true, false중 하나를 return 해야 한다.', () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.build('3');
      bridgeGame.move('U');
      bridgeGame.move('U');
      bridgeGame.move('U');

      const result = bridgeGame.isEnd();

      expect([true, false]).toContain(result);
    });

    test('다리 길이 만큼의 이동 명령이 실행되지 않고 호출된 isEnd 메서드는 false를 return 해야 한다.', () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.build('3');
      bridgeGame.move('U');

      const result = bridgeGame.isEnd();

      expect(result).toBe(false);
    });
  });
});
