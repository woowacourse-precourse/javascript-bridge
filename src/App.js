const BridgeGame = require('./domains/BridgeGame');
const ViewManager = require('./views/ViewManager');

class App {
  play() {
    new ViewManager(new BridgeGame()).start();
  }
}

const app = new App();
app.play();

module.exports = App;
