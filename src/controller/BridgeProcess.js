const OutputView = require('../view/OutputView');
const Validation = require('../model/Validaion');
const BridgeGame = require('../model/BridgeGame');

class BridgeProcess {
  #outputView = OutputView;
  #gameReport = new BridgeGame();

  checkValidation(key, checkElement) {
    try {
      return new Validation(key.CHECK_VALIDATION, checkElement).showResult();
    } catch (error) {
      this.#outputView.printError(error);
      return false;
    }
  }

  makeBridge(bridgeSize) {
    this.#gameReport.round.total === 1 ? this.#gameReport.makeBridgeInfo(Number(bridgeSize)) : '';
  }

  moveToBridge(movement) {
    const [match, result] = this.#gameReport.move(movement);
    this.#outputView.printMap(match);
    return [match, result];
  }

  restartGame() {
    this.#gameReport.retry();
  }

  finalResult(sucess, match) {
    this.#outputView.printResult(sucess, this.#gameReport.round.total, match);
  }
}

module.exports = BridgeProcess;
