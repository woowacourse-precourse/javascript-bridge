const BridgeGame = require("./controller/BridgeGame");
const BridgeGameV2 = require("./controller/BridgeGameV2");
const TwoPositionFactory = require("./model/PositionFactory/TwoPositionFactory");

class App {
  constructor() {
  }
  play() {
    const game = new BridgeGameV2(new TwoPositionFactory());
    game.next();
  }
}

const app = new App();
app.play();

module.exports = App;
