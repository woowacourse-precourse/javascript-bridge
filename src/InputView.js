const {
  inputUserValue,
  isBridgeLengthValid,
  isMoveValid,
  isCommandValid,
  printMessage,
} = require("./utils/index");
const { GAME_MESSAGE, COMMAND_VALUE } = require("./constants/index");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    inputUserValue(GAME_MESSAGE.INPUT_BRIDGE_LENGTH, (length) => {
      try {
        isBridgeLengthValid(length);
        bridgeGame.createBridge(Number(length));
        this.readMoving(bridgeGame);
      } catch (error) {
        printMessage(error);
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    inputUserValue(GAME_MESSAGE.INPUT_MOVE, (move) => {
      try {
        isMoveValid(move);

        let proceedMove = bridgeGame.move(move);
        let [up, down] = bridgeGame.getUpDownStatus();
        OutputView.printMap(up, down);

        if (!proceedMove)
          this.readGameCommand(bridgeGame, up, down, proceedMove);
        if (proceedMove && bridgeGame.isArriveToEnd()) {
          bridgeGame.quit();
          OutputView.printResult(
            up,
            down,
            proceedMove,
            bridgeGame.getTotalTry()
          );
        }
        if (proceedMove && !bridgeGame.isArriveToEnd())
          this.readMoving(bridgeGame);
      } catch (error) {
        printMessage(error);
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, up, down, successStatus) {
    inputUserValue(GAME_MESSAGE.RESTART, (command) => {
      try {
        isCommandValid(command);
        if (command === COMMAND_VALUE.RESTART) {
          bridgeGame.retry();
          this.readMoving(bridgeGame);
        }
        if (command === COMMAND_VALUE.QUIT) {
          OutputView.printResult(
            up,
            down,
            successStatus,
            bridgeGame.getTotalTry()
          );
          bridgeGame.quit();
        }
      } catch (error) {
        printMessage(error);
        this.readGameCommand(bridgeGame, up, down, successStatus);
      }
    });
  },
};

module.exports = InputView;
