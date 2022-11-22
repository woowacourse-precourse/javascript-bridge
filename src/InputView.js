const MissionUtils = require("@woowacourse/mission-utils");
// const BridgeMaker = require("./BridgeMaker");
// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  count: 0,
  tryCount: 0,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeMake, randomNumber) {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해 주세요.\n",
      (answer) => {
        if (isNaN(answer))
          throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
        this.readMoving(bridgeMake(answer, randomNumber), answer);
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answerBridge, bridgeLength) {
    MissionUtils.Console.readLine(
      "\n이동할 칸을 선택해주세요.\n",
      (strAnswer) => {
        if (strAnswer !== "U" && strAnswer !== "D")
          throw new Error("[ERROR] 이동할 칸은 U 또는 D로 입력해야 합니다.");
        if (answerBridge[this.count] === strAnswer) {
          this.count++;
          if (this.count === Number(bridgeLength)) {
            OutputView.printMap(strAnswer, " O ");
            return OutputView.printResult(
              this.count,
              OutputView.upBridge,
              OutputView.downBridge,
              "성공"
            );
          }
          OutputView.printMap(strAnswer, " O ");
          this.readMoving(answerBridge, bridgeLength);
        } else {
          OutputView.printMap(strAnswer, " X ");
          this.readGameCommand(answerBridge, bridgeLength);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(answerBridge, bridgeLength) {
    MissionUtils.Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        if (answer !== "R" && answer !== "Q")
          throw new Error("[ERROR] 재시도는 R 종료는 Q를 입력해야 합니다.");
        if (answer === "R") {
          this.tryCount++;
          OutputView.upBridge = ["[", "]"];
          OutputView.downBridge = ["[", "]"];
          this.readMoving(answerBridge, bridgeLength);
        }
        if (answer === "Q")
          return OutputView.printResult(
            this.count,
            OutputView.upBridge,
            OutputView.downBridge,
            "실패"
          );
      }
    );
  },
};

module.exports = InputView;
