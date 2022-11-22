const BridgeGame = require('./BridgeGame');
const { GAME_RESULT } = require('./common/Constant');
const {
  readBridgeSize,
  readGameCommand,
  readMoving,
} = require('./io/InputView');
const {
  printGameStart,
  printError,
  printGameEnd,
  printMap,
  printResult,
} = require('./io/OutputView');
const {
  validateBridgeSize,
  validateMove,
  validateRetry,
} = require('./utils/Validator');

class App {
  #game;

  /**
   * 다리 건너기 게임을 실행한다.
   */
  play() {
    printGameStart();
    this.askSize();
  }

  /**
   * 생성할 다리 길이를 입력 받는다.
   */
  askSize() {
    readBridgeSize(this.handleSizeInputException.bind(this));
  }

  /**
   * 다리 길이 입력 예외 처리를 한다.
   */
  handleSizeInputException(input) {
    try {
      validateBridgeSize(input);
      this.handleSizeInput.call(this, input);
    } catch (e) {
      printError(e);
      this.askSize();
    }
  }

  /**
   * 다리 길이 입력 후 과정을 다룬다.
   */
  handleSizeInput(input) {
    this.#game = new BridgeGame(Number(input));
    this.askMove();
  }

  /**
   * 이동 정보를 입력 받는다.
   */
  askMove() {
    readMoving(this.handleMovingInputException.bind(this));
  }

  /**
   * 이동 정보 입력 예외 처리를 한다.
   */
  handleMovingInputException(input) {
    try {
      validateMove(input);
      this.handleMovingInput.call(this, input);
    } catch (e) {
      printError(e);
      this.askMove();
    }
  }

  /**
   * 이동 정보 입력 후 과정을 다룬다.
   */
  handleMovingInput(input) {
    this.#game.move(input);
    printMap(this.#game.getMovingState());
    if (!this.#game.getIsGameOver()) return this.askMove();
    if (this.#game.getIsGameSuccess()) return this.end();
    this.askRestart();
  }

  /**
   * 재시작 여부를 입력 받는다.
   */
  askRestart() {
    readGameCommand(this.handleGameCommandInputException.bind(this));
  }

  /**
   * 재시작 입력 예외 처리를 한다.
   */
  handleGameCommandInputException(input) {
    try {
      validateRetry(input);
      this.handleGameCommandInput.call(this, input);
    } catch (e) {
      printError(e);
      this.askRestart();
    }
  }

  /**
   * 재시작 입력 후 과정을 다룬다.
   */
  handleGameCommandInput(input) {
    if (input === GAME_RESULT.quit) return this.end();
    this.#game.retry();
    this.askMove();
  }

  /**
   * 게임을 종료한다.
   */
  end() {
    printGameEnd();
    printMap(this.#game.getMovingState());
    printResult(this.#game.getIsGameSuccess(), this.#game.getTryCnt());
  }
}

module.exports = App;
