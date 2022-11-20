const InputView = require("./InputView.js")
const Validate = require("./Validate.js")
const BridgeGame = require("./BridgeGame.js")
const OutputView = require("./OutputView.js")
const Notice = require("./NoticeMessage.js")
const MissionUtils = require("@woowacourse/mission-utils")
class App {
  constructor(){
    this.game = new BridgeGame()
    this.try = 1
    this.resultmap = new Map()
  }
  play() {
    MissionUtils.Console.print(Notice.START_GAME)
    InputView.readBridgeSize(this.makeBridge.bind(this))
  }
  makeBridge(Length){
    this.game.makeBridge(Length)
    InputView.readMoving(this.inputCommand.bind(this))
  }
  inputCommand(input){
   if( this.game.checkBridgeCorrect(input)){
      this.moveCommand()
   }
   else if( !this.game.checkBridgeCorrect(input)){
    this.game.retry()
    InputView.readGameCommand(this.retryCommand.bind(this))
   }
  }
  moveCommand(){
    this.game.move()
    if (this.game.checkBridgeAll(this.try) === true){
      InputView.readMoving(this.inputCommand.bind(this))
    }
  }
  retryCommand(input){
    Validate.RetryInput(input)
    if (input == "R"){
      this.setGameReset()
      InputView.readMoving(this.inputCommand.bind(this))     
    }
    else if(input == "Q"){
      const result = Notice.FAIL
      this.resultmap.set("result",result)
      this.resultmap.set("try",this.try)
      OutputView.printResult(this.game.upside,this.game.downside,this.resultmap)
    }
  }
  setGameReset(){
    this.try += 1
    this.game.upside = []
    this.game.downside = []
    this.game.number = 0
  }
}
const app = new App();
app.play();
module.exports = App;
