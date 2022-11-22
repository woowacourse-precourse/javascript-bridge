/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');
const { GAME_COMMAND_RESTART, GAME_COMMAND_QUIT } = require('../Constant');
const { ERROR_INPUT_R_Q_LINE } = require('../Error');

class GameCommand {
  #gameCommand;

  #outputView;

  #close;

  constructor(gameCommand) {
    const outputView = Object.create(OutputView);
    this.#outputView = outputView;
    this.validate(gameCommand);
    this.#gameCommand = gameCommand;
  }

  validate(gameCommand) {
    if (gameCommand !== GAME_COMMAND_RESTART && gameCommand !== GAME_COMMAND_QUIT) {
      this.#close = true;
      this.#outputView.printError(ERROR_INPUT_R_Q_LINE);
    }
  }

  getClose() {
    return this.#close;
  }

  getGameCommand() {
    return this.#gameCommand;
  }
}

module.exports = GameCommand;
