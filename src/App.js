const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const Console = MissionUtils.Console;


class App {

  constructor() {
  }
  
  play() {
    this.greeting();
    InputView.readBridgeSize();
  }

  greeting(){
    Console.print("다리 건너기 게임을 시작합니다.");
  }
}

// const app = new App();
// app.play();

module.exports = App;
