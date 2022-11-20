class BridgeMove {
	// UO : 지나온 다리가 U이며, 정답이었던 경우
	// DO : 지나온 다리가 D이며, 정답이었던 경우
	static moveFrontCorrect(bridge, currentPos, moving) {
		const newBridge = [...bridge];
		newBridge[currentPos] = `${moving}O`;
		return newBridge;
	}

	// UX : 지나온 다리가 U이며, 틀린 경우
	// DX : 지나온 다리가 D이며, 틀린 경우
	static moveFrontWrong(bridge, currentPos, moving) {
		const newBridge = [...bridge];
		newBridge[currentPos] = `${moving}X`;
		return newBridge;
	}

	static moveBack(bridge, currentPos) {
		const newBridge = [...bridge];
		// UX인경우 원래 D이므로
		if (bridge[currentPos] === 'UX') {
			newBridge[currentPos] = 'D';
		}
		// DX인경우 원래 U이므로
		if (bridge[currentPos] === 'DX') {
			newBridge[currentPos] = 'U';
		}
		return newBridge;
	}
}

module.exports = BridgeMove;
