const BridgeGame = require('./BridgeGame');
const { readBridgeSize, readMoving, readGameCommand, exit } = require('./InputView');
const { printMap, printResult } = require('./OutputView');
const { isPlayerPassed, isPlayerCleared } = require('./Utils/checkPlayerStatus');
const { INPUT_RETRY } = require('./Constants/InputValues');

class BridgeController {
  #Game;

  constructor() {
    this.#Game = new BridgeGame();
  }

  getBridge = () => {
    readBridgeSize(this.sendBridge);
  };

  sendBridge = (size) => {
    this.#Game.initializeBridge(size);
    this.getMove();
  };

  getMove = () => {
    readMoving(this.sendMove);
  };

  sendMove = (moveInput) => {
    this.#Game.move(moveInput);
    this.sendOutputRequestToModel();
  };

  sendOutputRequestToModel = () => {
    const { bridge } = this.#Game.getStatus();
    const input = this.#Game.getStatus().Input;

    const isPassed = isPlayerPassed(input[input.length - 1], bridge[input.length - 1]);
    const isCleared = isPlayerCleared(bridge.length, input.length, isPassed);
    this.#Game.setMoveOutput(isPassed, isCleared);
    this.sendOutputRequestToView();
  };

  sendOutputRequestToView = () => {
    const { output } = this.#Game.getStatus();
    printMap(output);
    this.checkMoveOption();
  };

  checkMoveOption = () => {
    const { isPassed, isCleared } = this.#Game.getStatus();
    if (isPassed) this.getMove();
    if (!isPassed) this.getCommand();
    if (isCleared) this.finishControl();
  };

  getCommand = () => {
    readGameCommand(this.checkGameOption);
  };

  checkGameOption = (command) => {
    const { count, isCleared, output } = this.#Game.getStatus();
    if (command === INPUT_RETRY.restart) {
      this.#Game.retry();
      this.getMove();
    }
    if (command === INPUT_RETRY.quit) {
      printResult(count, isCleared, output);
      exit();
    }
  };

  finishControl = () => {
    const { count, isCleared, output } = this.#Game.getStatus();
    printResult(count, isCleared, output);
    exit();
  };
}

const controller = new BridgeController();
controller.getBridge();
module.exports = BridgeController;
