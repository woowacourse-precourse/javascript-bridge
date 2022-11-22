/* eslint-disable class-methods-use-this */
// const { Console } = require('@woowacourse/mission-utils');
const { BridgeGameControl } = require('./controller');

class App {
  play() {
    const bridgeGameControl = new BridgeGameControl();
    bridgeGameControl.start();
  }
}

const app = new App();
app.play();

module.exports = App;
