const { Console } = require("@woowacourse/mission-utils");
const Check = require("./Check");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { MOVING, COMMAND, RESULT, CALCULATION } = require("./constants/values");
const { OUTPUT, INPUT } = require("./constants/messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`${INPUT.SIZE}${OUTPUT.LINE}`, (size) => {
      const error = Check.checkBridgeSize(size);
      if (error) {
        this.readBridgeSize();
      } else {
        const bridge = BridgeMaker.makeBridge(
          parseInt(size, CALCULATION.DECIMAL_NUMBER),
          BridgeRandomNumberGenerator.generate
        );
        let movingList = [[], []];
        let numberOfAttempts = 1;
        this.readMoving(bridge, movingList, numberOfAttempts);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, movingList, attempts) {
    Console.readLine(
      `${OUTPUT.LINE}${INPUT.MOVING}${OUTPUT.LINE}`,
      (moving) => {
        const error = Check.checkMoving(moving);
        if (error) {
          return this.readMoving(bridge, movingList, attempts);
        }
        const bridgeGame = new BridgeGame();
        const result = bridgeGame.move(moving, bridge, movingList);
        if (
          result[0].includes(MOVING.WRONG_ANSWER) ||
          result[1].includes(MOVING.WRONG_ANSWER)
        ) {
          return this.readGameCommand(movingList, attempts, bridge);
        }
        if (result[0].length === bridge.length) {
          return OutputView.printResult(movingList, RESULT.SUCCESS, attempts);
        }
        return this.readMoving(bridge, result, attempts);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(movingList, attempts, bridge) {
    Console.readLine(`${INPUT.COMMAND}${OUTPUT.LINE}`, (command) => {
      const error = Check.checkCommand(command);
      if (error) {
        return this.readGameCommand(movingList, attempts, bridge);
      }

      if (command === COMMAND.RESTART) {
        attempts += 1;
        const bridgeGame = new BridgeGame();
        const resetMovingList = bridgeGame.retry(bridge);
        return this.readMoving(bridge, resetMovingList, attempts);
      }
      if (command === COMMAND.END) {
        OutputView.printResult(movingList, RESULT.FAIL, attempts);
      }
    });
  },
};

module.exports = InputView;
