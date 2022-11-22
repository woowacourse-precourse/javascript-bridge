const { Console } = require('@woowacourse/mission-utils');
const Bridge = require('./Bridge');
const Map = require('./Map');
const { RETRY, QUIT } = require('./Command');
const { viewName, readInput, printOutput } = require('./ViewController');

const { bridgeSize, moving, gameCommand, start, map, result } = viewName;

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #map;
  #tryCount;

  constructor() {
    this.#bridge = new Bridge();
    this.#map = new Map();
    this.#tryCount = 1;
  }

  startGame() {
    printOutput(start);
    readInput(bridgeSize, this.setBridge.bind(this));
  }

  setBridge(size) {
    this.#bridge.setTargetBridge(Number(size));
    readInput(moving, this.move.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    const { isMovable, isSuccess } = this.#bridge.judgeIsMovable(movingCommand);

    const mapRows = this.#map.record(isMovable, movingCommand);
    printOutput(map, mapRows);

    this.continueOrStop(isMovable, isSuccess);
  }

  continueOrStop(isMovable, isSuccess) {
    if (isSuccess) {
      this.quit(true);
      return;
    }

    if (isMovable) {
      readInput(moving, this.move.bind(this));
      return;
    }

    readInput(gameCommand, this.decideToRetryOrQuit.bind(this));
  }

  decideToRetryOrQuit(gameCommand) {
    if (gameCommand === RETRY) {
      this.retry();
      return;
    }

    if (gameCommand === QUIT) {
      this.quit(false);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#map = new Map();
    this.#bridge.reset();
    this.#tryCount += 1;

    readInput(moving, this.move.bind(this));
  }

  quit(isSuccess) {
    printOutput(result, this.#map.getMapRows(), isSuccess, this.#tryCount);
    Console.close();
  }
}

module.exports = BridgeGame;
