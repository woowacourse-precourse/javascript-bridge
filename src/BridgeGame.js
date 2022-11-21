const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeMaker = require('./BridgeMaker')
// 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
// BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
// BridgeGame의 파일 경로는 변경할 수 있다.
// BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
// InputView, OutputView를 사용하지 않는다.

// 다리 건너기 게임을 관리하는 클래스
class BridgeGame {
  #bridge
  #thisBridge

  constructor (size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    this.#thisBridge = [...this.#bridge]
  }
  // 사용자가 칸을 이동할 때 사용하는 메서드
  // 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.

  move(userInput) {
    const cell = this.#thisBridge.shift()
    console.log('this bridge', this.#thisBridge)

    if (!this.#thisBridge.length) {
      return 'finish'
    }
    if (cell === userInput) {
      return 'success'
    }
    if (cell !== userInput) {
      return 'fail'
    }
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  // 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
  retry(userInput) {
    if (userInput === 'R') {
      this.#thisBridge = [...this.#bridge]
      console.log('reset!')
    } 
    if (userInput === 'Q') {
      Console.close()
      console.log('게임실패')
    }
  }
}

module.exports = BridgeGame;
