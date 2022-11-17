const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const wConsole = MissionUtils.Console;
const { makeBridge } = BridgeMaker;
const { generate } = BridgeRandomNumberGenerator;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(app) {
    wConsole.readLine("다리의 길이를 입력해주세요.", (line) => {
      if (!/^\d+$/.test(line))
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      const size = parseInt(line);
      if (size < 3 || 20 < size)
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");

      app.setBridge(makeBridge(size, generate));
      wConsole.readLine();
      console.log(app.getBridge());
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
