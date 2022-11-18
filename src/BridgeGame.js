const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const generateRandomNumber = require("./BridgeRandomNumberGenerator").generate;
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #numberOfAttempt = 0;
  #myPosition = 0;
  #currentMap = { upperPart: [], lowerPart: [] };
  #validPath;

  getBridgeLengthFromUser() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.#validPath = BridgeMaker.makeBridge(bridgeSize);
    // 유효성 검사
    this.getMoveDirectionFromUser();
  }

  getMoveDirectionFromUser() {
    InputView.readMoving(this.move.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    // 위쪽이고 옳은 길 이면? 틀린 길 이면? 아래쪽이고 옳은 길이면? 틀린 길 이면?'
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
const a = new BridgeGame();
a.getBridgeLengthFromUser();
