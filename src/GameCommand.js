/* eslint-disable class-methods-use-this */
class GameCommand {
  #gameCommand;

  constructor(gameCommand) {
    this.validate(gameCommand);
    this.#gameCommand = gameCommand;
  }

  validate(gameCommand) {
    if (gameCommand !== 'R' && gameCommand !== 'Q') {
      throw new Error('[ERROR] 게임 재시작/종료 여부는 R(재시작)과 Q(종료) 중 하나의 문자만 입력하시길 바랍니다.');
    }
  }

  getGameCommand() {
    return this.#gameCommand;
  }
}

module.exports = GameCommand;
