const BridgeMaker = require('./BridgeMaker');

class BridgeGame {
	#bridge;

	constructor(bridgeSize, generateRandomNumber) {
		this.#bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);
		console.log(this.#bridge);
	}

	move(moving) {
		const yetCrossBridge = this.updateYetcrossBridge(moving);
		const inverse = true;
		const prevCrossedBridge = this.delPrevBridgeEle(inverse);
		this.#bridge = [...prevCrossedBridge, ...yetCrossBridge];
	}

	updateYetcrossBridge(moving) {
		let yetCrossBridge = this.delPrevBridgeEle();
		const isCorrect = yetCrossBridge[0] === moving;
		// UO : 지나온 다리가 U이며, 정답이었던 경우
		// UX : 지나온 다리가 U이며, 틀린 경우
		// DO : 지나온 다리가 D이며, 정답이었던 경우
		// DX : 지나온 다리가 D이며, 틀린 경우
		isCorrect
			? (yetCrossBridge[0] = moving + 'O')
			: (yetCrossBridge[0] = moving + 'X');
		return yetCrossBridge;
	}

	delPrevBridgeEle(inverse = false) {
		const filterBridgeEle = this.#bridge.filter((bridgeEleInfo) =>
			inverse
				? !(bridgeEleInfo === 'D' || bridgeEleInfo === 'U')
				: bridgeEleInfo === 'D' || bridgeEleInfo === 'U',
		);

		return filterBridgeEle;
	}

	getPrevCrossedBridge() {
		const inverse = true;
		const prevCrossedBridge = this.delPrevBridgeEle(inverse);
		return prevCrossedBridge;
	}

	retry() {
		const prevCrossedBridge = this.backMove();
		const yetCrossBridge = this.delPrevBridgeEle();
		this.#bridge = [...prevCrossedBridge, ...yetCrossBridge];
	}

	backMove() {
		const inverse = true;
		let prevCrossedBridge = this.delPrevBridgeEle(inverse);
		const currentBridgeEle = prevCrossedBridge.pop();
		if (currentBridgeEle === 'UX') {
			prevCrossedBridge.push('D');
		}
		if (currentBridgeEle === 'DX') {
			prevCrossedBridge.push('U');
		}
		return prevCrossedBridge;
	}
}

module.exports = BridgeGame;
