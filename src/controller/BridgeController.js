const { printMap } = require("../view/OutputView");
const BridgeGame = require("../model/BridgeGame");
const { generate } = require("../util/BridgeRandomNumberGenerator");
const { makeBridge } = require("../BridgeMaker");


const BridgeController = {

    gameStart(inputNum) {
        const bridge = makeBridge(inputNum, generate);
        const bridgeGame = new BridgeGame(bridge);
        return bridgeGame;
    },

    handleMove(bridgeGame, inputMove) {
        bridgeGame.move(inputMove);
        bridgeGame.makeResult(inputMove, bridgeGame.getSuccess());
        printMap(bridgeGame);
    },
};

module.exports = BridgeController;