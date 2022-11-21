const Exception = require('./utils/Exceptions');
// 게임 로직 관리
class BridgeController {
    constructor(views) {
        this.inputView = views.inputView,
        this.outputView = views.outputView
        this.start()
    }

    start() {
        this.outputView.printStart();
        this.inputView.readBridgeSize(this.createBridge.bind(this));
    }

    createBridge(bridgeSize) {
        this.bridgeSizeException(bridgeSize)
    }

    bridgeSizeException(bridgeSize) {
        Exception.isNotNumber(bridgeSize);
        Exception.bridgeSizeOutofIndex(bridgeSize);
    }


}

module.exports = BridgeController;
