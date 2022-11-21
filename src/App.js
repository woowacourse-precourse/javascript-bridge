const { Console } = require('@woowacourse/mission-utils');
const Message = require('./constant/PrintMessage');
const GameControl = require('./controller/GameControl');

class App {
  constructor() {
    this.gameController = new GameControl();
  }

  play() {
    Console.print(Message.START);
    this.gameController.start();
  }
}

module.exports = App;
