const OutputView = require("../../view/OutputView");
const State = require("./State");

class EndState extends State {
	#result;
	constructor(result) {
		super();
		this.#result = result;
	}
	run() {
		OutputView.printResult(this.#result);
	}
}


module.exports = EndState;