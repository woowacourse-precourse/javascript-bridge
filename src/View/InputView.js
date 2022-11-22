const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("../constants/Messages.js");
const Validator = require("../Validator.js");
const OutputView = require("./OutputView.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * @return {number} 다리 길이를 number형식으로 리턴.
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
    Console.readLine(REQUEST_MESSAGE.SELECT_MOVE, (cmd) => {
      try {
        Validator.checkValidMove(cmd);
        move(cmd);
      } catch (error) {
        OutputView.printErrorMessage(error);
        this.readMoving(move);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(restartOrEnd) {
    Console.readLine(REQUEST_MESSAGE.RESTART, (cmd) => {
      try {
        Validator.checkValidRestart(cmd);
        restartOrEnd(cmd);
      } catch (error) {
        OutputView.printErrorMessage(error);
        this.readGameCommand(restartOrEnd);
      }
    });
  },
};

module.exports = InputView;
