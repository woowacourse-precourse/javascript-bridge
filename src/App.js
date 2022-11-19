const InputView = require('./InputView');
class App {
  async play() {
    const SIZE = await InputView.readBridgeSize();
    console.log(SIZE);
    const MOVE = await InputView.readMoving();
    console.log(MOVE);
  }
}

module.exports = App;
const app = new App();
app.play();
