const WoowaBrigde = require("./WoowaBridge");

class App {
  play() {
    const woowaBrigde = new WoowaBrigde();
    woowaBrigde.play();
  }
}

const app = new App();
app.play();

module.exports = App;
