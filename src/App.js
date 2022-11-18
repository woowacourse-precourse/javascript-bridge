const InputView = require("./InputView.js")
const Validate = require("./Validate.js")
const BridgeGame = require("./BridgeGame.js")
const OutputView = require("./OutputView.js")
class App {
  constructor(){
    this.game = new BridgeGame()
    this.try = 1
  }
  play() {
    InputView.readBridgeSize(this.makeBridge.bind(this))
  }
  makeBridge(Length){
    Validate.BridgeLengthInput(Length)
    this.game.makeBridge(Length)
    InputView.readMoving(this.moveCommand.bind(this))
  }
  moveCommand(input){
    Validate.MoveInput(input)
   if( this.game.checkBridgeCorrect(input)){
     this.game.move()
     InputView.readMoving(this.moveCommand.bind(this))
   }
   else if( !this.game.checkBridgeCorrect(input)){
    this.game.retry()
    InputView.readGameCommand(this.retryCommand.bind(this))
   }
  }
  retryCommand(input){
    Validate.RetryInput(input)
    if (input == "R"){
      this.setGameReset()
      InputView.readMoving(this.moveCommand.bind(this))     
    }
    else if(input == "Q"){
      OutputView.printResult(this.game.upside,this.game.downside,this.try)
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
