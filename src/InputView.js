const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { COMMAND } = require("./constants/data");
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require("./constants/message");
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
      const error = Validation.checkBridgeLength(length);
      Console.print(error);
      if (error) {
        this.readBridgeSize();
      } else {
        const bridge = BridgeMaker.makeBridge(
          parseInt(length, 10),
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(bridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(INPUT_MESSAGE.MOVE, (userInput) => {
      const error = Validation.checkUserMoveInput(userInput);
      if (error) {
        return this.readMoving(bridge);
      }
      const bridgeGame = new BridgeGame();
      bridgeGame.move(userInput, bridge);
      if (bridgeGame.isWrongZone()) return this.readGameCommand(bridge);
      if (bridgeGame.isReached(bridge))
        return bridgeGame.finish(OUTPUT_MESSAGE.SUCCESS);
      return this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(INPUT_MESSAGE.RESTART, (commandInput) => {
      const error = Validation.checkCommandInput(commandInput);
      if (error) {
        return this.readGameCommand(bridge);
      }
      console.log(commandInput);
      if (commandInput === COMMAND.RESTART) {
        const bridgeGame = new BridgeGame();
        bridgeGame.retry();
        return this.readMoving(bridge);
      }
      if (commandInput === COMMAND.END) {
        const bridgeGame = new BridgeGame();
        bridgeGame.finish(OUTPUT_MESSAGE.FAIL);
      }
    });
  },
};

module.exports = InputView;
