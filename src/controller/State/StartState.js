const InputView = require("../../view/InputView");
const State = require("./State");

class StartState extends State {
	#curHandler;
	#nextHandler;
	constructor(curHandler, nextHandler) {
		super();
		this.#curHandler = curHandler;
		this.#nextHandler = nextHandler;
	}
	run() {
		InputView.readBridgeSize((command) => {
			this.#curHandler(command);
			this.#nextHandler();
		});
	}
}

module.exports = StartState;