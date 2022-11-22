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
      this.moveResult();
    });
  }

  moveResult(){
    OutputView.printMap(this.#bridgeGame.getPlayerMovingRecord(), this.#bridgeGame.isSuccess());
    
    if (this.#bridgeGame.isSuccess() && !(this.#bridgeGame.isFinish()))
      this.selectMove();
    else if(!this.#bridgeGame.isFinish())
      this.selectRetry();
    else 
      this.finish();
  }

  selectRetry(){
    InputView.readGameCommand((command)=>{
      this.retryResult(command);
    });
  }

  retryResult(command){
    this.#bridgeGame.commandValidate(command);

    if(command === 'R'){
      this.#bridgeGame.retry();
      this.selectMove();
    }
    else if(command === 'Q')
     this.finish(command);
  }

  finish(){
    OutputView.printResult(this.#bridgeGame.getPlayerMovingRecord(),
        this.#bridgeGame.isFinish(), this.#bridgeGame.getAttemptNumber());
    
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
