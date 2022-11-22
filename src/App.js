const InputView = require('./input_output/InputView');
const OutputView = require('./input_output/OutputView');
const BridgeGame = require('./BridgeGame');
const { SELECT } = require('./utils/Constants');
class App {
	constructor() {
		this.bridgeGame = new BridgeGame();
	}

	play() {
		this.gameStart();
	}

	gameStart() {
		OutputView.printStart();
		this.createNewBridge();
	}

	createNewBridge() {
		InputView.readBridgeSize(this.runBridgeGame.bind(this));
	}

	runBridgeGame(size) {
		this.bridgeGame.createBridge(size);
		OutputView.printEnter();
		this.selectMove();
	}

	selectMove() {
		InputView.readMoving(this.checkMoving.bind(this));
	}

	checkMoving(moving) {
		this.bridgeGame.move(moving);
		this.checkMoveResult();
	}

	checkMoveResult() {
		OutputView.printMap(this.bridgeGame.getMovingLogs());

		if (this.bridgeGame.isNotMatched()) {
			return this.askRetryOrQuit();
		}

		if (this.bridgeGame.checkFinish()) {
			return this.win();
		}

		return this.selectMove();
	}

	askRetryOrQuit() {
		InputView.readGameCommand(this.selectRetryOrQuit.bind(this));
	}

	selectRetryOrQuit(select) {
		select === SELECT.retry ? this.retryGame() : this.fail();
	}

	retryGame() {
		this.bridgeGame.retry();
		this.selectMove();
	}

	quitGame() {
		OutputView.printFinishMessage();
		OutputView.printMap(this.bridgeGame.getMovingLogs());
		OutputView.printResult(this.bridgeGame.getGameResult());
		OutputView.printTryCount(this.bridgeGame.getTryCount());
	}

	fail() {
		this.bridgeGame.fail();
		this.quitGame();
	}

	win() {
		this.bridgeGame.win();
		this.quitGame();
	}
}

module.exports = App;
