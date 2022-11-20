const { GAME_MESSAGES, INITIALIZE_VALUES } = require("./constants/constant");
const GameInfo = require("./domain/GameInfo");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

class App {
  constructor() {
    GameInfo.numberOfPlayGames = INITIALIZE_VALUES.zero;
    GameInfo.gameResult = INITIALIZE_VALUES.failure;
  }

  play() {
    OutputView.printMessage(GAME_MESSAGES.gameStart);
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();