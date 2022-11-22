const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Error = require("./Error");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const bridgeGame = new BridgeGame();
const error = new Error();
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(data) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      try {
        this.printEmptyString();
        error.bridgeSizeError(answer);

        data["bridge"] = BridgeMaker.makeBridge(Number(answer), BridgeRandomNumberGenerator.generate);

        this.readMoving(data);
      } catch (error) {
        this.handleSizeError(error);
      }
    });
  },

  handleSizeError(error) {
    MissionUtils.Console.print(error);
    return this.readBridgeSize();
  },

  printEmptyString() {
    return console.log("\n");
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(data) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (answer) => {
      try {
        error.movingError(answer);

        this.calculateMovingResult(answer, data);

        return data["status"] === "continue" ? this.continueGame(data) : this.failedGame(data);
      } catch (error) {
        this.handleMovingError(error);
      }
    });
  },

  calculateMovingResult(answer, data) {
    data["currentAnswer"] = answer;
    data = bridgeGame.move(data);
    OutputView.printMap(data);
  },

  continueGame(data) {
    const tryCount = data["callCount"];
    const successCount = data["bridge"].length;

    return tryCount === successCount ? this.successGame(data) : this.readMoving(data);
  },

  failedGame(data) {
    if (data["status"] === "fail") {
      return this.readGameCommand(data);
    }
  },

  successGame(data) {
    const tryCount = data["callCount"];
    const successCount = data["bridge"].length;
    if (tryCount === successCount) {
      data["status"] = "성공";
      return OutputView.printResult(data);
    }
  },

  handleMovingError(error) {
    MissionUtils.Console.print(error);
    data["currentAnswer"] = "";
    return this.readMoving(data);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(data) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (answer) => {
      try {
        error.gameCommandError(answer);

        data = this.calculateCommand(data, answer);

        this.retryOrNot(data);
      } catch (error) {
        this.handleGameCommandError(errror, data);
      }
    });
  },

  calculateCommand(data, answer) {
    data["currentAnswer"] = answer;
    const retryOrNot = bridgeGame.retry(data);
    return retryOrNot;
  },

  retryOrNot(data) {
    return data["status"] === "retry" ? this.readMoving(data) : OutputView.printResult(data);
  },

  handleGameCommandError(error, data) {
    MissionUtils.Console.print(error);
    data["currentAnswer"] = "";
    return this.readGameCommand(data);
  },
};

module.exports = InputView;
