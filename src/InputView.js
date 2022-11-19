const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
    console.log("readBridgeSize: 실행");
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해 주세요.\n",
      (answer) => {
        this.readMoving(bridgeMake(answer, randomNumber), answer);
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answerBridge, bridgeLength) {
    console.log("readMoving: 실행");
    console.log(answerBridge);
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요.\n",
      (strAnswer) => {
        console.log(this.count);
        if (this.count === bridgeLength)
          return MissionUtils.Console.print("성공");
        if (answerBridge[this.count] === strAnswer) {
          this.count++;
          console.log(this.count);
          if (this.count === Number(bridgeLength))
            return MissionUtils.Console.print("성공");
          this.readMoving(answerBridge, bridgeLength);
        } else {
          this.readGameCommand(answerBridge, bridgeLength);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(answerBridge, bridgeLength) {
    console.log("readGameCommand: 실행");
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        if (answer === "R") {
          tryCount++;
          this.readMoving(answerBridge, bridgeLength);
        }
        if (answer === "Q")
          return MissionUtils.Console.print("최종 게임 결과 \n");
      }
    );
  },
};

console.log(
  InputView.readBridgeSize(BridgeMaker.makeBridge, BridgeRandomNumberGenerator)
);

module.exports = InputView;
