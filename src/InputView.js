const { Console } = require('@woowacourse/mission-utils')
const { STRING, INPUT, ERROR } = require('./common/Contents')

const InputView = {
  bridge: [],

  readBridgeSize() {
    return new Promise((resolve) => {
      Console.readLine(INPUT.BRIDGE_SIZE, (answer) => resolve(answer))
    })
  },

  readMoving() {
    return new Promise((resolve) => {
      Console.readLine(INPUT.MOVE_CELL, (answer) => resolve(answer)
    )})
  },

  readGameCommand() {
    return new Promise((resolve) => 
      Console.readLine(INPUT.RETRY, (answer) => resolve(answer)
    ))
  },

  exceptionHandler(answer) {
    if (answer !== STRING.RESTART && answer !== STRING.QUIT) {
      throw new Error(ERROR.ONLY_R_AND_Q)
    }
  }
}

module.exports = InputView
