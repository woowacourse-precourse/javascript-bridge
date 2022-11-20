const { GAME_VALUES } = require("../constants/constant");
const GameInfo = require("./GameInfo");
const UseGameInfo = require("./UseGameInfo");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    GameInfo.position += GAME_VALUES.counter;
    GameInfo.gameStat.push(GameInfo.moving);
    this.recordCurrentStatus();
  }

  recordCurrentStatus() {
    return (UseGameInfo.isValidMove()) ?
      UseGameInfo.pushMoveBridge(GAME_VALUES.upperCharO) :
      UseGameInfo.pushMoveBridge(GAME_VALUES.upperCharX);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry(gameCommand) {
    return (gameCommand === GAME_VALUES.upperCharR);
  }
}

module.exports = BridgeGame;
