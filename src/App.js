const command = require('./utils/message');
const OutputView = require('./OutputView');
class App {
  play() {
    OutputView.printCommand(command.START);
  }
}

const app = new App();
app.play();

module.exports = App;
