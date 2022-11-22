const { Console } = require('@woowacourse/mission-utils')
const { STRING, OUTPUT } = require('./common/Contents')
const OutputView = {
  topMap: [],

  buttomMap: [],

  initMap() {
    this.topMap = []
    this.buttomMap = []
  },

  printStart() {
    Console.print(OUTPUT.START)
  },

  selectMap(userInput, status, count) {

    switch(status) {
    case 'success':
      this.makeSuccessMap(userInput)
      break
    case 'fail':
      this.makeFailMap(userInput)
      break
    case 'finish':
      this.printResult(status, count, userInput)
    }
  },

  makeSuccessMap(userInput) {
    if (userInput === STRING.TOP_BRIDGE) {
      this.topMap.push(STRING.SUCCESS)
      this.buttomMap.push(STRING.BLANK)
    }
    if (userInput === STRING.BOTTOM_BRIDGE) {
      this.topMap.push(STRING.BLANK)
      this.buttomMap.push(STRING.SUCCESS)
    }
    this.printMap()
  },

  makeFailMap(userInput) {
    if (userInput === STRING.TOP_BRIDGE) {
      this.topMap.push(STRING.FAIL)
      this.buttomMap.push(STRING.BLANK)
    }
    if (userInput === STRING.BOTTOM_BRIDGE) {
      this.topMap.push(STRING.BLANK)
      this.buttomMap.push(STRING.FAIL)
    }
    this.printMap()
  },

  makeFinishMap(userInput) {
    this.makeSuccessMap(userInput)
    Console.print(OUTPUT.GAME_RESULT)
    this.printMap()
    Console.print(OUTPUT.SUCCESS)
  },

  makeStopMap() {
    Console.print(OUTPUT.GAME_RESULT)
    this.printMap()
    Console.print(OUTPUT.FAIL)
  },

  printMap() {
    Console.print(`[ ${this.topMap.join(' | ')} ]`)
    Console.print(`[ ${this.buttomMap.join(' | ')} ]`)
  },

  printResult(status, count, userInput) {
    if (status === 'finish') {
      this.makeFinishMap(userInput)
    }
    if (status === STRING.QUIT) {
      this.makeStopMap()
    }
    
    Console.print(`${OUTPUT.FULL_COUNT} ${count}`)
    Console.close()
  },
}

module.exports = OutputView
