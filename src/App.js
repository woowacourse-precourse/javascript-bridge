const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
class App {
  play() {
    InputView.start();
  }
}
const app = new App();
app.play();
module.exports = App;
