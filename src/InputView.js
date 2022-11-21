const { Console } = require('@woowacourse/mission-utils')
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')

// 제공된 InputView 객체를 활용해 구현해야 한다.
// InputView의 파일 경로는 변경할 수 있다.
// InputView의 메서드의 인자는 변경할 수 있다.
// 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

// 사용자로부터 입력을 받는 역할을 한다.
const InputView = {
  // 다리의 길이를 입력받는다.
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (answer) => {
      const bridge = (BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator.generate))
      console.log('-----bridge', bridge)
      this.readMoving(bridge)
    })
  },

  // 사용자가 이동할 칸을 입력받는다.
  readMoving(bridge) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
      const bridgeGame = [...bridge]
      const cell = bridgeGame.shift()
      console.log(bridgeGame,'bridgeGame')
  
      if (bridgeGame.length === 0) {
        // 게임 결과 print하기
        Console.close()
        console.log('game over')
        return
      }
      if (answer === 'U' && cell === 'U') {
        this.readMoving(bridgeGame)
      }
      if (answer === 'U' && cell === 'D') {
        this.inputRetry(bridge)
      }
      if (answer === 'D' && cell === 'D') {
        this.readMoving(bridgeGame)
      }
      if (answer === 'D' && cell === 'U') {
        this.readGameCommand(bridge)
      }
      // 게임 결과 출력
    })
  },


  // 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  readGameCommand() {
    console.log('do you want ')
  },
};

module.exports = InputView;
