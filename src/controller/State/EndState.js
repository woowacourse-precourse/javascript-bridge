const OutputView = require("../../view/OutputView");
const State = require("./State");

class EndState extends State {
	#isWin;
	#result;
	#count;
	constructor(isWin, count, result) {
		super();
		this.#isWin = isWin;
		this.#count = count;
		this.#result = result;
	}
	run() {
		OutputView.printResult(this.#result, this.#isWin, this.#count);
	}
}


module.exports = EndState;