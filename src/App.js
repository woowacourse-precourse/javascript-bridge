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
    const handleSizeInput = (input) => {
      this.#game = new BridgeGame(Number(input));
      this.askMove();
    };
    InputView.readBridgeSize(handleSizeInput);
  }

  /**
   * 이동 정보를 입력 받는다.
   */
  askMove() {
    const handleMovingInput = (input) => {
      this.#game.move(input);
      OutputView.printMap(this.#game.getMovingState());
      if (!this.#game.checkGameOver()) return this.askMove();
      if (this.#game.judgeGameSuccess()) return this.end();
      this.askRestart();
    };
    InputView.readMoving(handleMovingInput);
  }

  /**
   * 재시작 여부를 입력 받는다.
   */
  askRestart() {
    const handleCommandInput = (input) => {
      if (input === GAME_RESULT.quit) return this.end();
      this.#game.retry();
      this.askMove();
    };
    InputView.readGameCommand(handleCommandInput);
  }

  /**
   * 게임을 종료한다.
   */
  end() {
    OutputView.printGameEnd();
    OutputView.printMap(this.#game.getMovingState());
    OutputView.printResult(
      this.#game.judgeGameSuccess(),
      this.#game.getTryCnt()
    );
  }
}

module.exports = App;
