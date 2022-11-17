const Message = require("./Message");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGameStart(Message.GAME_START);
  }
}

const app = new App();
app.play();

module.exports = App;
