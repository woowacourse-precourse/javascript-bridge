const outputView = require("./OutputView");
class App {
  play() {
    outputView.printGameStart();
    outputView.printPleaseInputBridgeSize();
  }
}
const app = new App();
app.play();
module.exports = App;
