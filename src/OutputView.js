const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
	/**
	 * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printMap(curLocation) {
		Console.print(`[ ${curLocation[0].join(" | ")} ]`);
		Console.print(`[ ${curLocation[1].join(" | ")} ]\n`);
	},

	/**
	 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printResult(curLocation, result, count) {
		Console.print("최종 게임 결과");

		this.printMap(curLocation);

		Console.print(`\n게임 성공 여부: ${result == 1 ? "성공" : "실패"}`);
		Console.print(`총 시도한 횟수: ${count}`);

		return Console.close();
	},

	printBridgeSizeError(bridgeSize) {
		if (bridgeSize > 3 && bridgeSize < 20)
			throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";

		if (isNaN(bridgeSize))
			throw "[ERROR] 다리의 길이는 숫자만 입력 가능합니다.";
	},

	printReStartError(restart) {
		if (restart !== "R" && restart !== "Q")
			throw "[ERROR] R, Q만 입력 가능합니다.";
	},

	printMoveError(input) {
		if (input !== "U" && input !== "D") throw "[ERROR] U, D만 입력 가능합니다.";
	},
};

module.exports = OutputView;
