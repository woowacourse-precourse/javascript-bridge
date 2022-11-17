const InputView = require("./InputView");
const ArraySize = require("./modules/ArraySize");
class App {
  play() {
    const size = InputView.readBridgeSize();
    let tryGame = 0;

    const ARRAY = new ArraySize(size);
    let arrUp = ARRAY.getArrUp();
    let arrDown = ARRAY.getArrDown();
    console.log(arrUp.length, arrDown.length);
  }
}

module.exports = App;
