const { Console } = require("@woowacourse/mission-utils");
const { InputView } = require("./InputView.js");
const GameUtils = require("./GameUtils.js");

class App {
  play() {
    GameUtils.init()
    Console.print('다리 건너기 게임을 시작합니다.\n')
    InputView.readBridgeSize()
  }
}

module.exports = App;




const a = new App;
a.play();