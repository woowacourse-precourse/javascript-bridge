const InputView = require("./InputView");

class App {
  play() {
    InputView.readBridgeSize()
  }
}

module.exports = App;




const a = new App;
a.play();