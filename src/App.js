/* eslint-disable no-new */
/* eslint-disable no-continue */
const Bridge = require('./domains/Bridge');
const BridgeGame = require('./domains/BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const Routine = require('./utils/Routine');

class App {
  /** @type {BridgeGame} */
  #bridgeGame;

  /**
   * 다리를 생성하는 절차
   *
   * @param {Routine} routine
   */
  * #routineMakeBridge(routine) {
    yield (resolve) => InputView.readBridgeSize(resolve);
    const bridgeSize = routine.withdrawReturn();
    const bridge = new Bridge(
      BridgeMaker.makeBridge(bridgeSize, () => BridgeRandomNumberGenerator.generate()),
    );

    this.#bridgeGame = new BridgeGame(bridge);
  }

  /**
   * 다리 건너기 게임을 진행하는 절차
   *
   * @param {Routine} routine
   */
  * #routinePlay(routine) {
    while (!this.#bridgeGame.isArrived()) {
      yield (resolve) => InputView.readMoving(resolve);
      if (this.#move(routine.withdrawReturn())) continue;

      yield (resolve) => InputView.readGameCommand(resolve);
      if (!this.#executeGameCommand(routine.withdrawReturn())) break;
    }
  }

  /**
   * @param {string} tile
   * @returns {boolean} 생존 여부
   */
  #move(tile) {
    const survived = this.#bridgeGame.move(tile);
    OutputView.printMap(this.#bridgeGame);
    return survived;
  }

  /**
   * @param {string} command
   * @returns {boolean} 게임 계속 진행 여부
   */
  #executeGameCommand(command) {
    if (command === 'R') {
      this.#bridgeGame.retry();
      return true;
    }
    return false;
  }

  /**
   * 전체 절차를 나타내는 함수
   *
   * @param {Routine} routine
   */
  * #routine(routine) {
    OutputView.printWelcome();

    yield* this.#routineMakeBridge(routine);
    yield* this.#routinePlay(routine);

    OutputView.printResult(this.#bridgeGame);
    InputView.close();
  }

  play() {
    new Routine(this.#routine.bind(this));
  }
}

module.exports = App;
