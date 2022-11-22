const InputView = require("./InputView");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
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
