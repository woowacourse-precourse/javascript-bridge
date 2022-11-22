const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("../constants/Messages.js");
const Validator = require("../Validator.js");
const OutputView = require("./OutputView.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자가 다리의 길이를 입력받는다.
   */
  readBridgeSize(generateBridge) {
    Console.readLine(REQUEST_MESSAGE.BRIDGE_SIZE, (length) => {
      try {
        Validator.checkBridgeLengthInput(Number(length));
        generateBridge(Number(length));
      } catch (error) {
        OutputView.printErrorMessage(error);
        this.readBridgeSize(generateBridge);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(REQUEST_MESSAGE.SELECT_MOVE, (moveCmd) => {
      try {
        Validator.checkValidMove(moveCmd);
        move(moveCmd);
      } catch (error) {
        OutputView.printErrorMessage(error);
        this.readMoving(moveCmd);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(restartOrEnd) {
    Console.readLine(REQUEST_MESSAGE.RESTART, (gameCmd) => {
      try {
        Validator.checkValidRestart(gameCmd);
        restartOrEnd(gameCmd);
      } catch (error) {
        OutputView.printErrorMessage(error);
        this.readGameCommand(restartOrEnd);
      }
    });
  },
};

module.exports = InputView;
