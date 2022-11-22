const ViewManager = require('./ViewManager');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	start() {
		ViewManager.start();
		this.setBridge();
	}

	setBridge() {
		ViewManager.setBridge(this.handleBridgeSize.bind(this));
	}

	handleBridgeSize(bridgeSize) {
	}
}

module.exports = BridgeGame;
