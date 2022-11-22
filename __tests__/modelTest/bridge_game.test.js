const BridgeGame = require('../../src/model/BridgeGame');

describe('BridgeGame class', () => {
  describe('move()', () => {
    it('위쪽을 선택한뒤 건널수 있는 다리 일때  아래쪽 위쪽 다리결과값이 들어있는 객체를 출력한다. ', () => {
      // 공백은 3, pass는 1, fail은 0로 표기된다.
      const bridgeGame = new BridgeGame();
      const UP = 'U';
      const PASS = 1;

      expect(bridgeGame.move(UP, PASS)).toEqual({ down: '333', up: '313' });
    });

    it('아래쪽을 선택한뒤 건널수 없는 다리 일때 아래쪽만 실패가 포함된 다리결과 값을 출력한다.', () => {
      const bridgeGame = new BridgeGame();
      const DOWN = 'D';
      const FAIL = 0;

      expect(bridgeGame.move(DOWN, FAIL)).toEqual({ down: '303', up: '333' });
    });
  });

  describe('retry()', () => {
    it('실패후 재시도할 때 불필요한 데이터가 제대로 초기화 되는지 확인 ', () => {
      const bridgeGame = new BridgeGame();
      const DOWN = 'D';
      const FAIL = 0;

      bridgeGame.move(DOWN, FAIL);
      bridgeGame.increaseTryOrder();
      bridgeGame.retry();

      expect(bridgeGame.getDate().up).toEqual('');
      expect(bridgeGame.getDate().down).toEqual('');
      expect(bridgeGame.getDate().tryOrder).toEqual(0);
      expect(bridgeGame.getDate().tryCount).toEqual(2);
    });
  });
});
