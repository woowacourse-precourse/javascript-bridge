/* eslint-disable class-methods-use-this */
// const { Console } = require('@woowacourse/mission-utils');
const BridgeGameControl = require('./BridgeGameControl');

class App {
  play() {
    const bridgeGameControl = new BridgeGameControl();
    bridgeGameControl.make();
  }
}

const app = new App();
app.play();

module.exports = App;
