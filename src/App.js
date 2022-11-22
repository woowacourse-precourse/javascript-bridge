const { printGameStartMessage } = require('./OutputView.js');
class App {
  constructor() {
    this.bridgeSize = 0;
  }

  play() {
    this.playgame();
  }

  playgame() {
    printGameStartMessage();
  }
}

const app = new App();

app.play();

module.exports = App;
