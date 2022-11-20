const MissionUtils = require('@woowacourse/mission-utils');
const {
  MESSAGE_INPUT_BRIDGE_LENGTH,
  MESSAGE_NEXT_MOVING_INPUT,
  MESSAGE_RETRY,
} = require('./constants');
const BridgeMaker = require('./BridgeMaker');
const Validator = require('./Validator');

const { moveCommandValidator, bridgeLengthValidator, restartCommandValidator } = Validator;
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

const { Console } = MissionUtils;
const GAME_MANAGER = new BridgeGame();

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_INPUT_BRIDGE_LENGTH, (length) => {
      if (!bridgeLengthValidator(length)) this.readBridgeSize();
      GAME_MANAGER.setBridge(BridgeMaker.makeBridge(length, generate));
      InputView.readMoving();
    });
  },

  readMoving() {
    Console.readLine(MESSAGE_NEXT_MOVING_INPUT, (direction) => {
      if (!moveCommandValidator(direction)) this.readMoving();
      GAME_MANAGER.move(direction) ? this.readMoving() : this.readGameCommand();
    });
  },

  readGameCommand() {
    if (GAME_MANAGER.getGameComplete()) return;
    Console.readLine(MESSAGE_RETRY, (command) => {
      if (!restartCommandValidator(command)) this.readGameCommand();
      GAME_MANAGER.retry(command) ? this.readMoving() : GAME_MANAGER.printResult();
    });
  },
};

module.exports = InputView;
