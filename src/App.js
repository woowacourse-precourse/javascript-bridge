const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");


class App {
  constructor(){
    this.inputView = InputView;
    this.bridgeMaker = BridgeMaker;
    this.bridgeGame = new BridgeGame();
    this.bridge_len;
  }

  checkBridgeSize(size){
    if(isNaN(size)){
      throw new Error("[ERROR] 올바르지 않은 입력입니다.")
    }
    return true;
  }

  inputBridgeSize(bridge_len_arr){
    this.inputView.readBridgeSize(bridge_len_arr);
    try{
      if(this.checkBridgeSize(bridge_len_arr[0])){
        this.bridge_len = bridge_len_arr[0];
        this.inputMoving();
      }
    }catch(e){
      // console.log(e);
    }
  }
  
  inputMoving(){
    const moving_arr = [];
    this.inputView.readMoving(moving_arr);
    console.log(moving_arr);
  }

  startGame(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const bridge_len_arr = [];
    this.inputBridgeSize(bridge_len_arr);
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;