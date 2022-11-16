const { Console } = require("@woowacourse/mission-utils")
const InputView = require("./InputView")

class App {
  constructor() {}

  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n")
    InputView.readBridgeSize()
  }
}

new App().play()

module.exports = App
