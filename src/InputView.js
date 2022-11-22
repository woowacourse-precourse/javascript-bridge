const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MESSAGE } = require('./Constants');
const InputVaildation = require('./InputValidation');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(REQUEST_MESSAGE.bridgeLength, (length) => {
      try {
        InputVaildation.ofBridgeLength(length);
        callback.call(this, length);
      } catch {
        OutputView.printWrongInputOfBridgeLength();
        this.requestBridgeLength();
      }
    });
  },

  readMoving(callback) {
    Console.readLine(REQUEST_MESSAGE.move, (drection) => {
      try {
        InputVaildation.ofMove(drection);
        callback.call(this, drection);
      } catch {
        OutputView.printWrongInputOfMoving();
        this.requestMove();
      }
    });
  },

  readRetryOrQuit(callback) {
    Console.readLine(REQUEST_MESSAGE.command, (command) => {
      try {
        InputVaildation.ofRetryOrQuit(command);
        callback.call(this, command);
      } catch {
        OutputView.printWrongInputOfRetryOrQuit();
        this.fail();
      }
    });
  },
};

module.exports = InputView;
