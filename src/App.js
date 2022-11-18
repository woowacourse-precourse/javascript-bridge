class App {
  #bridgeGame;
  #playCount;
  constructor() {
    this.#bridgeGame = null;
    this.#playCount = 0;
  }

  play() {}

  increasePlayCount() {
    this.#playCount++;
  }
}

const app = new App();
app.play();

module.exports = App;
