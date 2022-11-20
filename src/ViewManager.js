const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const { GAME_QUESTION } = require('../lib/constans');
const { parseNumber } = require('../lib/utils');

class ViewManager {
  #game;

  constructor(game) {
    this.#game = game;
  }

  start() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(GAME_QUESTION.size, this.#readBridgeSizeCallback);
  }

  // 화살표 함수로 작성한 이유: 클래스 메서드는 기본적으로 클래스를 바인딩하지 않는다.
  #readBridgeSizeCallback = (input) => {
    try {
      this.#game.create(parseNumber(input));
      InputView.readMoving(GAME_QUESTION.moving, this.#readMovingCallback);
    } catch (err) {
      throw err;
    }
  };

  #readMovingCallback = (input) => {
    try {
      const { status, result } = this.#game.move(input);
      OutputView.printMap(status);
      if (result) {
        InputView.readMoving(GAME_QUESTION.moving, this.#readMovingCallback);
      } else {
        InputView.readGameCommand(GAME_QUESTION.retry, this.#readGameCommandCallback);
      }
    } catch (err) {
      throw err;
    }
  };

  #readGameCommandCallback = (input) => {
    try {
      if (this.#game.retry(input)) {
        InputView.readMoving(GAME_QUESTION.moving, this.#readMovingCallback);
      } else {
        console.log('게임종료');
      }
    } catch (err) {
      throw err;
    }
  };
}

module.exports = ViewManager;
