const OutputView = require('./OutputView');
const { MESSAGE } = require('./constants');

class App {
  play = async () => {
    OutputView.printMessage(MESSAGE.ENTRY);
  };
}

const app = new App();
app.play();

module.exports = App;
