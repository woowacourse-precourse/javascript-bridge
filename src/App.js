const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
	constructor() {
		this.bridgeLength = 0;
		this.bridgeInfo = null;
	}
	play() {
		OutputView.printStart();
		InputView.readBridgeSize(this);
		console.log(this);
	}
}

new App().play();
module.exports = App;
