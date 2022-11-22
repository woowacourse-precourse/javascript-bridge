const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;

  play() {
      console.log('다리 건너기 게임을 시작합니다.');

      this.startBridgeGame();
  }

  startBridgeGame() {
    InputView.readBridgeSize((size) => {
      this.#bridgeGame = new BridgeGame(size);

      this.playBridgeGame();
    });
  }

  playBridgeGame() {
    InputView.readMoving((moving) => {
      this.#bridgeGame.move(moving);
      
      this.playBridgeGameCallback();
    })
  }

  playBridgeGameCallback() {
    switch (this.#bridgeGame.checkResult()) {
      case -1:
        OutputView.printMap(this.#bridgeGame.getBridge(), this.#bridgeGame.getPath());
        this.playBridgeGame();
        break;
      case 0:
        InputView.readGameCommand((command) => readGameCommandCallback(command));
        break;
      case 1:
        OutputView.printResult(
          this.#bridgeGame.getBridge(), 
          this.#bridgeGame.getPath(),
          1,
          this.#bridgeGame.getTryNum());
        break;
    }
  }
  
  readGameCommandCallback(command) {
    if (command === InputView.INPUT_QUIT) {
      OutputView.printResult(
        this.#bridgeGame.getBridge(), 
        this.#bridgeGame.getPath(),
        0,
        this.#bridgeGame.getTryNum());
      return;
    }
    if (command === InputView.INPUT_RESTART) {
      this.#bridgeGame.retry();
      this.playBridgeGame();
    }
  }
}
      
module.exports = App;
