const OutputView = require("./views/OutputView.js")

class App {
  constructor(){
    OutputView.printGameStart()
  }
  play() {
  }
}

const app = new App();
app.play();
module.exports = App;
