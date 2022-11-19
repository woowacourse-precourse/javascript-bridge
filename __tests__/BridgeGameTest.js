/* eslint-disable max-lines-per-function */
const BridgeGame = require('../src/models/BridgeGame');

describe('BridgeGame 테스트', () => {
  test.each(['u', 'd', '0', 'true', 'undefined', 'null'])(
    'move 메서드는 입력값이 U와 D중 하나의 문자가 아니면 에러 발생',
    (moving) => {
      const bridgeGame = new BridgeGame();

      expect(() => {
        bridgeGame.move(moving);
      }).toThrow('[ERROR]');
    },
  );
});
