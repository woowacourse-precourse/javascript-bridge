const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    this.#getBridgeSize();
  }
  #getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(bridgeSize);

      this.#getPlayerMove();
    });
  }
  #getPlayerMove() {
    InputView.readMoving((move) => {
      this.#bridgeGame.move(move);
      this.#printMap();
    });
  }
  #printMap() {
    OutputView.printMap([
      this.#bridgeGame.getMapUp(),
      this.#bridgeGame.getMapDown(),
    ]);
    this.#checkIsFinished();
  }
  #checkIsFinished() {
    if (this.#bridgeGame.isFinish()) {
      this.#endPrint();
    } else this.#checkIsWrong();
  }
  #checkIsWrong() {
    if (this.#bridgeGame.isWrong()) {
      this.#checkRetry();
    } else this.#getPlayerMove();
  }
  #checkRetry() {
    InputView.readGameCommand((gameCommand) => {
      if (gameCommand === 'R') {
        this.#bridgeGame.retry();
        this.#getPlayerMove();
      }
      if (gameCommand === 'Q') this.#endPrint();
    });
  }
  #endPrint() {
    OutputView.printResult(
      [this.#bridgeGame.getMapUp(), this.#bridgeGame.getMapDown()],
      this.#bridgeGame.isFinish(),
      this.#bridgeGame.getTryCnt()
    );
    MissionUtils.Console.close();
  }
}

module.exports = App;

const app = new App();
app.play();
