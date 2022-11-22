const InputView = require("../../view/InputView");
const OutputView = require("../../view/OutputView");
const State = require("./State");

class IngState extends State {
	#curHandler;
	#nextHandler;
	constructor(curHandler, nextHandler) {
		super();
		this.#curHandler = curHandler;
		this.#nextHandler = nextHandler;
	}
	run() {
		InputView.readMoving((command) => {
			const result = this.#curHandler(command);
			OutputView.printMap(result.data, result.bridgeWidth);
			this.#nextHandler();
		});
	}
}


module.exports = IngState;