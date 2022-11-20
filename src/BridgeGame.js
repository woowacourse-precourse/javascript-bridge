const BridgeMaker = require('./BridgeMaker');
const BridgeMove = require('./BridgeMove');

class BridgeGame {
	#bridge;
	#currentPos;

	constructor(bridgeSize, generateRandomNumber) {
		this.#bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);
		// 첫시작시 this.#currentPos++ 하므로 -1 시작
		this.#currentPos = -1;
	}

	move(moving) {
		this.setNextPos();
		const isCorrect = this.isCorrect(moving);
		isCorrect
			? (this.#bridge = BridgeMove.moveFrontCorrect(
					this.#bridge,
					this.#currentPos,
					moving,
			  ))
			: (this.#bridge = BridgeMove.moveFrontWrong(
					this.#bridge,
					this.#currentPos,
					moving,
			  ));
	}

	isCorrect(moving) {
		return this.#bridge[this.#currentPos] === moving;
	}

	wasCorrect() {
		return (
			this.#bridge[this.#currentPos] === 'DO' ||
			this.#bridge[this.#currentPos] === 'UO'
		);
	}

	isEnd() {
		return this.#bridge.length === this.#currentPos + 1;
	}

	getPrevCrossedBridge() {
		return this.#bridge.slice(0, this.#currentPos + 1);
	}

	retry() {
		this.#bridge = BridgeMove.moveBack(this.#bridge, this.#currentPos);
		this.setBackPos();
	}

	setBackPos() {
		this.#currentPos--;
	}

	setNextPos() {
		this.#currentPos++;
	}
}

module.exports = BridgeGame;
