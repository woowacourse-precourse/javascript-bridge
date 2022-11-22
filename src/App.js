const OutputView = require('./views/OutputView.js')
const InputView = require('./views/InputView.js')
const Controller = require('./controller/controller.js')

class App {

    play() {
        const controller = new Controller();
        OutputView.printGameStart()
        controller.gameStart();
    }
}

const app = new App()
app.play()
module.exports = App
