const { printStartMsg } = require('./OutputView.js');

class App {
  play() {
    printStartMsg();
  }
}

const app = new App();
app.play();

module.exports = App;
