const OutputView = require("./OutputView.js");
const InputView = require("./InputView");

class App {
    play() {
        OutputView.printStart();
        InputView.readBridgeSize();
    }
}

module.exports = App;

const app = new App();
app.play();
