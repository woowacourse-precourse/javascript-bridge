const BridgeGame = require('../src/BridgeGame.js');
const Bridge = require('../src/Bridge.js');

describe('BridgeGame 클래스 테스트', () => {
  describe('move 메서드 테스트', () => {
    test('생성된 다리와 방향 입력이 일치하면, {isCrossable: true, direction: 방향 입력값} 형식의 객체가 로그에 저장되어야 한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('U');
      const result = bridgeGame.getMovementLogs()[0];

      expect(result).toEqual({ isCrossable: true, direction: 'U' });
    });

    test('생성된 다리와 방향 입력이 일치하지 않으면, {isCrossable: false, direction: 방향 입력값} 형식의 객체가 로그에 저장되어야 한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('D');
      const result = bridgeGame.getMovementLogs()[0];

      expect(result).toEqual({ isCrossable: false, direction: 'D' });
    });
  });

  describe('isLatestMoveSucceeded 메서드 테스트', () => {
    test('생성된 다리와 방향 입력이 일치하면, isLatestMoveSucceeded 메서드는 true를 return한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('U');

      const result = bridgeGame.isLatestMoveSucceeded();

      expect(result).toBe(true);
    });

    test('생성된 다리와 방향 입력이 일치하지 않으면, isLatestMoveSucceeded 메서드는 false를 return한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('D');

      const result = bridgeGame.isLatestMoveSucceeded();

      expect(result).toBe(false);
    });
  });

  describe('isEnd 메서드 테스트', () => {
    test('생성된 다리 길이 만큼의 방향 입력이 일치하면 isEnd 메서드는 true를 return 해야 한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('U');
      bridgeGame.move('D');
      bridgeGame.move('U');

      const result = bridgeGame.isEnd();

      expect(result).toBe(true);
    });

    test('생성된 다리 길이 만큼의 방향 입력중 하나라도 일치하지 않으면 isEnd 메서드는 false를 return 해야 한다.', () => {
      const bridge = new Bridge(['U', 'D', 'U']);
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move('U');
      bridgeGame.move('D');
      bridgeGame.move('D');

      const result = bridgeGame.isEnd();

      expect(result).toBe(false);
    });
  });
});
