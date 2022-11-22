const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      try {
        const BRIDGE = BridgeMaker.makeBridge(this.checkBridgeSize(size), BridgeRandomNumberGenerator.generate); bridgeGame = new BridgeGame(BRIDGE);
        this.readMoving(bridgeGame);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 다리 길이의 입력값이 유효한지 판단한다.
   */
  checkBridgeSize(size) {
    const size_range = []
    for (let i = 3; i < 21; i++) {
      size_range.push(String(i));
    }
    if (!size_range.includes(size)) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    }
    return parseInt(size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving(bridgeGame) {
    MissionUtils.Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (nextMove) => {
      try {
        bridgeGame.move(this.checkMoving(nextMove));
        this.readMoving(bridgeGame);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 입력받은 이동할 칸이 유효한지 판단한다.
   */
  checkMoving(move) {
    if ((move === "U") || (move === "D")) {
      return move;
    }
    throw "[ERROR] 이동할 칸은 U 또는 D로 입력해 주세요.";
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   readGameCommand() { },
};

module.exports = InputView;
