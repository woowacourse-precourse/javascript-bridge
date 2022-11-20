const Gameflow = require('./Gameflow');

class App {
  constructor() {
    this.Gameflow = new Gameflow();
  }

  play() {
    this.Gameflow.start();
  }
}

const app = new App();
app.play();

module.exports = App;
