const MissionUtils = require("@woowacourse/mission-utils"); // 사용안하면 지우기
const { GO, COMMAND, SIGN, MESSAGE, ERROR_MESSAGE } = require("./constant");
const Controller = require("./Controller");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

// 모델?
// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  // #bridge;

  constructor(size) {
    this.size = [];
    this.bridge = []; // size, BridgeRandomNumberGenerator.generate()     다리 저장하기
    this.history = [];
    this.upsideArray = [];
    this.downsideArray = [];
    this.tryCount = 0;
    this.gameResult = "";
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(block, completeBridge) {
    MissionUtils.Console.print(completeBridge);
    Controller.conveyInput(block);
    const currentRound = Controller.round - 1;
    if (Controller.playerArr[currentRound] === completeBridge[currentRound]) {
      Controller.successMove(block);
    }
    if (Controller.playerArr[currentRound] !== completeBridge[currentRound]) {
      Controller.failMove(block);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    command === COMMAND.retry ? true : false;
  }
}
// const bridgeGame = new BridgeGame()
// bridgeGame.successMove("U")

module.exports = BridgeGame;
