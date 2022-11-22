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
  printNewLine,
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
      printNewLine();
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
    if (this.#game.getIsGameOver()) {
      this.handleGameOver.call(this);
      return;
    }
    this.askMove();
  }

  /**
   * 한 사이클 끝난 뒤를 다룬다.
   */
  handleGameOver() {
    if (this.#game.getIsGameSuccess()) {
      this.end();
      return;
    }
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
    if (input === GAME_RESULT.quit) {
      this.end();
      return;
    }
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
