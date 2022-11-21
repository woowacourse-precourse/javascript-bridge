const BridgeGame = require('./BridgeGame');
const { GAME_RESULT } = require('./common/Constant');
const InputView = require('./io/InputView');
const OutputView = require('./io/OutputView');

class App {
  #game;
  /**
   * 다리 건너기 게임을 실행한다.
   */
  play() {
    OutputView.printGameStart();
    this.askSize();
  }

  /**
   * 생성할 다리 길이를 입력 받는다.
   */
  askSize() {
    InputView.readBridgeSize((input) => {
      this.#game = new BridgeGame(+input);
      this.askMove();
    });
  }

  /**
   * 이동 정보를 입력 받는다.
   */
  askMove() {
    InputView.readMoving((input) => {
      this.#game.move(input);
      OutputView.printMap(this.#game.getMovingState());
      if (this.#game.checkGameOver())
        return this.#game.judgeGameSuccess() ? this.end() : this.askRestart();
      this.askMove();
    });
  }

  /**
   * 재시작 여부를 입력 받는다.
   */
  askRestart() {
    InputView.readGameCommand((input) => {
      if (input === GAME_RESULT.retry)
        return this.#game.retry(), this.askMove();
      this.end();
    });
  }

  /**
   * 게임을 종료한다.
   */
  end() {
    OutputView.printResult(
      this.#game.getMovingState(),
      this.#game.judgeGameSuccess(),
      this.#game.getTryCnt()
    );
  }
}

module.exports = App;
