const InputView = require("../../view/InputView");
const State = require("./State");

class RetryState extends State {
	#curHandler;
	#nextHandler;
	constructor(curHandler, nextHandler) {
		super();
		this.#curHandler = curHandler;
		this.#nextHandler = nextHandler;
	}
	run() {
		InputView.readGameCommand((command) => {
			this.#curHandler(command);
			this.#nextHandler();
		});
	}
}

module.exports = RetryState;