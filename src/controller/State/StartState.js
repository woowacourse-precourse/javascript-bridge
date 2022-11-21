const InputView = require("../../view/InputView");
const StateTemplate = require("./StateTemplate");

class StartState extends StateTemplate {
	constructor(game) {
		super(game);
	}
	inputHandler = InputView.readBridgeSize;
	run(command) {
		this.game.start(+command);
		return true;
	}
}

module.exports = StartState;