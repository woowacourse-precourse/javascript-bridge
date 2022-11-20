const { GAME_MESSAGES } = require("./constant");
const GameInfo = require("./GameInfo");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    GameInfo.numberOfPlayGames = 0;
    GameInfo.gameResult = "실패";
  }

  play() {
    OutputView.printMessage(GAME_MESSAGES.gameStart);
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();