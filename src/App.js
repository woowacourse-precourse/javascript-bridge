const { Console } = require('@woowacourse/mission-utils');
const { START_GAME } = require('./Constants');

class App {
  play() {
    Console.print(START_GAME);
  }
}

const app = new App();
app.play();
module.exports = App;
