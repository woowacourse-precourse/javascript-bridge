const { readBridgeSize, startGame, readMoving } = require("./InputView");

class App {
  play() {
    startGame();
    readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
