const BridgeGame = require('./BridgeGame');
const ViewManager = require('./ViewManager');

class App {
  play() {
    new ViewManager(new BridgeGame()).start();
  }
}

const app = new App();
app.play();

module.exports = App;
