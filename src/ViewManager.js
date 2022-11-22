const InputView = require('./InputView');
const OutputView = require('./OutputView');

class ViewManager {
	static start() {
		OutputView.printStart();
	}

	static setBridge(callback) {
		InputView.readBridgeSize(callback);
	}

	static move(callback) {
		InputView.readMoving(callback);
	}
}

module.exports = ViewManager;
