const OutputView = require('./OutputView')
const InputView = require('./InputView')
const BridgeMaker = require('./BridgeMaker')
const BridgeBuild = require('./BridgeBuild')
const BridgeGame = require('./BridgeGame')

class App {

  constructor() {
    this.TRY_TIME = 1
    this.BRIDGE_U = []
    this.BRIDGE_D = []
  }
  play() {
    OutputView.printStart()
    let BRIDGE_LENGTH = InputView.readBridgeSize()
    let BRIDGE = BridgeMaker.makeTestBridge(BRIDGE_LENGTH)
    this.movePrint(BRIDGE,BRIDGE_LENGTH)
  }

  movePrint(bridge,bridgeLength) {
    let BRIDGE = []
    const GAME = new BridgeGame()
    for (let i = 0 ; i < bridgeLength ; i++){
      OutputView.printMove()
      let USER_MOVE = InputView.readMoving()
      if (GAME.move(bridge,USER_MOVE,i) === 'X' ) return this.xCase(BRIDGE,USER_MOVE,GAME.move(bridge,USER_MOVE,i))
      BRIDGE = this.printBridge(GAME.move(bridge,USER_MOVE,i))
    }
    this.finishGame(BRIDGE,'성공')
  }

  printBridge(result) {
    BridgeBuild.makeBridge(result,this.BRIDGE_U,this.BRIDGE_D)
    return OutputView.printMap(this.BRIDGE_U,this.BRIDGE_D)
  }

  xCase(bridge,userMove,result){
    bridge = this.askRetry(result,userMove)
    OutputView.printRetry()
    let USER_CHOICE = InputView.readGameCommand()
    this.failCase(USER_CHOICE,bridge)
  }

  failCase(userChoice,bridge){
    switch(userChoice){
      case 'Q':
        return this.finishGame(bridge,'실패')
      case 'R':
        this.TRY_TIME += 1
        return this.movePrint()
    }
  }

  askRetry(result,userMove){
    const RESULT_USERMOVE = [result,userMove]
    BridgeBuild.xBridge(RESULT_USERMOVE,this.BRIDGE_U,this.BRIDGE_D)
    return OutputView.printMap(this.BRIDGE_U,this.BRIDGE_D)
  }

  finishGame(bridge,result) {
    if (bridge.length === 0) return'[ERROR]'
    if (bridge === '[ERROR]') return '[ERROR]'
    OutputView.printResult(result,bridge,this.TRY_TIME)
  }
}

module.exports = App;
