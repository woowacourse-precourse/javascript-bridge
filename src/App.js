const { printStartMessage } = require("./OutputView");

class App {
  play() {
    printStartMessage();
  }
}

const app = new App();
app.play();
module.exports = App;
