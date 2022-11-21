const Player = require("./Player");

class App {
  play() {
    const play = new Player();
    play.createBridgeAnswer();
  }
}

module.exports = App;
