const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const wConsole = MissionUtils.Console;
const { makeBridge } = BridgeMaker;
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { generate } = BridgeRandomNumberGenerator;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSizeReadLineHandler(line, bridgeGame) {
    try {
      const size = parseInt(line);
      if (!/^\d+$/.test(line) || isNaN(line) || size < 3 || 20 < size)
        throw new Error("[ERROR] 입력은  3부터 20 사이 숫자여야 합니다.");
      bridgeGame.setBridge(makeBridge(size, generate));
      InputView.readMoving(bridgeGame);
    } catch (error) {
      wConsole.print(error);
      InputView.readBridgeSize(bridgeGame);
    }
  },

  readBridgeSize(bridgeGame) {
    wConsole.readLine("다리의 길이를 입력해주세요.\n", (line) => {
      InputView.readBridgeSizeReadLineHandler(line, bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMovingReadLineHandler(line, bridgeGame) {
    try {
      if (["U", "D"].includes(line)) bridgeGame.move(line);
      else throw new Error("[ERROR] 이동할 칸은 U또는 D입니다.");
    } catch (error) {
      wConsole.print(error);
      InputView.readMoving(bridgeGame);
    }
  },

  readMoving(bridgeGame) {
    wConsole.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (line) => InputView.readMovingReadLineHandler(line, bridgeGame)
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
