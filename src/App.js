const InputView=require('./InputView')
const BridgeMaker=require('./BridgeMaker')
const BridgeRandomNumberGenerator=require('./BridgeRandomNumberGenerator')
const OutputView=require('./OutputView')
const BridgeGame=require('./BridgeGame')

class App {
  constructor(){
  }
  play() {
    InputView.printGameStart()
    InputView.readBridgeSize() 
  }
}
const app=new App()
app.play()

module.exports = App;
