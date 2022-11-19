const { readBridgeSize } = require("./views/InputView");
const { generate } = require("./utils/BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
class App {
  constructor() {}

  play() {
    readBridgeSize();
  }
}

let app = new App();
app.play();
// module.exports = App;
