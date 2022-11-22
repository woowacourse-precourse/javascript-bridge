const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const BridgeGame = require("./BridgeGame.js");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");

class App {
  #bridgeGame;

  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    this.start();
  }

  start(){
    InputView.readBridgeSize((size)=>{
      this.#bridgeGame = new BridgeGame(size);
      this.selectMove();
    });
  }

  selectMove(){
    InputView.readMoving((playerMoving)=>{
      this.#bridgeGame.move(playerMoving);
      this.#bridgeGame.isSuccess();
      // Console.print(this.#bridgeGame.isSuccess());
      // Console.print(this.#bridgeGame.isSuccess());
      OutputView.printMap(this.#bridgeGame.getPlayerMovingRecord(), this.#bridgeGame.isSuccess());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
