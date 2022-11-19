const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { GAME_CONSTANTS } = require('./utils/constants');

class Bridge {
  #pattern;
  #distance;
  #history;
  #tryCount;

  constructor () {
    this.#distance = 0;
    this.#tryCount = 1;
    this.#history = { up: [], down: [] };
  }

  createPattern (moveGame) {
    OutputView.printStart();
    InputView.readBridgeSize(moveGame, this.setPattern.bind(this), BridgeMaker.makeBridge);
  }

  setPattern (pattern) {
    console.log(pattern);
    this.#pattern = pattern;
  }

  askNextStep (retryGame) {
    InputView.readMoving(retryGame, this.moveMap.bind(this));
  }

  moveMap (retryGame, chooseStep) {
    if (this.#pattern[this.#distance] !== chooseStep) {
      if (chooseStep === GAME_CONSTANTS.upStair) {
        this.#history.up.push(GAME_CONSTANTS.notPath);
        this.#history.down.push(GAME_CONSTANTS.empty);
      }
      if (chooseStep === GAME_CONSTANTS.downStair) {
        this.#history.up.push(GAME_CONSTANTS.empty);
        this.#history.down.push(GAME_CONSTANTS.notPath);
      }
      OutputView.printMap(this.#history);
      return retryGame();
    }
    if (chooseStep === GAME_CONSTANTS.upStair) {
      this.#history.up.push(GAME_CONSTANTS.goPath);
      this.#history.down.push(GAME_CONSTANTS.empty);
    }
    if (chooseStep === GAME_CONSTANTS.downStair) {
      this.#history.up.push(GAME_CONSTANTS.empty);
      this.#history.down.push(GAME_CONSTANTS.goPath);
    }
    OutputView.printMap(this.#history);
    this.#distance += 1;
    if (this.#pattern.length === this.#distance) {
      return console.log('게임 종료');
    }
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
