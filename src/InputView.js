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
        error.bridgeSizeError(answer);

        data["bridge"] = BridgeMaker.makeBridge(
          Number(answer),
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(data);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(data) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (answer) => {
        try {
          error.movingError(answer);

          data["currentAnswer"] = answer;
          data = bridgeGame.move(data);
          OutputView.printMap(data);
          if (data["status"] === "continue") {
            if (data["callCount"] === data["bridge"].length) {
              data["status"] = "성공";
              return OutputView.printResult(data);
            }
            this.readMoving(data);
          }
          if (data["status"] === "fail") {
            this.readGameCommand(data);
          }
        } catch (error) {
          MissionUtils.Console.print(error);
          data["currentAnswer"] = "";
          this.readMoving(data);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(data) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        try {
          error.gameCommandError(answer);

          data["currentAnswer"] = answer;
          bridgeGame.retry(data);

          this.checkStatus(data);
        } catch (error) {
          MissionUtils.Console.print(error);
          data["currentAnswer"] = "";
          this.readGameCommand(data);
        }
      }
    );
  },

  checkStatus(data) {
    if (data["status"] === "retry") {
      data["try"] += 1;
      return this.readMoving(data);
    }
    if (data["status"] === "quit") {
      data["status"] = "실패";
      return OutputView.printResult(data);
    }
  },
};

module.exports = InputView;
