const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("../src/Validate");
const BridgeGame = require("../src/BridgeGame");

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",
      (bridgeLength) => {
        Validate.bridgeSize(+bridgeLength);
        this.readMoving();
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moveLetter) => {
        BridgeGame.move(Validate.gameInput(moveLetter));
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (inputLetter) => {
        Validate.retry(inputLetter);

        if (inputLetter === "R") {
          return this.readMoving();
        } else if (inputLetter === "Q") {
          return MissionUtils.Console.close();
        }
      }
    );
  },
};

module.exports = InputView;
