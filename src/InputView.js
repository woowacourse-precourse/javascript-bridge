const {
  inputUserValue,
  isBridgeLengthValid,
  isMoveValid,
  isCommandValid,
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
      isBridgeLengthValid(length);
      bridgeGame.createBridge(Number(length));
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    inputUserValue(GAME_MESSAGE.INPUT_MOVE, (move) => {
      isMoveValid(move);

      let proceedMove = bridgeGame.move(move);
      let [up, down] = bridgeGame.getUpDownStatus();

      OutputView.printMap(up, down);

      if (!proceedMove) this.readGameCommand(bridgeGame, up, down, proceedMove);

      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, up, down, successStatus) {
    inputUserValue(GAME_MESSAGE.RESTART, (command) => {
      isCommandValid(command);
      if (command === COMMAND_VALUE.RESTART) {
        bridgeGame.retry();
        this.readMoving(bridgeGame);
      }
      if (command === COMMAND_VALUE.QUIT) {
        OutputView.printResult(up, down, successStatus);
        bridgeGame.quit();
      }
    });
  },
};

module.exports = InputView;
