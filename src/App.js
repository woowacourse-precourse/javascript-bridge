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
      if(!InputView.bridgeSizeValidate(size)){
        this.start();
        return;
      }

      this.makeGame(size);
    });
  }

  makeGame(size){
    this.#bridgeGame = new BridgeGame(size);
    Console.print(this.#bridgeGame.getBridgeShape());
    this.selectMove();
  }

  selectMove(){
    InputView.readMoving((playerMoving)=>{
      if(!InputView.movingValidate(playerMoving)){
        this.selectMove();
        return;
      }

      this.move(playerMoving);
    });
  }

  move(playerMoving){
    this.#bridgeGame.move(playerMoving);
    OutputView.printMap(this.#bridgeGame.getPlayerMovingRecord(), this.#bridgeGame.isSuccess());

    this.moveResult();
  }

  moveResult(){
    if (this.#bridgeGame.isSuccess() && !this.#bridgeGame.isFinish())
      this.selectMove();
    else if(!this.#bridgeGame.isFinish() || !this.#bridgeGame.isSuccess())
      this.selectRetry();
    else 
      this.finish();
  }

  selectRetry(){
    InputView.readGameCommand((command)=>{
      if(!InputView.commandValidate(command)){
        this.selectRetry();
        return;
      }

      this.retryResult(command);
    });
  }

  retryResult(command){
    if(command === 'R'){
      this.#bridgeGame.retry();
      this.selectMove();
    }
    else if(command === 'Q')
     this.finish(command);
  }

  finish(){
    OutputView.printResult(this.#bridgeGame.getPlayerMovingRecord(),
        this.#bridgeGame.isFinish() && this.#bridgeGame.isSuccess(), this.#bridgeGame.getAttemptNumber());
    
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
