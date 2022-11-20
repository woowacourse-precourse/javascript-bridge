const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const { parseNumber } = require('../lib/utils');

class ViewManager {
  #game;

  constructor(game) {
    this.#game = game;
  }

  start() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#readBridgeSizeCallback);
  }

  // 화살표 함수로 작성한 이유: 클래스 메서드는 기본적으로 클래스를 바인딩하지 않는다.
  #readBridgeSizeCallback = (input) => {
    this.#game.create(parseNumber(input));
    InputView.readMoving(this.#readMovingCallback);
  };

  #readMovingCallback = (input) => {
    const { status, isMatch, finish, attempts } = this.#game.move(input);

    OutputView.printMap(status);
    if (finish) return OutputView.printResult({ status, attempts, clear: true });
    if (!isMatch) return InputView.readGameCommand(this.#readGameCommandCallback);
    InputView.readMoving(this.#readMovingCallback);
  };

  #readGameCommandCallback = (input) => {
    const { isRetry, status, attempts } = this.#game.retry(input);

    if (!isRetry) return OutputView.printResult({ status, attempts, clear: false });
    InputView.readMoving(this.#readMovingCallback);
  };
}

module.exports = ViewManager;
