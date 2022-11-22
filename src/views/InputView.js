const { QUESTION_MESSAGE } = require('../constants');
const { Console } = require('@woowacourse/mission-utils');
const ExceptionHandler = require('../utils/ExceptionHandler');

const InputView = {
  readBridgeSize() {
    return new Promise((resolve, _) => {
      Console.readLine(QUESTION_MESSAGE.BRIDGE_SIZE, resolve);
    });
  },

  readMoving() {
    return new Promise((resolve, _) => {
      Console.readLine(QUESTION_MESSAGE.MOVING, resolve);
    });
  },

  readGameCommand() {
    return new Promise((resolve, _) => {
      Console.readLine(QUESTION_MESSAGE.GAME_COMMAND, resolve);
    });
  },

  async read(readType) {
    let inputedValue = await InputView[`read${readType}`]();
    const isValidation = ExceptionHandler.tryValidate(inputedValue, readType);

    if (!isValidation) return await this.read(readType);

    return inputedValue;
  },
};

module.exports = InputView;
