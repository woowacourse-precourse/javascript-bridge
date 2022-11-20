const { getInputs, readMoving, closeConsole } = require('./View/InputView');
const {
	checkBridgeSize,
	checkMoveInput,
	checkGameCommand,
} = require('./util/validationInput');
const { printStart } = require('./View/OutputView');
const BridgeGame = require('./BridgeGame');

class App {
	bridgeGame;

	play() {
		printStart();
		getInputs.bind(this)([this.createBridge, this.move, this.controlGame]);
	}

	createBridge(input) {
		checkBridgeSize(input);
		this.bridgeGame = new BridgeGame(input);
	}

	move(input) {
		checkMoveInput(input);
		const MOVABLE = this.bridgeGame.move(input);
		const IS_END = this.bridgeGame.isCrossed();
		if (IS_END) {
			this.gameEnd();
		}
		return [MOVABLE, IS_END];
	}

	controlGame(input) {
		checkGameCommand(input);
		if (input === 'R') {
			this.bridgeGame.retry();
			readMoving.call(this, [this.move, this.controlGame]);
		} else {
			this.gameEnd();
		}
	}

	gameEnd() {
		this.bridgeGame.printResult();
		closeConsole();
	}
}

const a = new App();
a.play();

module.exports = App;
