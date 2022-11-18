const outputView = require("./OutputView");
class App {
  play() {
    outputView.printGameStart();
  }
}
const app = new App();
app.play();
module.exports = App;
