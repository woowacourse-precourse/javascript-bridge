const InputView = require("./InputView");
const { Console, Random } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    OutputView.gameStart();
    InputView.readBridgeSize((input) => {
      console.log(input);
      this.stopProgram();
    });
  }

  stopProgram() {
    Console.close();
  }
}

module.exports = App;

app = new App();
app.play();
