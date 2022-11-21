const InputView = require("../../view/InputView");
const OutputView = require("../../view/OutputView");
const StateTemplate = require("./StateTemplate");

class RetryState extends StateTemplate {
	constructor(game) {
		super(game);
	}
	getInputHandler() {
		return InputView.readGameCommand;
	}
	run(command) {
		const isEnd = this.game.retry(command.toUpperCase());
		if (isEnd) {
			OutputView.printResult(this.game.getCurResult().stringify(), false, this.game.getTryCount());
			return false;
		}
		return true;
	}
}

module.exports = RetryState;