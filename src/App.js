const BridgeGame = require('./BridgeGame')
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const InputView = require('./InputView')
const OutputView = require('./OutputView')
const { status } = require('./lib/constants')

class App {
  #trial
  #status
  #bridgeGame

  constructor() {
    this.#trial = 1
    this.#status = status.START
    this.#bridgeGame = null

    OutputView.gameStart()
  }

  play() {
    this.#setStatus(status.READ_SIZE)
  }

  /**
   * @param {number | undefined} nextStatus
   */
  #setStatus = (nextStatus) => {
    // callback this binding
    if (nextStatus) {
      this.#status = nextStatus
    }

    this.#proceedGame()
  }

  // TOOD: refactor. 객체로 변형
  #proceedGame() {
    if (this.#status === status.READ_SIZE) {
      InputView.readBridgeSize({
        getNextGameStatus: this.#setBridgeGame,
        setNextGameStatus: this.#setStatus,
      })
    } else if (this.#status === status.READ_MOVE) {
      // TODO - InputView.readMoving
    } else if (this.#status === status.READ_COMMAND) {
      // TODO - InputView.readGameCommand
    } else if (this.#status === status.FINISHED) {
      // TODO - OutputView.printMap + printResult
    }
  }

  /**
   * @param {number} size
   * @returns {number}
   */
  #setBridgeGame = (size) => {
    // callback this binding
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    )
    this.#bridgeGame = new BridgeGame(bridge)

    return this.#bridgeGame.getStatus()
  }
}

module.exports = App
