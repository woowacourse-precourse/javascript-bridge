const BridgeGame = require("./BridgeGame");

class App {
  play() {
    new BridgeGame().gameStart(fun);
  }
}

const app = new App();
app.play();

module.exports = App;
