const inputView = require("./InputView");
const outputView = require("./OutputView");

class App {
  constructor() {
    outputView.printGameStart();
  }
  play() {}
}

const app = new App();
app.play();

module.exports = App;
