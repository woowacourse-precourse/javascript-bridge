const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const { ERROR_MESSAGE } = require('../src/constants/constants');

describe('BridgeGame 클래스 테스트', () => {
  test('내 위치 이동 메서드 테스트', () => {
    expect(
      (() => {
        const bridge = new BridgeGame(
          BridgeRandomNumberGenerator.generate,
          BridgeMaker.makeBridge,
          5
        );
        return bridge.move('U') === false ? bridge.move('D') : true;
      })()
    ).toBe(true);
  });

  it('게임 재시작 입력 메서드 예외 테스트', () => {
    try {
      const bridge = new BridgeGame(
        BridgeRandomNumberGenerator.generate,
        BridgeMaker.makeBridge,
        5
      );
      return bridge.retry('d');
    } catch (err) {
      expect(err).toEqual(new Error(ERROR_MESSAGE.UNEXCEPTED_ERROR));
    }
  });
});
