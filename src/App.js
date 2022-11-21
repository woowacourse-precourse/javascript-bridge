const InputView=require('./InputView')
const BridgeMaker=require('./BridgeMaker')
const BridgeRandomNumberGenerator=require('./BridgeRandomNumberGenerator')
const OutputView=require('./OutputView')
const BridgeGame=require('./BridgeGame')
const Input=require('./Input')

const inputClass=new Input()

class App {
  constructor(){
  }
  play() {
    // inputClass.inputStart()
    // inputClass.getBridge()
    InputView.printGameStart()
    InputView.readBridgeSize() 
  }
}
const app=new App()
app.play()

module.exports = App;
