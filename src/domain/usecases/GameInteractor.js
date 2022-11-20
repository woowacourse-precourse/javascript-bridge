const GameMetaData = require('../entities/GameMetaData');

const RULE = require('../constants');

const ERORR_MESSAGE = require('../error/error.constants');
const GameCommandError = require('../error/GameCommandError');

class GameInteractor {
  #game;

  constructor() {
    this.#game = new GameMetaData();
  }

  addTry() {
    this.#game.addTry();
  }

  getTrys() {
    return this.#game.getTryCount();
  }

  triggerGameCommand(command, { restart, exit }) {
    if (command === RULE.GAME_COMMAND.RETRY) return restart();
    if (command === RULE.GAME_COMMAND.EXIT) return exit(false);
    throw new GameCommandError(ERORR_MESSAGE.INVALID_GAME_COMMAND);
  }
}

module.exports = GameInteractor;
