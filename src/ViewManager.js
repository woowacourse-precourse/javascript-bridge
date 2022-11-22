const InputView = require('./InputView');
const OutputView = require('./OutputView');

class ViewManager {
	static start() {
		OutputView.printStart();
	}

	static setBridge(callback) {
		InputView.readBridgeSize(callback);
	}
}

module.exports = ViewManager;
