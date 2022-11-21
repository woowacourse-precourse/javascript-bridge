const Exception = require('./utils/Exceptions');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

// 게임 로직 관리
class BridgeController {
    constructor(views) {
        this.bridgeGame = new BridgeGame();
        this.inputView = views.inputView,
        this.outputView = views.outputView
        this.start()
    }

    start() {
        this.outputView.printStart();
        this.inputView.readBridgeSize(this.createBridge.bind(this));
    }

    createBridge(bridgeSize) {
        this.bridgeSizeException(bridgeSize);
        const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
        this.bridgeGame.setBridge(bridge);
    }

    bridgeSizeException(bridgeSize) {
        Exception.isNotNumber(bridgeSize);
        Exception.bridgeSizeOutofIndex(bridgeSize);
    }


}

module.exports = BridgeController;
