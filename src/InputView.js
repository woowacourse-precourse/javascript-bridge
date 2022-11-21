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
    let size = 0;
    try {
      MissionUtils.Console.readLine("", (answer) => {
        size = Number(answer);
        if (size < 3 || size > 20 || isNaN(size)) {
          throw ErrorMessages.numberSize;
        }
      });
      return size;
    } catch (error) {
      OutputView.sizeError(error);
      errCode = error;
    } finally {
      if (errCode !== "") {
        this.readBridgeSize();
      }
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let errCode = "";
    let move = "";
    try {
      MissionUtils.Console.readLine("", (answer) => {
        move = answer;
        if (move !== "U" && move !== "D") throw ErrorMessages.move;
      });
      return move;
    } catch (error) {
      OutputView.moveError(error);
    } finally {
      if (errCode != "") {
        this.readMoving();
      }
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let errCode = "";
    let command = "";
    try {
      MissionUtils.Console.readLine("", (answer) => {
        command = answer;
        if (this.command !== "R" && this.command !== "Q") {
          throw ErrorMessages.command;
        }
      });
      return command;
    } catch (error) {
      OutputView.commandError(error);
    } finally {
      if (errCode != "") {
        this.readGameCommand();
      }
    }
  },
};

module.exports = InputView;
