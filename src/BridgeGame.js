const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
	#bridge;

	constructor(bridgeSize, generateRandomNumber) {
		this.#bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);
	}

	move(moving) {
		let yetCrossBridgeEle = this.delPrevBridgeEle();
		const isCorrect = yetCrossBridgeEle[0] === moving;
		// UO : 지나온 다리가 U이며, 정답이었던 경우
		// UX : 지나온 다리가 U이며, 틀린 경우
		// DO : 지나온 다리가 D이며, 정답이었던 경우
		// DX : 지나온 다리가 D이며, 틀린 경우
		isCorrect
			? (yetCrossBridgeEle[0] = moving + "O")
			: (yetCrossBridgeEle[0] = moving + "X");

		const prevCrossedBridgeEle = this.delPrevBridgeEle(true);
		this.#bridge = [...prevCrossedBridgeEle, ...yetCrossBridgeEle];
		return [...prevCrossedBridgeEle, yetCrossBridgeEle[0]];
	}

	delPrevBridgeEle(inverse = false) {
		const filterBridgeEle = this.#bridge.filter((bridgeEleInfo) =>
			inverse
				? !(bridgeEleInfo === "D" || bridgeEleInfo === "U")
				: bridgeEleInfo === "D" || bridgeEleInfo === "U",
		);

		return filterBridgeEle;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {}
}

module.exports = BridgeGame;
