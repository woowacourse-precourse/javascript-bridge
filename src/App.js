const OutputView = require('./OutputView');
const { START_GAME_MSG } = require('./constants');

class App {
  play() {
    OutputView.printGuide(START_GAME_MSG);
  }
}

const app = new App();
app.play();
module.exports = App;
