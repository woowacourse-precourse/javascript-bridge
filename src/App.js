const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const MESSAGE = require('./constants/BridgeGameMessage');
const { GAME_STATUS } = require('./constants/BridgeGameSetting');

class App {
  #size;

  #bridgeArr;

  #count;

  #bridgeUi;

  #result;

  constructor() {
    this.#size = 0;
    this.#bridgeArr = [];
    this.#count = 0;
    this.#bridgeUi = [];
    this.#result = '';
  }

  play() {
    Console.print(MESSAGE.PROCESS.GAME_START);
    this.#size = InputView.readBridgeSize();
    this.#bridgeArr = BridgeMaker.makeBridge(this.#size);
    this.start();
  }

  start() {
    this.#bridgeUi = [];
    this.#count += 1;
    const newGame = new BridgeGame(this.#bridgeArr);
    for (let i = 0; i < this.#size; i += 1) {
      this.#bridgeUi.push(InputView.readMoving());
      this.result = newGame.move(i, this.#bridgeUi[i]);
      OutputView.printMap(newGame.resultBridge);
      if (!this.result) {
        return;
      }
    }
    this.print(newGame.resultBridge);
  }

  restart(bridge) {
    const restart = InputView.readGameCommand();
    if (restart === GAME_STATUS.GAME_RESTART) {
      this.start();
    }
    if (restart === GAME_STATUS.GAME_QUIT)
      OutputView.printResult(bridge, this.#count, this.#result);
  }

  print(bridge) {
    if (!this.#result) {
      this.restart(bridge);
    }
    OutputView.printResult(bridge, this.#count, this.#result);
  }
}

module.exports = App;
