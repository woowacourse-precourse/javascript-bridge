const InputView = require("./InputView");
const { printStart } = require("./OutputView.js");

class App {
    play() {
        printStart();
        InputView.readBridgeSize();
    }
}

module.exports = App;

const app = new App();
app.play();
