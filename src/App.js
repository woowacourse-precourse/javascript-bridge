const GameFlow = require('./Controller/GameFlow');

class App {
  constructor() {
    this.Gameflow = new GameFlow();
  }

  play() {
    this.Gameflow.start();
  }
}

const app = new App();
app.play();

module.exports = App;
