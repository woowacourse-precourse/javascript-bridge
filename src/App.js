const { Console } = require('@woowacourse/mission-utils')
const BridgeGame = require('./BridgeGame')
const InputView = require('./InputView')
const OutputView = require('./OutputView')

class App {
  play() {
    OutputView.printStart()
    return InputView
    .readBridgeSize()
    .then((size) => {
      const bridgeGame = new BridgeGame(size)
      return this.move(bridgeGame)
    })
    .catch(error => this.error(error))
  }

  move(bridgeGame) {
    return InputView
    .readMoving()
    .then((moveCell) => {
      const moveResult = bridgeGame.move(moveCell)
      const [cell, status] = moveResult
      OutputView.selectMap(cell, status, bridgeGame.getGameCount())
      return this.checkStatus(bridgeGame, status)
    })
    .catch(error => this.error(error))
  }
  
  checkStatus(bridgeGame, status) {
    if (status === 'success') {
      return this.move(bridgeGame)
    }
    if (status === 'fail') {
      return this.retry(bridgeGame)
    }
  }

  retry(bridgeGame) {
    return InputView
    .readGameCommand()
    .then((answer) => {
      const retry = bridgeGame.retry(answer)
      return this.checkRetry(bridgeGame, retry, answer)
    })
    .catch(error => this.error(error))
  }

  checkRetry(bridgeGame, retry, answer) {
    if (retry) {
      OutputView.initMap()
      return this.move(bridgeGame)
    }
    if (!retry) {
      return OutputView.printResult(answer, bridgeGame.getGameCount())
    }
  }

  error(error) {
    Console.print(error)
    Console.close()
  }
}

module.exports = App
