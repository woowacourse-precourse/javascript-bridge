const InputView = require('./InputView');
class App {
  async play() {
    const SIZE = await InputView.readBridgeSize();
    console.log(SIZE);
    const MOVE = await InputView.readMoving();
    console.log(MOVE);
    const RESTART_OR_END = await InputView.readGameCommand();
    console.log(RESTART_OR_END);
  }
}

module.exports = App;
const app = new App();
app.play();
