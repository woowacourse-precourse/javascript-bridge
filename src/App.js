const Output = require("./OutputView");
const Input = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const RandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");
const constant = require('./constant');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame;
  }

  play() {
    Output.startText();
    Input.readBridgeSize(this.afterBridgeLength);
  }

  afterBridgeLength = (length) => {
    const createRoot = BridgeMaker.makeBridge(length, RandomNumber.generate);
    this.#bridgeGame = new BridgeGame(createRoot);
    Input.readMoving(this.nextMoving);
  }

  nextMoving = (way) => {
    this.#bridgeGame.move(way);
    Output.printMap(this.#bridgeGame);

    this.#bridgeGame.isGoWay ? this.finishSelectCase() : Input.readGameCommand(this.selectRestartEnd);
  }

  finishSelectCase = () => {
    this.#bridgeGame.isSuccess ? this.finish() : Input.readMoving(this.nextMoving);
  }

  selectRestartEnd = (keyOption) => {
    if(keyOption === constant.RETRY) {
      this.#bridgeGame.retry();
      Input.readMoving(this.nextMoving);
    };
    if(keyOption === constant.QUIT) this.finish();
  }

  finish = () => {
    Output.printResult(this.#bridgeGame)
    MissionUtils.Console.close();
  }
}

module.exports = App;
