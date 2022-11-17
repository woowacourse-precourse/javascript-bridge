const View = require("./view/View");

class App {
  play() {
    const view = new View();
    view.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
