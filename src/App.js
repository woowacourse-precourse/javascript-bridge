const Player = require("./Player");

class App {
  play() {
    const play = new Player();
    const answer = play.createBridgeAnswer();
    const game = play.setBridgeGame(answer);
    play.playGame(answer, game);
  }
}

module.exports = App;
