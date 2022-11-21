const { Console } = require('@woowacourse/mission-utils')
// 제공된 OutputView 객체를 활용해 구현해야 한다.
// OutputView의 파일 경로는 변경할 수 있다.
// OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// 값 출력을 위해 필요한 메서드를 추가할 수 있다.

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  topMap: [],

  buttomMap: [],

  initMap() {
    this.topMap = []
    this.buttomMap = []
  },

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n')
  },

  selectMap(status, userInput) {
    switch(status) {
    case 'success':
      this.makeSuccessMap(userInput)
      break
    case 'fail':
      this.makeFailMap(userInput)
      break
    case 'finish':
      this.makeFinishMap(userInput)
    }
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  makeSuccessMap(userInput) {
    if (userInput === 'U') {
      this.topMap.push('O')
      this.buttomMap.push(' ')
    }
    if (userInput === 'D') {
      this.topMap.push(' ')
      this.buttomMap.push('O')
    }
    this.printMap()
  },

  makeFailMap(userInput) {
    if (userInput === 'U') {
      this.topMap.push('X')
      this.buttomMap.push(' ')
    }
    if (userInput === 'D') {
      this.topMap.push(' ')
      this.buttomMap.push('X')
    }
    this.printMap()
  },

  makeFinishMap(userInput) {
    Console.print('\n최종 게임 결과')
    this.makeSuccessMap(userInput)
    Console.print('게임 성공 여부: 성공')
  },

  makeOverMap() {
    Console.print('\n최종 게임 결과')
    this.printMap()
    Console.print('게임 성공 여부: 실패')
  },

  printMap() {
    Console.print(`[ ${this.topMap.join(' | ')} ]\n[ ${this.buttomMap.join(' | ')} ]\n`)
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(answer, count) {
    if (answer === 'Q') {
      this.makeOverMap()
    }
    
    Console.print(`총 시도한 횟수: ${count}`)
    Console.close()
  },
}

module.exports = OutputView
