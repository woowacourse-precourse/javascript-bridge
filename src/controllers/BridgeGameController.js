const { Console } = require('@woowacourse/mission-utils');

const CustomError = require('../utils/CustomError');

const BridgeGame = require('../models/BridgeGame');
const { SizeCommand, MovingCommand, GameCommand } = require('../models/command');

const { readBridgeSize, readMoving, readGameCommand } = require('../views/InputView');
const {
  printGameStart,
  printEmptyLine,
  printMap,
  printResult,
  printError,
} = require('../views/OutputView');

/**
 * 다리 건너기 게임 컨트롤러 클래스
 * @class
 */
class BridgeGameController {
  /**
   * 게임 타입
   * @type {BridgeGame}
   */
  #game;

  /**
   * 다리 건너기 게임 시작할 때 사용하는 메서드
   */
  play() {
    this.#game = new BridgeGame();
    printGameStart();
    this.#game.start();
    readBridgeSize(this.#onBridgeSizeSubmit.bind(this));
  }

  /**
   * 다리 사이즈 입력할 때 사용하는 메서드
   * @param {string} command
   */
  #onBridgeSizeSubmit(command) {
    try {
      this.#tryBridgeSizeSubmit(command);
    } catch (e) {
      BridgeGameController.#runError(e, readBridgeSize, this.#onBridgeSizeSubmit.bind(this));
    }
  }

  /**
   * 다리 사이즈 입력 시 시도하는 메서드
   * @param {string} command
   */
  #tryBridgeSizeSubmit(command) {
    const sizeCommand = new SizeCommand(command);
    this.#game.setBridge(sizeCommand);
    printEmptyLine();
    readMoving(this.#onMovingSubmit.bind(this));
  }

  /**
   * 이동 커맨드 입력할 때 사용하는 메서드
   * @param {string} command
   */
  #onMovingSubmit(command) {
    try {
      this.#tryMovingCommandSubmit(command);
    } catch (e) {
      BridgeGameController.#runError(e, readMoving, this.#onMovingSubmit.bind(this));
    }
  }

  /**
   * 이동 커맨드 입력 시 시도하는 메서드
   * @param {string} command
   */
  #tryMovingCommandSubmit(command) {
    const movingCommand = new MovingCommand(command);
    const currentBridge = this.#game.move(movingCommand);
    const isCrossed = movingCommand.isCrossed(currentBridge);
    printMap(this.#game.getMap());

    if (this.#game.isWin(isCrossed)) {
      this.#runQuit(isCrossed);
      return;
    }
    this.#runBridgeCross(isCrossed);
  }

  /**
   * 다리 건너기 성공 여부에 따라 실행할 함수 구분하는 메서드
   * @param {boolean} isCrossed
   */
  #runBridgeCross(isCrossed) {
    if (!isCrossed) {
      readGameCommand(this.#onGameCommandSubmit.bind(this));
      return;
    }

    readMoving(this.#onMovingSubmit.bind(this));
  }

  /**
   * 게임 커맨드 입력할 때 사용하는 메서드
   * @param {string} command
   */
  #onGameCommandSubmit(command) {
    try {
      this.#tryGameCommandSubmit(command);
    } catch (e) {
      BridgeGameController.#runError(e, readGameCommand, this.#onGameCommandSubmit.bind(this));
    }
  }

  /**
   * 게임 커맨드 입력 시 시도하는 메서드
   * @param {string} command
   */
  #tryGameCommandSubmit(command) {
    const gameCommand = new GameCommand(command);

    if (gameCommand.isRetry()) {
      this.#runRetry();
      return;
    }

    if (gameCommand.isQuit()) {
      this.#runQuit();
    }
  }

  /**
   * 재시도 커맨드 입력할 때 사용하는 메서드
   */
  #runRetry() {
    this.#game.retry();
    readMoving(this.#onMovingSubmit.bind(this));
  }

  /**
   * 종료 커맨드 입력할 때 사용하는 메서드
   * @param {boolean} isCrossed
   */
  #runQuit(isCrossed = false) {
    const finalStatus = this.#game.quit(isCrossed);
    printResult(finalStatus);
    Console.close();
  }

  /**
   * 에러가 발생할 때 사용하는 메서드
   * @param {CustomError} error
   * @param {function(callback): void} readLine
   * @param {function(string): void} callback
   */
  static #runError(error, readLine, callback) {
    printError(error.message);
    readLine(callback);
  }
}

module.exports = BridgeGameController;
