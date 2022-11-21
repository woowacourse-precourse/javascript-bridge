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
   * @param {string} input
   */
  #getMoveDirection(input) {
    Validation.Game(input, 'DIRECTION');

    const moveResult = this.#BridgeGame.move(input);
    OutputView.printMap(moveResult);

    switch (moveResult.flag) {
      case 'GAME_OVER':
        // TODO: 오답 입력으로 재시작, 종료를 물어보는 경우
        break;
      case 'GAME_END':
        // TODO: 게임이 완전히 종료된 경우
        break;
      case 'CONTINUE':
        InputView.readMoving(this.#getMoveDirection.bind(this));
        break;
      default:
        throw new BridgeGameError('게임 진행에 오류가 발생했습니다.');
    }
  }

  /**
   * @param {string} input
   */
  #getBridgeSize(input) {
    Validation.Bridge(input);

    const bridgeSize = Number(input);
    this.#BridgeGame.init(bridgeSize);

    InputView.readMoving(this.#getMoveDirection.bind(this));
  }

  play() {
    OutputView.printMessage(GameMessage.WELCOME);
    InputView.readBridgeSize(this.#getBridgeSize.bind(this));
  }
}

new App().play();

module.exports = App;
