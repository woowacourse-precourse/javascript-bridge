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

	static map(recentMove, isCorrect) {
		OutputView.printMap(recentMove, isCorrect);
	}

	static retry(callback) {
		InputView.readGameCommand(callback);
	}

}

module.exports = ViewManager;
