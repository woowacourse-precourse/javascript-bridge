const BridgeSizeValidation = require('./validation/BridgeSizeValidation');
const MoveCommandValidation = require('./validation/MoveCommandValidation');
const GameCommandValidation = require('./validation/GameCommandValidation');
const BridgeMaker = require('./lib/BridgeMaker');
const BridgeRandomNumberGenerator = require('./lib/BridgeRandomNumberGenerator');

class BridgeGame {
  #size;
  #bridge;

  move(command, round) {
    MoveCommandValidation(command);
    return this.#isMovable(command, round);
  }

  retry(reply) {
    GameCommandValidation(reply);
    return reply === 'R' ? true : false;
  }

  setSize(input) {
    BridgeSizeValidation(input);
    this.#size = input;
  }

  makeBridge() {
    this.#bridge = BridgeMaker.makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
  }

  #isMovable(command, round) {
    return command === this.#bridge[round];
  }
}

module.exports = BridgeGame;
