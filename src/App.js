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
      Console.print(this.#bridgeGame.getBridgeShape());
      this.selectMove();
    });
  }

  selectMove(){
    InputView.readMoving((playerMoving)=>{
        this.#bridgeGame.move(playerMoving);
        OutputView.printMap(this.#bridgeGame.getPlayerMovingRecord(), this.#bridgeGame.isSuccess());
        if (this.#bridgeGame.isSuccess() && !(this.#bridgeGame.isFinish()))
          this.selectMove();

        this.selectRetry();
    });
  }

  selectRetry(){
    InputView.readGameCommand((retry)=>{
      if(retry === 'R'){
        this.#bridgeGame.retry();
        this.selectMove();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
