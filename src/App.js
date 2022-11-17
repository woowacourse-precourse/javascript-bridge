const inputView = require('./ui/InputView');
const outputView = require('./ui/OutputView');

class App {
  play() {
    outputView.printStartMessage();
    inputView.readMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
