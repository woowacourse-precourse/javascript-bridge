const Process = require('./Process');

class App {
  play() {
    const process = new Process();
    process.start();
  }
}

module.exports = App;
