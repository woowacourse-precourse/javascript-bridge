const BridgeProcess = require('./controller/BridgeProcess');

// 앱은 controlel
class App {
  play() {
    new BridgeProcess().start();
  }
}

new App().play();
module.exports = App;
