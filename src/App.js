const OutputView = require("./OutputView");
const Player = require("./Player");

class App {
  play() {
    OutputView.printGameStart();
    const play = new Player();
    const answer = play.createBridgeAnswer();
    const game = play.setBridgeGame(answer);
    play.playGame(answer, game);
  }
}

const app = new App();
app.play();

module.exports = App;
