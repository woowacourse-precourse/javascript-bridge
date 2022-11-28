const BridgeSize = require('./BridgeSize');
const Moving = require('./Moving');
const GameCommand = require('./GameCommand');

class Validator {
  #BridgeSize;

  #Moving;

  #GameCommand;

  constructor() {
    this.#BridgeSize = new BridgeSize();
    this.#Moving = new Moving();
    this.#GameCommand = new GameCommand();
  }

  checkBridgeSize(input) {
    this.#BridgeSize.checkInput(input);
  }

  checkMoving(input) {
    this.#Moving.checkInput(input);
  }

  checkGameCommand(input) {
    this.#GameCommand.checkInput(input);
  }
}

module.exports = Validator;
