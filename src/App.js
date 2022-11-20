const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker  = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class App {
  #BridgeArray
  constructor(){
    this.#BridgeArray = [];
  }
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    
    let tempBridgeArray = InputView.readBridgeSize();
    console.log(tempBridgeArray);

    this.#BridgeArray.push(tempBridgeArray);
    console.log(this.#BridgeArray);
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)',
     input => {
      let checkOrNot = InputView.readMoving(input);
      
    })
  }
}

module.exports = App;
