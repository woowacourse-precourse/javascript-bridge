const { printGameStart } = require('./View/OutputView');

class App {
  constructor() {
    printGameStart();
  }

  play() {}
}

new App().play();
module.exports = App;
