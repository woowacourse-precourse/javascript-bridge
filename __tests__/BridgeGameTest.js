const BridgeGame = require('../src/BridgeGame');
const { UPSIDE_SYMBOL, DOWNSIDE_SYMBOL } = require('../src/constants/condition.js');
const { ERROR_MSG } = require('../src/constants/message.js');

describe('BridgeGame 클래스 테스트', () => {
  describe('move 메서드 테스트', () => {
    test.each([['up'], ['donw'], ['u'], ['d'], ['위'], ['아래']])(
      `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')과 정확히 일치하지 않는 경우, 에러가 발생한다.`,
      (input) => {
        const bridgeGame = new BridgeGame();

        expect(() => {
          bridgeGame.move(input);
        }).toThrow(ERROR_MSG.invalidDirection);
      }
    );

    test(`입력값이 비어있는 경우, 에러가 발생한다.`, () => {
      const bridgeGame = new BridgeGame();
      const input = '';

      expect(() => {
        bridgeGame.move(input);
      }).toThrow(ERROR_MSG.emptyInput);
    });

    test.each([['U'], ['D']])(
      `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')중 하나인 경우, 에러가 발생하지 않는다.`,
      (input) => {
        const bridgeGame = new BridgeGame();

        expect(() => {
          bridgeGame.move(input);
        }).not.toThrow('[ERROR]');
      }
    );
  });
});
