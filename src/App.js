const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MSG } = require('./constants');
const BridgeGame = require('./BridgeGame');
class App {
  play() {
    Console.print(OUTPUT_MSG.start);
    const bridgeGame = new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
