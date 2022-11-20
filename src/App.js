const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker  = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class App {
  BridgeArray
  tryGame;
  flag;
  constructor(){
    this.BridgeArray = [];
    this.tryGame=0;
    this.flag=false;
  }
  
  async play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    
    let tempBridgeArray = await InputView.readBridgeSize();
    this.BridgeArray = tempBridgeArray;

    console.log(tempBridgeArray);
    while(true){
      let answer = await this.run();
      if(answer == true) this.flag = true;
      tryGame += 1;
      const ready = await InputView.readGameCommand(BridgesGameStart);
      // 다시 할래?
      if(!ready){
        break;
      }
    }

  }

  async run(){
    
    let BridgesGameStart = new BridgeGame(this.BridgeArray);
    let arr1 = new Array(this.BridgeArray.length);
    let arr2 = new Array(this.BridgeArray.length);
    let turns = 0;
    while(turns != this.BridgeArray.length){
      const result = await InputView.readMoving(BridgesGameStart,turns);

      if(result == false){
        return false;
      }
      else{
        turns += 1;
      }
    }
    return true;
  }

}

module.exports = App;
