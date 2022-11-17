const GameController = require('./controller/GameController');

class App {
    play() {
        const game = new GameController();
        game.start();
    }
}

module.exports = App;
