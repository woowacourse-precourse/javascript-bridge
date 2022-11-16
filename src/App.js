/* eslint-disable class-methods-use-this */
const BridgeMaker = require("./BridgeMaker");
const { Console } = require('@woowacourse/mission-utils');
const { ERROR, GAME, INPUT, BRIDGE, BRIDGE_MOVEMENT } = require("./constants");
const InputView = require('./InputView')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const Validator = require('./Validator');

class App {
  bridge;

  constructor() {
    this.process = [];
  }

  play() {
    Console.print(GAME.START);
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    Validator.isValidBridgeSize(size);
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();
    this.bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.makeMoving.bind(this));
  }

  makeMoving(moving) {
    Validator.isValidMoving(moving);
  }
}

const app = new App();
app.play();

module.exports = App;
