const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const {
  bridgeLengthValidate,
  userMoveInput,
  gameRestartInput,
  determineGameRestart,
} = require("./utils/inputValidate");

const { INPUT_MESSAGE, COMMAND, MOVING, RESULT } = require("./Constant");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge, (input) => {
      if (!bridgeLengthValidate(input)) return this.readBridgeSize();
      const bridgeSize = BridgeMaker.makeBridge(
        input,
        BridgeRandomNumberGenerator.generate
      );
      const bridgeGame = new BridgeGame(
        bridgeSize,
        MOVING.initialLists,
        MOVING.count
      );
      this.readMoving(bridgeGame, bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridgeSize) {
    Console.readLine(INPUT_MESSAGE.moving, (input) => {
      if (!userMoveInput(input)) return this.readMoving(bridgeGame, bridgeSize);
      const movingList = bridgeGame.move(input);
      OutputView.printMap(movingList);
      if (determineGameRestart(movingList))
        return this.readGameCommand(bridgeGame, bridgeSize);
      if (movingList[0].length === bridgeSize.length)
        return OutputView.printResult(RESULT.success, bridgeGame);
      return this.readMoving(bridgeGame, bridgeSize);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, bridgeSize) {
    Console.readLine(INPUT_MESSAGE.restart, (input) => {
      if (!gameRestartInput(input)) this.readGameCommand();

      if (input === COMMAND.restart) {
        bridgeGame.retry();
        return this.readMoving(bridgeGame, bridgeSize);
      }

      if (input === COMMAND.end) {
        OutputView.printResult(RESULT.fail, bridgeGame);
      }
    });
  },
};

module.exports = InputView;
