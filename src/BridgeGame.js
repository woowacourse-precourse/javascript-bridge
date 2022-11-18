const BridgeMaker = require('./BridgeMaker');

class BridgeGame {
	#bridge;
	#currentPos;

	constructor(bridgeSize, generateRandomNumber) {
		this.#bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);
		this.#currentPos = 0;
		console.log(this.#bridge);
	}

	move(moving) {
		const isCorrect = this.isCorrect(moving);

		// UO : 지나온 다리가 U이며, 정답이었던 경우
		// UX : 지나온 다리가 U이며, 틀린 경우
		// DO : 지나온 다리가 D이며, 정답이었던 경우
		// DX : 지나온 다리가 D이며, 틀린 경우
		isCorrect
			? (this.#bridge[this.#currentPos] = moving + 'O')
			: (this.#bridge[this.#currentPos] = moving + 'X');
		this.#currentPos++;
	}

	isCorrect(moving) {
		return this.#bridge[this.#currentPos] === moving;
	}

	getPrevCrossedBridge() {
		return this.#bridge.slice(0, this.#currentPos);
	}

	retry() {
		this.backMove();
	}

	backMove() {
		this.#currentPos--;
		if (this.#bridge[this.#currentPos] === 'UX') {
			this.#bridge[this.#currentPos] = 'D';
		}
		if (this.#bridge[this.#currentPos] === 'DX') {
			this.#bridge[this.#currentPos] = 'U';
		}
	}
}

module.exports = BridgeGame;
