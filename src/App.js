const BridgeGame = require('./BridgeGame');
const Validation = require('./Validations');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const GameMessage = require('./constants/GameMessage');
const Flag = require('./constants/Flag');

class App {
  /** @type {BridgeGame} */
  #BridgeGame = new BridgeGame();

  #retryOrQuit(input) {
    switch (input) {
      case 'R':
        this.#BridgeGame.retry();
        InputView.readMoving(this.#getMoveDirection.bind(this));
        break;
      case 'Q':
        OutputView.printResult(this.#BridgeGame.quit());
        break;
    }
  }

  #midTermInspection(movedResult) {
    switch (movedResult.flag) {
      case Flag.OVER:
        InputView.readGameCommand(this.#getGameCommand.bind(this));
        break;
      case Flag.END:
        OutputView.printResult(movedResult);
        break;
      case Flag.CONTINUE:
        InputView.readMoving(this.#getMoveDirection.bind(this));
        break;
    }
  }

  /**
   * 게임 오버 시 재시도 또는 종료를 처리하는 메소드
   *
   * @param {string} input
   */
  #getGameCommand(input) {
    try {
      Validation.Game(input, 'GAMESTATUS');
      this.#retryOrQuit(input);
    } catch (err) {
      OutputView.printMessage(err.message);
      InputView.readGameCommand(this.#getGameCommand.bind(this));
    }
  }

  /**
   * 다리 이동 시 방향을 입력받아 처리하는 메소드
   *
   * @param {string} input
   */
  #getMoveDirection(input) {
    try {
      Validation.Game(input, 'DIRECTION');
      const movedResult = this.#BridgeGame.move(input);

      OutputView.printMap(movedResult);
      this.#midTermInspection(movedResult);
    } catch (err) {
      OutputView.printMessage(err.message);
      InputView.readMoving(this.#getMoveDirection.bind(this));
    }
  }

  /**
   * 다리 크기를 입력받아 초기 설정을 진행하는 메소드
   *
   * @param {string} input
   */
  #getBridgeSize(input) {
    try {
      Validation.Bridge(input);
      this.#BridgeGame.init(Number(input));

      InputView.readMoving(this.#getMoveDirection.bind(this));
    } catch (err) {
      OutputView.printMessage(err.message);
      InputView.readBridgeSize(this.#getBridgeSize.bind(this));
    }
  }

  play() {
    OutputView.printMessage(GameMessage.WELCOME);
    InputView.readBridgeSize(this.#getBridgeSize.bind(this));
  }
}

module.exports = App;
