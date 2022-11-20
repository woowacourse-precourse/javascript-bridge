const MissionUtils = require("@woowacourse/mission-utils");
// const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeArray;
  userInput;
  constructor(bridgeArray) {
    this.bridgeArray = bridgeArray;
    MissionUtils.Console.print(`: ${bridgeArray}`);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {
    MissionUtils.Console.print("HIHIHI");
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}
}

module.exports = BridgeGame;
