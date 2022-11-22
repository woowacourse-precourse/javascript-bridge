const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeGame = require('../model/BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { OUTPUT_MESSAGE, GAME_RULE, COMMAND } = require('../utils/Constant');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printStartGame();
    this.makeBridge();
  }

  makeGame(length) {
    const bridge = BridgeMaker.makeBridge(Number(length), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge, 0, 1);
  }

  makeBridge() {
    InputView.readBridgeSize((length) => {
      this.makeGame(length);
      this.startMove();
    });
  }

  startMove() {
    InputView.readMoving((direction) => {
      if (this.#bridgeGame.isMove(direction)) {
        this.#bridgeGame.move();
        this.renderBridge(GAME_RULE.SUCCESS_MESSAGE);
        this.checkCompletion();
        return;
      }
      this.failGame();
    });
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
    this.startMove();
  }

  failGame() {
    this.renderBridge(GAME_RULE.FAIL_MESSAGE);
    InputView.readGameCommand((command) => {
      if (command === COMMAND.RETRY) {
        this.replay();
        return;
      }
      this.resultGame(GAME_RULE.FAIL_MESSAGE);
    });
  }

  replay() {
    this.#bridgeGame.retry();
    this.startMove();
  }

  resultGame(result) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    this.renderBridge(result);
    OutputView.printResult(result, this.#bridgeGame.getRetryCount());
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = BridgeGameController;
