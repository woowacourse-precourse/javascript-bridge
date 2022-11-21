const { Console } = require('@woowacourse/mission-utils')
const BridgeGame = require('./BridgeGame')
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');

// 제공된 InputView 객체를 활용해 구현해야 한다.
// InputView의 파일 경로는 변경할 수 있다.
// InputView의 메서드의 인자는 변경할 수 있다.
// 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

// 사용자로부터 입력을 받는 역할을 한다.
const InputView = {
  bridge: [],
  // 다리의 길이를 입력받는다.
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (answer) => {
      const bridgeGame = new BridgeGame(answer)
      this.readMoving(bridgeGame)
    })
  },

  // 사용자가 이동할 칸을 입력받는다.
  readMoving(bridgeGame) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
      const isSuccess = bridgeGame.move(answer)

      switch (isSuccess) {
        case 'success':
          this.readMoving(bridgeGame)
          break
        case 'finish':
          OutputView.printResult()
          break
        case 'fail':
          this.readGameCommand(bridgeGame)
          break
        default: '[ERROR]' 
      }
    })
  },

  // 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  readGameCommand(bridgeGame) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      bridgeGame.retry(answer)
      if (answer === 'R') {
        this.readMoving(bridgeGame)
      }
    })
  },
};

module.exports = InputView
