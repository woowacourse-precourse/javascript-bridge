const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { OUTPUT_MESSAGE, GAME_RULE } = require('./utils/Constant');
const Exception = require('./utils/Exception');
const Validator = require('./utils/Validator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #bridgeGame;
  #attempts;

  constructor() {
    this.#attempts = 1;
  }

  play() {
    OutputView.printStartGame();
    this.readValidLength();
  }

  readValidLength() {
    InputView.readBridgeSize((length) => {
      if (Exception.isThrow(Validator.bridgeSize, length)) {
        this.makeBridge(length);
        return;
      }
      this.readValidLength();
    });
  }

  makeGame(length) {
    const bridge = BridgeMaker.makeBridge(Number(length), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge, 0);
  }

  makeBridge(length) {
    this.makeGame(length);
    this.readValidDirection();
  }

  readValidDirection() {
    InputView.readMoving((direction) => {
      if (Exception.isThrow(Validator.direction, direction)) {
        this.startMove(direction);
        return;
      }
      this.readValidDirection();
    });
  }

  startMove(direction) {
    if (this.#bridgeGame.isMove(direction)) {
      this.#bridgeGame.move();
      this.renderBridge(GAME_RULE.SUCCESS_MESSAGE);
      this.checkCompletion();
      return;
    }
    this.renderBridge(GAME_RULE.FAIL_MESSAGE);
    this.readValidFinalCommand();
  }

  renderBridge(result) {
    let convertedBridge = this.#bridgeGame.getConvertedBridge();
    if (result === GAME_RULE.FAIL_MESSAGE) {
      convertedBridge = this.#bridgeGame.getFailureBridge(convertedBridge);
    }
    OutputView.printMap(convertedBridge);
  }

  checkCompletion() {
    if (this.#bridgeGame.isCompletion()) {
      this.resultGame(GAME_RULE.SUCCESS_MESSAGE);
      return;
    }
    this.readValidDirection();
  }

  readValidFinalCommand() {
    InputView.readGameCommand((command) => {
      if (Exception.isThrow(Validator.finalGame, command)) {
        this.failGame(command);
        return;
      }
      this.readValidFinalCommand();
    });
  }

  failGame(command) {
    if (command === GAME_RULE.RETRY_COMMAND) {
      this.replay();
      return;
    }
    this.resultGame(GAME_RULE.FAIL_MESSAGE);
  }

  resultGame(result) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    this.renderBridge(result);
    OutputView.printResult(result, this.#attempts);
    this.end();
  }

  end() {
    Console.close();
  }

  replay() {
    this.#attempts += 1;
    this.#bridgeGame.retry();
    this.readValidDirection();
  }
}

module.exports = App;
