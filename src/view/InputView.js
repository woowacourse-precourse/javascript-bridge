const { Console } = require('@woowacourse/mission-utils');

const Input = require('./input/Input');
const GameMoveEvent = require('./event/GameMoveEvent');
const GameCommandEvent = require('./event/GameCommandEvent');

const controller = require('../controller/BridgeController');

const { errorCheckFor } = require('../utils/inputErrorCheck');

const { GAME_QUESTION } = require('../utils/constants');

const InputView = {
  input: new Input(),

  readBridgeSize() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      errorCheckFor(
        () => this.input.inputBridgeSize(bridgeLength),
        () => this.readBridgeSize()
      );

      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      errorCheckFor(
        () => this.moveEvent(command),
        () => this.readMoving()
      );
    });
  },

  readGameCommand() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      errorCheckFor(
        () => this.input.inputGameCommand(command),
        () => this.readGameCommand()
      );

      this.commandEvent(command);
    });
  },

  moveEvent(command) {
    this.input.inputMoveCommand(command);

    const gameMoveEvent = new GameMoveEvent({
      inputViewInstance: this,
      gameState: controller.outputExit().result,
    });

    gameMoveEvent.handle();
  },

  commandEvent(command) {
    const gameCommandEvent = new GameCommandEvent({
      inputViewInstance: this,
      command,
    });

    gameCommandEvent.handle();
  },
};

module.exports = InputView;
