const { InputView } = require("./InputView.js");

class App {
  play() {
    InputView.readBridgeSize()
    // InputView.readMoving();
  }
}

module.exports = App;




const a = new App;
a.play();