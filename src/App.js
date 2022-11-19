const MainController = require("./controller/MainController");

class App {
  play() {
    new MainController().init();
  }
}

module.exports = App;
