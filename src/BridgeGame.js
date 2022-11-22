const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { KEY, OUTPUT_MESSAGES } = require('./constant');

class BridgeGame {
  #status;
  setBridge(bridgeSize) {
    this.#status = {
      bridge: BridgeMaker.makeBridge(bridgeSize, generate),
      turn: 0,
      alive: 1,
      matchNumber: 1,
    };
  }
  move(move) {
    const returnStatus = { ...this.#status };
    const { bridge, turn } = this.#status;
    this.#status.alive = move === bridge[turn];
    if (this.#status.alive) {
      return this.nextCheck(bridge, turn, returnStatus);
    }
    if (!this.#status.alive) return this.restartPrint();
  }

  nextCheck(bridge, turn, returnStatus) {
    if (bridge.length - 1 === turn) {
      return this.resultPrint();
    }
    if (bridge.length - 1 !== turn) {
      this.#status.turn += 1;
      return this.mapPrint(returnStatus);
    }
  }

  resultPrint() {
    return {
      input: null,
      output: OUTPUT_MESSAGES.PRINT_RESULT,
      status: this.#status,
    };
  }
  mapPrint(returnStatus) {
    return {
      input: OUTPUT_MESSAGES.READ_MOVING,
      output: OUTPUT_MESSAGES.PRINT_MAP,
      status: returnStatus,
    };
  }
  restartPrint() {
    return {
      input: OUTPUT_MESSAGES.READ_GAME_COMMAND,
      output: null,
    };
  }
  retry(alive) {
    if (alive === KEY.RESTART) {
      this.#status.alive = true;
      this.#status.turn = 0;
      this.#status.matchNumber += 1;
      return this.retryPrint();
    }
    if (alive === KEY.END) return this.end();
  }
  retryPrint() {
    return {
      input: OUTPUT_MESSAGES.READ_MOVING,
      output: null,
    };
  }
  endPrint() {
    return {
      input: null,
      output: OUTPUT_MESSAGES.PRINT_RESULT,
      status: this.#status,
    };
  }
}

module.exports = BridgeGame;
