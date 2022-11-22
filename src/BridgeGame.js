/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(curLocation, next, bridge) {
		const size = curLocation[0].length;

		if (next === bridge[size]) {
			next === "U"
				? (curLocation[0][size] = "O")
				: (curLocation[1][size] = "O");
			next === "U"
				? (curLocation[1][size] = " ")
				: (curLocation[0][size] = " ");
		} else {
			next === "U"
				? (curLocation[0][size] = "X")
				: (curLocation[1][size] = "X");
			next === "U"
				? (curLocation[1][size] = " ")
				: (curLocation[0][size] = " ");
		}
		return curLocation;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	reStart() {
		return [[], []];
	}
}

module.exports = BridgeGame;
