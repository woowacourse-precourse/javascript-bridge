const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
	constructor() {
		this.currentPosition = 0;
		this.gameCount = 0;
		this.bridgeLength = 0;
		this.bridgeInfo = null;
		this.inputList = [];
		this.bridgeGameManager = new BridgeGame();
	}
	play() {
		OutputView.printStart();
		InputView.readBridgeSize(this);
		console.log(this);
	}
}

new App().play();
module.exports = App;
