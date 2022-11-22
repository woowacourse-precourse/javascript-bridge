const Controller = require("./Controller");

class App {
  play() {
    new Controller().start();
  }
}

const app = new App();
app.play();

module.exports = App;
