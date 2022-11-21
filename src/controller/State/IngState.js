const InputView = require("../../view/InputView");
const OutputView = require("../../view/OutputView");
const StateTemplate = require("./StateTemplate");

class IngState extends StateTemplate {
	constructor(game) {
		super(game);
	}
	inputHandler = InputView.readMoving;
	run(command) {
		const isCompelete = this.game.move(command.toUpperCase());
		OutputView.printMap(this.game.getCurResult().stringify());
		if (isCompelete) {
			OutputView.printResult(this.game.getCurResult().stringify(), true, this.game.getTryCount());
			return false;
		}
		return true;
	}
}


module.exports = IngState;