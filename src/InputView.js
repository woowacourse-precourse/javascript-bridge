const { Console } = require("@woowacourse/mission-utils");
const { NOTICE } = require("./constants");
const { handleBridgeSizeInput, handleMovingInput, handleRetrialInput } = require("./InputHandler");

const InputView = {
  readBridgeSize(app) {
    Console.readLine(NOTICE.INPUT_SIZE, (bridgeSize) => {
      const readAgain = InputView.readBridgeSize;
      handleBridgeSizeInput({ app, bridgeSize, readAgain });
    });
  },

  readMoving(app, bridgeGame) {
    Console.readLine(NOTICE.INPUT_DIRECTION, (direction) => {
      const readAgain = InputView.readMoving;
      handleMovingInput({ app, bridgeGame, direction, readAgain });
    });
  },

  readGameCommand(app, bridgeGame) {
    Console.readLine(NOTICE.INPUT_RETRY, (answer) => {
      const readAgain = InputView.readGameCommand;
      handleRetrialInput({ app, bridgeGame, answer, readAgain });
    });
  },
};

module.exports = InputView;
