const MissionUtils = require('@woowacourse/mission-utils');
const {
  BridgeConfig,
  GameConfig,
  AppConfig,
  Message,
} = require('./Config');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  static requestUserInput(inputFunction) {
    let errorCount;
    let input = false;
    for (errorCount = -1; !input && errorCount < AppConfig.MAX_ERROR_PATIENCE; errorCount += 1) {
      input = App.#tryInput(inputFunction);
    }
    if (errorCount === AppConfig.MAX_ERROR_PATIENCE) throw new Error(Message.ERROR_TOO_MANY);
    return input;
  }

  static #tryInput(inputFunction) {
    try {
      return inputFunction();
    } catch (error) {
      OutputView.printErrorLog(error);
      return false;
    }
  }

  play() {}
}

module.exports = App;
