const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리 길이를 입력해주세요.\n', (inputBridgeSize) => {
      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let bridgeList = [[], []];
      let attempt = 1;
      this.readMoving(bridge, bridgeList, attempt);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeList, attempt) {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (inputBridgeChoice) => {
        const bridgeGame = new BridgeGame();
        const movingResult = bridgeGame.move(
          inputBridgeChoice,
          bridge,
          bridgeList
        );
        OutputView.printMap(movingResult);
        if (movingResult[0].includes('X') || movingResult[1].includes('X')) {
          return this.readGameCommand(bridgeList, bridge, attempt);
        }
        if (movingResult[0].length == bridge.length) {
          const successMessage = '성공';
          return OutputView.printResult(bridgeList, successMessage, attempt);
        }
        return this.readMoving(bridge, movingResult, attempt);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeList, bridge, attempt) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (choice) => {
        const restart = 'R';
        const quit = 'Q';

        if (choice === restart) {
          attempt += 1;
          const bridgeGame = new BridgeGame();
          const resetBridgeList = bridgeGame.retry(bridge);
          return this.readMoving(bridge, resetBridgeList, attempt);
        }
        if (choice === quit) {
          const faileMessage = '실패';
          OutputView.printResult(bridgeList, faileMessage, attempt);
        }
      }
    );
  },
};

module.exports = InputView;
