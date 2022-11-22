const { Console } = require('@woowacourse/mission-utils');
const Bridge = require('./Bridge');
const Map = require('./Map');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { printStart, printMap, printResult } = require('./OutputView');
const { RETRY, QUIT } = require('./Command');

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
    printStart();
    readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    this.#bridge.setTargetBridge(Number(size));
    readMoving(this.move.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    const { isMovable, isSuccess } = this.#bridge.judgeIsMovable(movingCommand);

    const mapRows = this.#map.record(isMovable, movingCommand);
    printMap(mapRows);

    this.continueOrStop(isMovable, isSuccess);
  }

  continueOrStop(isMovable, isSuccess) {
    if (isSuccess) {
      this.quit(true);
      return;
    }

    if (isMovable) {
      readMoving(this.move.bind(this));
      return;
    }

    readGameCommand(this.decideToRetryOrQuit.bind(this));
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

    readMoving(this.move.bind(this));
  }

  quit(isSuccess) {
    printResult(this.#map.getMapRows(), isSuccess, this.#tryCount);
    Console.close();
  }
}

module.exports = BridgeGame;
