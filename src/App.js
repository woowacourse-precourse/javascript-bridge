const {
	readBridgeSize,
	readMoving,
	readGameCommand,
	closeConsole,
} = require('./View/InputView');
const {
	printStart,
	printError,
	printResult,
	printGameResultMessage,
} = require('./View/OutputView');
const BridgeGame = require('./BridgeGame');

class App {
	#bridgeGame;

	play() {
		printStart();
		readBridgeSize.bind(this)(this.createBridge);
	}

	createBridge(input) {
		this.tryCatch(() => {
			this.#bridgeGame = new BridgeGame(input);
			readMoving.bind(this)(this.move);
		}, 'BRIDGE');
	}

	move(input) {
		this.tryCatch(() => {
			this.#bridgeGame.move(input);
			this.#bridgeGame.printCurrent();
			this.decideNextStep();
		}, 'MOVE');
	}

	decideNextStep() {
		const MOVABLE = this.#bridgeGame.getIsMovable();
		const IS_END = this.#bridgeGame.isCrossed();
		if (IS_END) this.gameEnd();
		if (!IS_END && MOVABLE) readMoving.bind(this)(this.move);
		if (!IS_END && !MOVABLE) readGameCommand.bind(this)(this.controlGame);
	}

	controlGame(input) {
		this.tryCatch(() => {
			if (input === 'Q') this.gameEnd();
			this.#bridgeGame.retry(input);
			readMoving.bind(this)(this.move);
		}, 'COMMAND');
	}

	gameEnd() {
		printGameResultMessage();
		this.#bridgeGame.printCurrent();
		printResult(this.#bridgeGame.getResult());
		closeConsole();
	}

	tryCatch(callback, type) {
		try {
			callback();
		} catch (err) {
			printError(err);
			if (type === 'BRIDGE') readBridgeSize.bind(this)(this.createBridge);
			if (type === 'MOVE') readMoving.bind(this)(this.move);
			if (type === 'COMMAND') readGameCommand.bind(this)(this.controlGame);
		}
	}
}

module.exports = App;
