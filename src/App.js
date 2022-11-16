/* eslint-disable class-methods-use-this */
const BridgeMaker = require("./BridgeMaker");
const { Console } = require('@woowacourse/mission-utils');
const { ERROR, GAME, INPUT, BRIDGE, BRIDGE_MOVEMENT } = require("./constants");
const InputView = require('./InputView')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const Validator = require('./Validator');

class App {
  bridge;

  play() {
    Console.print(GAME.START);
    this.setBridgeSize();
  }

  setBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    Validator.isValidBridgeSize(size);
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();
    this.bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
