const BridgeGame = require('./BridgeGame');
const { GAME_RESULT } = require('./common/Constant');
const InputView = require('./io/InputView');
const OutputView = require('./io/OutputView');
const {
  validateMove,
  validateRetry,
  validateBridgeLength,
} = require('./utils/Validator');

class App {
  play() {
    OutputView.printGameStart();
    this.askSize();
  }

  askSize() {
    InputView.readBridgeSize((input) => {
      try {
        validateBridgeLength(input);
        this.game = new BridgeGame(+input);
        this.askMove();
      } catch (e) {
        OutputView.printError(e);
        this.askSize();
      }
    });
  }

  askMove() {
    InputView.readMoving((input) => {
      try {
        validateMove(input);
        this.game.move(input);
        OutputView.printMap(this.game.movingState);
        if (this.game.checkGameOver())
          return this.game.judgeGameSuccess() ? this.end() : this.askRestart();
      } catch (e) {
        OutputView.printError(e);
      }
      this.askMove();
    });
  }

  askRestart() {
    InputView.readGameCommand((input) => {
      try {
        validateRetry(input);
        if (input === GAME_RESULT.retry)
          return this.game.retry(), this.askMove();
        this.end();
      } catch (e) {
        OutputView.printError(e);
        this.askRestart();
      }
    });
  }

  end() {
    OutputView.printResult(
      this.game.movingState,
      this.game.judgeGameSuccess(),
      this.game.tryCnt
    );
  }
}

module.exports = App;
