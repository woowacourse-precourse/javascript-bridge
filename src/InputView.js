/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const ErrorMessages = require("./ErrorMessages");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let errCode = "";
    try {
      return this.inputBridgeSize();
    } catch (error) {
      errCode = this.errorBridgeSize(error);
    } finally {
      this.finallyBridgeSize(errCode);
    }
  },

  inputBridgeSize() {
    let size = 0;
    MissionUtils.Console.readLine("", (answer) => {
      size = Number(answer);
      if (size < 3 || size > 20 || isNaN(size)) {
        throw ErrorMessages.numberSize;
      }
    });
    return size;
  },

  errorBridgeSize(error) {
    OutputView.sizeError(error);
    return error;
  },

  finallyBridgeSize(errCode) {
    if (errCode !== "") {
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let errCode = "";
    try {
      return this.inputMoving();
    } catch (error) {
      errCode = this.errorMoving(error);
    } finally {
      this.finallyMoving(errCode);
    }
  },

  inputMoving() {
    let move = "";
    MissionUtils.Console.readLine("", (answer) => {
      move = answer;
      if (move !== "U" && move !== "D") throw ErrorMessages.move;
    });
    return move;
  },

  errorMoving(error) {
    OutputView.moveError(error);
    return error;
  },

  finallyMoving(errCode) {
    if (errCode != "") {
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let errCode = "";
    try {
      return this.inputGameCommand();
    } catch (error) {
      errCode = this.errorGameCommand(error);
    } finally {
      this.finallyGameCommand(errCode);
    }
  },
  inputGameCommand() {
    let command = "";
    MissionUtils.Console.readLine("", (answer) => {
      command = answer;
      if (this.command !== "R" && this.command !== "Q") {
        throw ErrorMessages.command;
      }
    });
    return command;
  },
  errorGameCommand(error) {
    OutputView.commandError(error);
    return error;
  },
  finallyGameCommand(errCode) {
    if (errCode != "") {
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
