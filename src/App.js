const MissionUtils = require('@woowacourse/mission-utils')
const InputView=require('./InputView')
class App {
  play() {
    InputView.printGameStart()
    InputView.readBridgeSize() 
  }
}
const app=new App()
app.play()

module.exports = App;
