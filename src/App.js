const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this);
  }
  init(bridgeSize){
    console.log(bridgeSize);//test
  }
  play() {
    this.start();
  }
}

module.exports = App;

//test app
const app = new App();
app.play();