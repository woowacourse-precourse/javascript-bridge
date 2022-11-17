const { printStart } = require('./OutputView');
const { readBridgeSize } = require('./InputView');

class App {
  play() {
    printStart();
    readBridgeSize().then((size) => {
      console.log(size);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
