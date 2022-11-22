const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

class App {
  checkBridgeLen(bridge_len){
    if(isNaN(bridge_len[0])){
      throw new Error("[ERROR] 올바르지 않은 입력입니다.")
    }
    return true;
  }

  startGame(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    
    const bridge_len = [];
    const inputView = InputView;
    inputView.readBridgeSize(bridge_len);
    console.log(bridge_len);
    try{
      if(this.checkBridgeLen(bridge_len)){

      }
      
    }catch(e){
      console.log(e);
    }

  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;
