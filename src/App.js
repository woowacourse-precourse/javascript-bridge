const BridgeGame = require('./BridgeGame')
const InputView = require('./InputView')
const OutputView = require('./OutputView')

class App {
  async play() {
    const size = await InputView.readBridgeSize()

    const bridgeGame = new BridgeGame(size)

    while(!bridgeGame.isEnd()){
      const direction = await InputView.readMoving()

      const moveResult = bridgeGame.move(direction)

      const map = bridgeGame.getMap()
      
      OutputView.printMap(map)

      if(!moveResult){
        const retryInput = await InputView.readGameCommand()
        if(retryInput === 'R'){
          bridgeGame.retry()
        }else{
          break;
        }
      }

      if(bridgeGame.isEnd())break
    }

    OutputView.printResult(bridgeGame.getResult(), bridgeGame.getMap())
  }
}

module.exports = App;
