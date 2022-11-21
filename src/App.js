const BridgeGame = require('./BridgeGame');
const { GAME_RESULT } = require('./common/Constant');
const InputView = require('./io/InputView');
const OutputView = require('./io/OutputView');

class App {
  play() {
    OutputView.printGameStart();
    this.askSize();
  }

  askSize() {
    InputView.readBridgeSize((input) => {
      this.game = new BridgeGame(+input);
      this.askMove();
    });
  }

  askMove() {
    InputView.readMoving((input) => {
      this.game.move(input);
      OutputView.printMap(this.game.movingState);
      if (this.game.checkGameOver())
        return this.game.judgeGameSuccess() ? this.end() : this.askRestart();
      this.askMove();
    });
  }

  askRestart() {
    InputView.readGameCommand((input) => {
      if (input === GAME_RESULT.retry) return this.game.retry(), this.askMove();
      this.end();
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
new App().play();
module.exports = App;
