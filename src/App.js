const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridge = new Bridge();
    const bridgeGame = new BridgeGame();

    Console.print(`${COMMAND.START}`);
    InputView.readBridgeSize(bridge,bridgeGame);
  }
}

// module.exports = App;
const app = new App();
app.play();
