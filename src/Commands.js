const { MOVING, COMMAND, ERROR } = require('./utils/constants');

class Command {
  constructor(command) {
    this.validate(command);
    this.command = command;
  }

  validate(command) {
    throw new Error('validate() must be implement.');
  }
}

class Size extends Command {
  constructor(size) {
    super(size);
    this.command = +size;
  }

  validate(size) {
    if (!/^[0-9]+$/.test(size)) {
      throw new Error(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }

    if (size !== String(+size)) {
      throw new Error(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  }
}

class Moving extends Command {
  validate(moving) {
    if (moving !== MOVING.UP && moving !== MOVING.DOWN) {
      throw new Error(ERROR.INVALID_MOVING_ERROR);
    }
  }
}

class GameCommand extends Command {
  validate(gameCommand) {
    if (gameCommand !== COMMAND.RESTART && gameCommand !== COMMAND.QUIT) {
      throw new Error(ERROR.INVALID_COMMAND_ERROR);
    }
  }
}

module.exports = {
  Size,
  Moving,
  GameCommand,
};
