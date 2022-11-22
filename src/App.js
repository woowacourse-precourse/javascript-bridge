const InputHandling = require('./UserInput/InputHandling');

class App {
  play() {
    const inputHandling = new InputHandling();
    inputHandling.play();
  }
}

const app = new App();
app.play();

module.exports = App;
