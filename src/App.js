const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");


class App {
  constructor(){
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeMaker = BridgeMaker;
    this.bridgeRandomNumberGenerator = BridgeRandomNumberGenerator;
    this.bridgeGame = new BridgeGame();
    this.bridge_len;
    this.bridge_arr;
    this.moving_arr;
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
        this.makeBridge();
        this.inputMoving();
        this.outputView.printMap(this.bridge_arr, this.moving_arr);
      }
    }catch(e){
      // console.log(e);
    }
  }

  makeBridge(){
    this.bridge_arr = this.bridgeMaker.makeBridge(this.bridge_len, this.bridgeRandomNumberGenerator.generate);
    console.log("bridge", this.bridge_arr);
  }
  
  inputMoving(){
    this.moving_arr = [];
    for(let i=0; i<this.bridge_len; i++){
      this.inputView.readMoving(this.moving_arr);
    }
    console.log("moving", this.moving_arr);
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