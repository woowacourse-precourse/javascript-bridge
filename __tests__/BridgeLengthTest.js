const BridgeGameController = require('../src/controller/BridgeGameController');

describe('다리 길이 입력 테스트', () => {
  const gameController = new BridgeGameController();

  test.each([['1'], ['1, 3'], ['a'], ['30'], ['3 '], ['1 7']])(
    '3~20까지의 숫자 입력 테스트',
    () => {
      expect((input) => {
        gameController.set(input);
      }).toThrow('[ERROR]');
    }
  );
});
