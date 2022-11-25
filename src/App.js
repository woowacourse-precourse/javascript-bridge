const BridgeGame = require("./controller/BridgeGame");
const ModeEasy = require("./controller/Mode/ModeEasy");

class App {
  play() {
    const bridgeGame = new BridgeGame(new ModeEasy());
    bridgeGame.next();
  }
}


module.exports = App;
