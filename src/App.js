const BridgeGame = require('./controller/BridgeGame');
const View = require('./view/ViewInterface');
const Domain = require('./domain/DomainInterface');

class App {
  #view;
  #domain;
  #bridgeGame;

  constructor() {
    this.#view = new View();
    this.#domain = new Domain();
    this.#bridgeGame = new BridgeGame(this.#view, this.#domain);
  }

  play() {
    this.#bridgeGame.start();
  }
}

module.exports = App;
