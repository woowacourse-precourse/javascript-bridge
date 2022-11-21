const BridgeGame = require('./controller/BridgeGame');
const View = require('./view/ViewInterface');
const Domain = require('./domain/DomainInterface');

class App {
  constructor() {
    this.view = View;
    this.domain = Domain;
  }

  play() {
    const bridgeGame = new BridgeGame(this.view, this.domain);
    bridgeGame.start();
  }
}

module.exports = App;
