const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",
  RETRY_COMMAND: "R",
  QUIT_COMMAND: "Q",

  gameContinue: 0,
  bridge: [],
  tryCount: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리 건너기 게임을 시작합니다.다리의 길이를 입력해주세요.",
      (answer) => {
        this.bridgeSizeExceptionCatch(answer);
        this.bridge = BridgeMaker.makeBridge(
          answer,
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(0);
      }
    );
  },
  // 다리 길이 예외 처리
  bridgeSizeExceptionCatch(answer) {
    try {
      this.bridgeSizeException(answer);
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readBridgeSize();
    }
  },

  bridgeSizeException(answer) {
    if (isNaN(answer)) throw "[ERROR] 문자를 입력하실 수 없습니다.";
    if (answer < 3 || answer > 20)
      throw "[ERROR] 3이상 20이하의 수만 입력할 수 있습니다.";
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (answer) => {
        console.log(`다리의 길이: ${answer}`);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (answer) => {
        console.log(`다리의 길이: ${answer}`);
      }
    );
  },
};

module.exports = InputView;
