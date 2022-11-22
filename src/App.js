const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

class App {
  checkBridgeSize(size){
    if(isNaN(size)){
      throw new Error("[ERROR] 올바르지 않은 입력입니다.")
    }
    return true;
  }

  inputBridgeSize(bridge_len){
    const inputView = InputView;
    inputView.readBridgeSize(bridge_len);
    try{
      if(this.checkBridgeSize(bridge_len[0])){
        console.log(bridge_len[0]);
      }
    }catch(e){
      console.log(e);
    }
  }

  startGame(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const bridge_len = [];
    this.inputBridgeSize(bridge_len);
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;