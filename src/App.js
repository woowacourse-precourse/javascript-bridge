const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const GameMessage = require('./constants/GameMessage');
const BridgeGameError = require('./BridgeGameError');

class App {
  /** @type {BridgeGame} */
  #BridgeGame = new BridgeGame();

  /**
   * 게임 오버 시 재시도 또는 종료를 처리하는 메소드
   *
   * @param {string} input
   */
  #getGameCommand(input) {
    try {
      Validation.Game(input, 'GAMESTATUS');

      if (input === 'R') {
        this.#BridgeGame.retry();
        InputView.readMoving(this.#getMoveDirection.bind(this));
      } else OutputView.printResult(this.#BridgeGame.quit());
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
      const moveResult = this.#BridgeGame.move(input);
      OutputView.printMap(moveResult);

      switch (moveResult.flag) {
        case 'GAME_OVER':
          InputView.readGameCommand(this.#getGameCommand.bind(this));
          break;
        case 'GAME_END':
          OutputView.printResult(moveResult);
          break;
        case 'CONTINUE':
          InputView.readMoving(this.#getMoveDirection.bind(this));
          break;
        default:
          throw new BridgeGameError('게임 진행에 오류가 발생했습니다.');
      }
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

      const bridgeSize = Number(input);
      this.#BridgeGame.init(bridgeSize);

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
