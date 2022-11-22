/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./utils/constructor');
const { handleInputError } = require('./utils/handler');
const { validBridgeSize, validMoving, validCommand } = require('./utils/Validation');

const InputView = {
  readBridgeSize(nextStep) {
    return Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
      try {
        validBridgeSize(size);
        nextStep(size);
      } catch (e) {
        handleInputError(e.message, InputView.readBridgeSize, nextStep);
      }
    });
  },

  readMoving(nextStep) {
    return Console.readLine(INPUT_MESSAGE.MOVEMENT , movement => {
      try {
        validMoving(movement);
        nextStep(movement);
      } catch (e) {
        handleInputError(e.message, InputView.readMoving, nextStep);
      }
    });
  },

  readGameCommand(nextStep) {
    return Console.readLine(INPUT_MESSAGE.COMMAND, command => {
      try {
        validCommand(command);
        nextStep(command);
      } catch (e) {
        handleInputError(e.message, InputView.readGameCommand, nextStep);
      }
    })
  },
};

module.exports = InputView;