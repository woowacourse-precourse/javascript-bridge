const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { COMMAND } = require("./constants/data");
const { INPUT_MESSAGE } = require("./constants/message");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.LENGTH, (length) => {
      Validation.checkBridgeLength(length);
      Console.print(length);
      const bridge = BridgeMaker.makeBridge(
        parseInt(length, 10),
        BridgeRandomNumberGenerator.generate
      );
      this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(INPUT_MESSAGE.MOVE, (userInput) => {
      Validation.checkUserMoveInput(userInput);
      const bridgeGame = new BridgeGame();
      bridgeGame.move(userInput, bridge);
      console.log(userInput);
      if (bridgeGame.isWrongZone()) return this.readGameCommand(bridge);
      return this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(INPUT_MESSAGE.RESTART, (commandInput) => {
      Validation.checkCommandInput(commandInput);
      if (commandInput === COMMAND.RESTART) {
        const bridgeGame = new BridgeGame();
        bridgeGame.retry();
        this.readMoving(bridge);
      }
      if (commandInput === COMMAND.END) {
        // 게임 종료
      }
    });
  },
};

module.exports = InputView;
