const BridgeMaker = require('./BridgeMaker');

class BridgeGame {
	#bridge;

	constructor(bridgeSize, generateRandomNumber) {
		this.#bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);
	}

	move(moving) {
		const yetCrossBridge = this.updateYetcrossBridge(moving);
		const inverse = true;
		const prevCrossedBridge = this.delPrevBridgeEle(inverse);
		this.#bridge = [...prevCrossedBridge, ...yetCrossBridge];
		return [...prevCrossedBridge, yetCrossBridge[0]];
	}

	updateYetcrossBridge(moving) {
		let yetCrossBridge = this.delPrevBridgeEle();
		const isCorrect = this.isCorrect(moving);
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

	isCorrect(moving) {
		const yetCrossBridge = this.delPrevBridgeEle();
		return yetCrossBridge[0] === moving;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {}
}

module.exports = BridgeGame;
