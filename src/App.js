const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

class App {
  play() {
    Console.print(OutputView.PrintStart());
  }
}

new App().play();
module.exports = App;
