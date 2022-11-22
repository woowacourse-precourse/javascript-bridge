const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

class App {
  startGame(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    
    const bridge_len = [];
    const inputView = InputView;
    inputView.readBridgeSize(bridge_len);
    console.log(bridge_len);
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;
