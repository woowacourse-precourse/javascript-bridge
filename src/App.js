const { Console } = require("@woowacourse/mission-utils");
const { GameInit } = require("./GameUtils.js");
const { InputView } = require("./InputView.js");

class App {
  play() {
    GameInit.init()
    Console.print('다리 건너기 게임을 시작합니다.\n')
    InputView.readBridgeSize()
  }
}

module.exports = App;