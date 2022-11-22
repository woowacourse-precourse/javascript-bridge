const Presenter = require("./presenter/Presenter");

class App {
  play() {
    const gamePresenter = new Presenter();
    gamePresenter.init();
  }
}

const app = new App();
app.play();

module.exports = App;
