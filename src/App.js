const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const { MOVE_RESULT } = require('./utils/constants');

class App {
  constructor() {
    this.game = null;
  }

  play() {
    this.initBridge();
  }

  initBridge() {
    InputView.readBridgeSize((size) => {
      const randomBridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate,
      );

      this.start(randomBridge);
    });
  }

  start(randomBridge) {
    this.game = new BridgeGame(randomBridge);
    this.movePlayer();
  }

  movePlayer() {
    InputView.readMoving((position) => {
      const { moveResult, pathMap } = this.game.move(position);
      OutputView.printMap(pathMap);

      this.guessNext(moveResult);
    });
  }

  guessNext(moveResult) {
    const commands = {
      [MOVE_RESULT.MOVEABLE]: this.movePlayer,
      [MOVE_RESULT.END]: this.#end,
      [MOVE_RESULT.FAIL]: this.#guessRetry,
    };

    commands[moveResult].call(this);
  }

  #guessRetry() {
    InputView.readGameCommand((isRetry) => {
      isRetry ? this.#retry() : this.#end();
    });
  }

  #retry() {
    this.game.retry();
    this.movePlayer();
  }

  #end() {
    const { tryCount, pathMap, isClear } = this.game.getResult();
    const gameClearMsg = isClear ? '성공' : '실패';

    OutputView.printResult(pathMap, gameClearMsg, tryCount);
    Console.close();
  }
}

module.exports = App;
