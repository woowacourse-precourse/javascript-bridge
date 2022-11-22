const Referee = require('./controllers/referee');

class App {
  constructor() {
    this.referee = new Referee();
  }

  play() {
    this.referee.init();
  }
}
module.exports = App;
