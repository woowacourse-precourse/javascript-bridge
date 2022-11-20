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
      throw new Error(ERROR.bridge_size_error);
    }

    if (size !== String(+size)) {
      throw new Error(ERROR.bridge_size_error);
    }
  }
}

class Moving extends Command {
  validate(moving) {
    if (moving !== MOVING.UP && moving !== MOVING.DOWN) {
      throw new Error(ERROR.read_moving_error);
    }
  }
}

class GameCommand extends Command {
  validate(gameCommand) {
    if (gameCommand !== COMMAND.restart && gameCommand !== COMMAND.quit) {
      throw new Error(ERROR.read_command_error);
    }
  }
}

module.exports = {
  Size,
  Moving,
  GameCommand,
};
