/* eslint-disable class-methods-use-this */
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { Console } = require('@woowacourse/mission-utils');
const { GAME, INPUT } = require("./constants");
const InputView = require('./InputView')
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const Validator = require('./Validator');

class App {
  constructor() {
    this.process = [];
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStart();
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    Validator.isValidBridgeSize(size);
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridgeGame.setBridge(bridge);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.makeMoving.bind(this));
  }

  makeMoving(moving) {
    Validator.isValidMoving(moving);
    const move = this.bridgeGame.move(moving);
    OutputView.printMap(move);
    if (this.bridgeGame.isEnd()) {
      return this.makeEndGame();
    }
    return this.checkStatus(move);
  }

  }
}

const app = new App();
app.play();

module.exports = App;
