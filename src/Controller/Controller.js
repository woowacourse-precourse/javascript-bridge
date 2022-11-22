const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const Controller = {
    play(bridgeGame) {
        OutputView.printStart();
        Controller.makeBridge(bridgeGame);
    },

}

module.exports = Controller;