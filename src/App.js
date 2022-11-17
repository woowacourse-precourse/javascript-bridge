const InputView = require("./InputView.js")
const Validate = require("./Validate.js")
class App {
  play() {
    InputView.readBridgeSize(this.makeBridge.bind(this))
  }
  makeBridge(Length){
    Validate.BridgeLengthInput(Length)
  }
}
const app = new App();
app.play();
module.exports = App;
