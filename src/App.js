const BridgeGame = require('./BridgeGame');

class App {
  // eslint-disable-next-line class-methods-use-this,max-lines-per-function
  async play() {
    const game = new BridgeGame();
    const size = await BridgeGame.readBridgeSizeInput();
    game.start(size);
    while (game.isPlaying) {
      game.move(await BridgeGame.readMoveInput());
      game.printCurrent();
      if (game.isFailed) {
        (await BridgeGame.readIsRetry()) ? game.retry() : game.end();
      }
      if (game.isSuccess) {
        game.end();
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
