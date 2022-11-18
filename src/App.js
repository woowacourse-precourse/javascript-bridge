const InputView=require('./InputView')
const BridgeMaker=require('./BridgeMaker')
const BridgeRandomNumberGenerator=require('./BridgeRandomNumberGenerator')
const OutputView=require('./OutputView')
const BridgeGame=require('./BridgeGame')

class App {
  constructor(){
    let game=new BridgeGame()
  }
  play() {
    InputView.printGameStart()
    InputView.readBridgeSize()
    // InputView.readMoving()
  }
}
const app=new App()
app.play()

module.exports = App;
