const MissionUtils = require("@woowacourse/mission-utils");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const bridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const bridgeGame = new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  // 다리 정보
  bridge: [],
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      this.bridge = bridgeMaker.makeBridge(
        Number(input),
        bridgeRandomNumberGenerator.generate
      );
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요.", (input) => {
      const result = bridgeGame.move(input, this.bridge);
      OutputView.printMap(input, result);
      this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
