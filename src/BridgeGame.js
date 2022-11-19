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
    GameInfo.position += 1;
    GameInfo.gameStat.push(GameInfo.currentMove);
    this.moveBridge();
  }

  static moveBridge() {
    return (this.isValidMove()) ? this.pushMoveBridge("O") : this.pushMoveBridge("X");
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
    ].push(" ");
  }

  static initializeGameInfo() {
    GameInfo.gameStat = [];
    GameInfo.moveBridge = [[], []];
    GameInfo.position = -1;
    GameInfo.numberOfPlayGames += 1;
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
        .includes("X")
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry() {
    return (GameInfo.gameCommand === 'R');
  }
}

module.exports = BridgeGame;
