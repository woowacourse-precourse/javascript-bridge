const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG, INPUT_MSG } = require("./constants/Message");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;
  #retryCount;

  constructor() {
    this.#retryCount = 1;
  }

  play() {
    Console.print(GAME_MSG.START);
    InputView.readBridgeSize(this.createBridgeGame.bind(this));
  }

  createBridgeGame(size) {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setBridge(size);
    this.playBridgeGame();
  }

  playBridgeGame() {
    InputView.readMoving(this.checkBridge.bind(this));
  }

  retry(command) {
    if (command === "Q") this.gameEnd(false);
    if (command === "R") {
      this.#bridgeGame.retry(this.#retryCount);
      this.playBridgeGame();
    }
  }

  gameEnd(result) {
    OutputView.printResult(
      result,
      this.#retryCount,
      this.#bridgeGame.getBridge()
    );
    Console.close();
  }

  checkBridge(moving) {
    // 숫자가 아닌 문자로 결과값받기
    const [isSuccess, crossBridge] = this.#bridgeGame.move(moving);
    OutputView.printMap(crossBridge);
    if (isSuccess === 0) InputView.readGameCommand(this.retry.bind(this));
    if (isSuccess === 1) this.playBridgeGame();
    if (isSuccess === 2) this.gameEnd(true);
  }
}

module.exports = App;
const app = new App();
app.play();
