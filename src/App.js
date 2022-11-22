const InputView = require('./input_output/InputView');
const OutputView = require('./input_output/OutputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
class App {
	constructor() {
		this.bridgeGame = new BridgeGame();
	}

	play() {
		this.gameStart();
	}

	gameStart() {
		OutputView.printStart();
		InputView.readBridgeSize(this.runBridgeGame.bind(this));
	}

	runBridgeGame(size) {
		this.bridgeGame.createBridge(size);
		OutputView.printEnter();
		InputView.readMoving(this.checkMoving.bind(this));
	}

	checkMoving(moving) {
		this.bridgeGame.move(moving);
		this.checkMoveResult();
	}

	checkMoveResult() {
		OutputView.printMap(this.bridgeGame.getMovingLogs());
	}
}

const app = new App();
app.play();

module.exports = App;
