const { printIntro } = require("./OutputView");

class App {
  play() {
    printIntro();
  }
}

const app = new App();
app.play();

module.exports = App;
