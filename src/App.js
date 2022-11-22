const {Console} = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {

  play() {
    Console.print('다리 건너기 게임을 시작합니다.');

    InputView.readBridgeSize((size) => {
      this.game = new BridgeGame(+size);
      this.moveOnce();
    })
  }

  moveOnce() {
    InputView.readMoving((side) => {
      this.game.move(side);
      OutputView.printMap(this.game);

      if(this.game.isGameOver){
        this.askRetryOrNot();
        return;
      } 
      if(this.game.isLastStep) OutputView.printResult(this.game);
      else this.moveOnce();
    });
  }

  askRetryOrNot(){
    InputView.readGameCommand((key) => {
      if(this.game.retry(key)){
        this.moveOnce();
      }
      else{
        OutputView.printResult(this.game);
      }
    });
  }


}

module.exports = App;
