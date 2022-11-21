const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { MESSAGE } = require('./const.js')

class GameManager {
    constructor() {

    }

    startGame() {
        OutputView.displayMessage(MESSAGE.GAME_START);

    }


}