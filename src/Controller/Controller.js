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

    makeBridgeCallBack (bridgeGame, input) {
        bridgeGame.makeBridge(input);
        Controller.move(bridgeGame);
    },

    move(bridgeGame) {
        InputView.readMoving(input => {
            Controller.controllerMoveCallback(input, bridgeGame);
        })
    },

    controllerMoveCallback(input, bridgeGame) {
        bridgeGame.move(input);
        const map = bridgeGame.getMap();
        OutputView.printMap(map);
        Controller.process(bridgeGame);
    },
    
}

module.exports = Controller;