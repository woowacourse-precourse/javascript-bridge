const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Message = require("./Message");

class App {
  play() {
    Console.print(`${Message.START_MESSAGE.START_TEXT}\n`);1
    InputView.readBridgeSize();
  }
}

const game = new App();
game.play();

module.exports = App;
