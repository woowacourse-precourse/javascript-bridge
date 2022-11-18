const { printMsg } = require('./OutputView.js');
const { requestBridgeSize } = require('./InputView.js');
const { GAME_MSG } = require('./constants/message.js');

class App {
  play() {
    printMsg(GAME_MSG.start);
    requestBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
