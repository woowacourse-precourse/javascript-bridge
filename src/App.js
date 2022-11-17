const OutputView = require("./OutputView.js")
class App {
  play() {
    OutputView.startgame()
  }
}
const app = new App();
app.play();
module.exports = App;
