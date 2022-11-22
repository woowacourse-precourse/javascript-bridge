const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const Controller = {
    play(bridgeGame) {
        OutputView.printStart();
        Controller.makeBridge(bridgeGame);
    },

    makeBridge(bridgeGame) {
        InputView.readBridgeSize(input => {
            Controller.makeBridgeCallBack(bridgeGame, input);
        })
    },

}

module.exports = Controller;