const InputView = require("./InputView.js");
const { GameInit } = require("./GameUtils.js");
const OutputView = require("./OutputView.js");

class App {
  play() {
    GameInit.init();
    OutputView.start();
    InputView.readBridgeSize();
  }
}

module.exports = App;

a = new App;
a.play();