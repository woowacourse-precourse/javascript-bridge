const { Console } = require("@woowacourse/mission-utils");
const InputView  = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");

class App {

  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n\n');  
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
