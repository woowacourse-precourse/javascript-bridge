const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { GAME_MESSAGE } = require('../utils/constants/GameSystem');

class View {
  #output;

  #input;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readBridgeSize(callback) {
    this.#input.readLine(GAME_MESSAGE.bridge_size, callback);
  }

  readMoving(callback) {
    this.#input.readLine(GAME_MESSAGE.bridge_move, callback);
  }

  readGameCommand(callback) {
    this.#input.readLine(GAME_MESSAGE.again_or_quit, callback);
  }

  printStart() {
    this.#output.printStart();
  }

  printError(message) {
    this.#output.printError(message);
  }

  printMap(map) {
    this.#output.printMap(map);
  }

  printResult(map, isGameWin, retryCount) {
    this.#output.printResult(map, isGameWin, retryCount);
  }

  close() {
    this.#output.close();
  }
}

module.exports = View;
