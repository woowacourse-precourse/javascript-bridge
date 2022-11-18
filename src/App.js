const InputView = require("./InputView.js")
const Validate = require("./Validate.js")
const BridgeGame = require("./BridgeGame.js")
class App {
  constructor(){
    this.game = new BridgeGame()
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
    console.log(input)
  }
}
const app = new App();
app.play();
module.exports = App;
