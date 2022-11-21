const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require('./BridgeGame')
const OutputView = require('./OutputView')
const InputView = require('./InputView')

class App {
  play() {
    OutputView.printStart()
    this.bridge = InputView.readBridgeSize()
  }

  inputRetry (bridge) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      if (answer === 'R') {
        this.inputMove(bridge)
      }
  
      if (answer === 'Q') {
        // 게임 결과 print하기
        // 실패일 경우, 성공일 경우 종료 조건 다르게
        Console.close()
        console.log('게임실패')
      }
    })
  }
}

const app = new App
app.play()

module.exports = App;
