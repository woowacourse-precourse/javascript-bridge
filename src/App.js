const BridgeGame = require("./controller/BridgeGame");
const TwoPositionFactory = require("./model/PositionFactory/TwoPositionFactory");

class App {
  constructor() {
  }
  play() {
    const game = new BridgeGame(new TwoPositionFactory());
    game.next();
  }
}

const app = new App();
app.play();

module.exports = App;
