const { Console } = require("@woowacourse/mission-utils");

const BridgeGame = require("./BridgeGame");
const { isInvalidBridgeLength, isInvalidMoving } = require("./exception");
const { makeBridge } = require("./BridgeMaker");
const { toNumber } = require("./helpers/common");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printMap, printResult } = require("./OutputView");
const { INPUT_LENGTH, INPUT_MOVE, INPUT_RETRY } = require("./constant/message");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_LENGTH, (input) => {
      isInvalidBridgeLength(input) && InputView.readBridgeSize();
      const bridgeSize = toNumber(input);

      const bridge = makeBridge(bridgeSize, generate);
      const bridgeGame = new BridgeGame(bridge);
      InputView.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(INPUT_MOVE, (input) => {
      isInvalidMoving(input) && this.readMoving(bridgeGame);
      bridgeGame.move(input);
      printMap(bridgeGame.getUserBridge());

      if (bridgeGame.isVictory()) {
        printResult(bridgeGame);
        Console.close();
        return;
      }

      if (bridgeGame.isFinish) {
        InputView.readGameCommand(bridgeGame);
        return;
      }

      InputView.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(INPUT_RETRY, (input) => {
      bridgeGame.retry();
      InputView.readMoving(bridgeGame);
    });
  },
};

module.exports = InputView;
