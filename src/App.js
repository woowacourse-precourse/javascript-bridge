const InputView = require('./InputView');

class App {
	play() {
		InputView.readBridgeSize(
			InputView.START_MSG,
			InputView.READ_BRIDGE_SIZE_MSG,
		);
	}
}

new App().play();

module.exports = App;
