const MissionUtils = require("@woowacourse/mission-utils");
const { REGEX } = require("./constant");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.handleBrideSizeException(input);
    });
  },

  handleBrideSizeException(size) {
    try {
      if (!validateBridgeSize(size)) throw new Error();
      const bridgeGame = new BridgeGame(size);
      this.readMoving(bridgeGame);
    } catch (e) {
      MissionUtils.Console.print(
        "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
      );
      this.readBridgeSize();
    }
  },

  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        this.handleMovingException(input, bridgeGame);
      }
    );
  },

  handleMovingException(input, nowGame) {
    try {
      if (!validateMoving(input)) throw new Error();
      nowGame.move(input);
    } catch (e) {
      MissionUtils.Console.print("[ERROR] U 또는 D를 입력해 주세요.");
      this.readMoving(nowGame);
    }
  },

  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        this.hangleGameCommandException(input, bridgeGame);
      }
    );
  },
};

function validateBridgeSize(input) {
  return input.toString().match(REGEX.SIZE_RANGE);
}

function validateMoving(input) {
  return input === "U" || input === "D";
}

module.exports = InputView;
