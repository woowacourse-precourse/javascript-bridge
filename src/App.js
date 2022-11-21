const Presenter = require("./presenter/Presenter");

class App {
  play() {
    const GamePresenter = new Presenter();
    GamePresenter.init();
  }
}

const app = new App();
app.play();

module.exports = App;
