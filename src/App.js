const View = require("./view/View");

class App {
  play() {
    const view = new View();
    view.startGame();
  }
}


module.exports = App;
