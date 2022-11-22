const { GAME_MESSAGES } = require("./constants/constant");
const { GameInit } = require("./domain/GameInfo");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

class App {
  play() {
    GameInit.init();
    OutputView.printMessage(GAME_MESSAGES.gameStart);
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();