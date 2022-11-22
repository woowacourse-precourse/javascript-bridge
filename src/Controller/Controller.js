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
    
    process(bridgeGame) {
        if (!bridgeGame.canMove()) {
            return Controller.retryBool(bridgeGame);
        }
        if (bridgeGame.checkDone()) {
            return Controller.exit(bridgeGame);
        }
        Controller.move(bridgeGame);
    },

    retryBool(bridgeGame) {
       InputView.readGameCommand(input => {
            Controller.retryBoolCallBack(bridgeGame, input);
       })
    },
    
    retryBoolCallBack(bridgeGame, input) {
        if (input === 'R') {
            return Controller.reGame(bridgeGame);
        }
        if (input === 'Q') {
            return Controller.exit(bridgeGame);
        }
        Controller.move(bridgeGame)
    },

}

module.exports = Controller;