const InputView = require('./InputView');

class App {
  play() {
    this.letter = InputView.readBridgeSize();
  }

  desideMove() {}

  movement() {
    console.log('돌아왔다!');
    console.log(letter);
    console.log(answerArr);
  }
}
const app = new App();
app.play();
module.exports = App;
