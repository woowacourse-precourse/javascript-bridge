const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const ExceptionHandler = require("../utils/ExceptionHandler");
const BridgeGame = require("../Model/BridgeGame");
const Constant = require("../utils/Constant");
const Message = require("../utils/Message");

class GameController {
  #tries;

  constructor() {
    this.BridgeGame;
    this.#tries = 1;
  }
}

module.exports = GameController;
