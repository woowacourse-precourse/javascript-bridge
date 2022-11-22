/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');
const { GAME_COMMAND_RESTART, GAME_COMMAND_QUIT } = require('../Constant');

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
      this.#outputView.printError('[ERROR] 게임 재시작/종료 여부는 R(재시작)과 Q(종료) 중 하나의 문자만 입력하시길 바랍니다.');
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
