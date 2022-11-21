const BridgeGame = require('./BridgeGame')
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const InputView = require('./InputView')
const OutputView = require('./OutputView')
const { status, option } = require('./lib/constants')

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

    this.#printMap()
    this.#proceedGame()
  }

  #proceedGame() {
    if (this.#status === status.READ_SIZE) {
      InputView.readBridgeSize({
        getNextGameStatus: this.#setBridgeGame,
        setNextGameStatus: this.#setStatus,
      })
    } else if (this.#status === status.READ_MOVE) {
      InputView.readMoving({
        getNextGameStatus: this.#addBridgeGameMove,
        setNextGameStatus: this.#setStatus,
      })
    } else if (this.#status === status.READ_COMMAND) {
      InputView.readGameCommand({
        getNextGameStatus: this.#retryOrQuit,
        setNextGameStatus: this.#setStatus,
      })
    } else if (this.#status === status.FINISHED) {
      const success = OutputView.printMap(
        this.#bridgeGame.bridge,
        this.#bridgeGame.moves,
        true
      )
      OutputView.printResult(success, this.#trial)
      OutputView.close()
    }
  }

  #printMap() {
    const needDraw = this.#bridgeGame && this.#bridgeGame.moves.length > 0

    if (needDraw) {
      OutputView.printMap(this.#bridgeGame.bridge, this.#bridgeGame.moves)
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

  /**
   * @param {string} move
   * @returns {number}
   */
  #addBridgeGameMove = (move) => {
    // callback this binding
    this.#bridgeGame.move(move)

    return this.#bridgeGame.getStatus()
  }

  /**
   * @param {string} command
   * @returns {number}
   */
  #retryOrQuit = (command) => {
    // callback this binding
    if (command === option.R) {
      this.#trial++
      this.#bridgeGame.retry()

      return status.READ_MOVE
    }

    return status.FINISHED
  }
}

module.exports = App
