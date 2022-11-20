const { GAME_VALUES, INITIALIZE_VALUES } = require("../constants/constant");
const GameInfo = require("./GameInfo");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move() {
    GameInfo.position += GAME_VALUES.counter;
    GameInfo.gameStat.push(GameInfo.moving);
    this.moveBridge();
  }

  static moveBridge() {
    return (this.isValidMove()) ?
      this.pushMoveBridge(GAME_VALUES.upperCharO) :
      this.pushMoveBridge(GAME_VALUES.upperCharX);
  }

  static isValidMove() {
    return GameInfo.bridge[GameInfo.position] === GameInfo.gameStat[GameInfo.position];
  }

  static pushMoveBridge(input) {
    GameInfo.moveBridge[
      GameInfo.indexingArray
        .indexOf(GameInfo.gameStat[GameInfo.position])
    ].push(input);
    GameInfo.moveBridge[
      (GameInfo.indexingArray
        .indexOf(GameInfo.gameStat[GameInfo.position]) + 1) % 2
    ].push(GAME_VALUES.blank);
  }

  static initializeGameInfo() {
    GameInfo.gameStat = [];
    GameInfo.moveBridge = [[], []];
    GameInfo.position = INITIALIZE_VALUES.initializedPosition;
    GameInfo.numberOfPlayGames += GAME_VALUES.counter;
  }

  static getMoveBridge() {
    return GameInfo.moveBridge;
  }

  static getPosition() {
    return GameInfo.position;
  }

  static getNumberOfPlayGames() {
    return GameInfo.numberOfPlayGames;
  }

  static isFailure() {
    return (
      GameInfo.moveBridge[0]
        .concat(GameInfo.moveBridge[1])
        .includes(GAME_VALUES.upperCharX)
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry() {
    return (GameInfo.gameCommand === GAME_VALUES.upperCharR);
  }
}

module.exports = BridgeGame;
