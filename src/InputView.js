const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const start = new BridgeGame();

const InputView = {
	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize() {
		Console.readLine("다리의 길이를 입력해주세요.\n", bridgeSize => {
			try {
				OutputView.printBridgeSizeError(bridgeSize);

				const bridge = BridgeMaker.makeBridge(
					bridgeSize,
					BridgeRandomNumberGenerator.generate
				);

				this.readMoving([[], []], bridge, 1);
			} catch (error) {
				Console.print(error);

				this.readBridgeSize();
			}
		});
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(curLocation, bridge, count) {
		Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", next => {
			try {
				OutputView.printMoveError(next);

				curLocation = start.move(curLocation, next, bridge);

				this.moveCheck(curLocation, bridge, count);
			} catch (error) {
				Console.print(error);

				this.readMoving(curLocation, bridge, count);
			}
		});
	},

	moveCheck(curLocation, bridge, count) {
		OutputView.printMap(curLocation);
		if (curLocation[0].includes("X") || curLocation[1].includes("X")) {
			this.readGameCommand(curLocation, bridge, count);
		}
		if (curLocation[0].length === bridge.length) {
			OutputView.printResult(curLocation, 1, count);
		}
		return this.readMoving(curLocation, bridge, count);
	},
	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(curLocation, bridge, count) {
		Console.readLine(
			"\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
			input => {
				try {
					OutputView.printReStartError(input);
				} catch (error) {
					Console.print(error);
					this.readGameCommand(curLocation, bridge, count);
				}
				if (input === "R")
					this.readMoving(start.reStart(curLocation), bridge, count + 1);
				if (input === "Q") OutputView.printResult(curLocation, 0, count);
			}
		);
	},
};

module.exports = InputView;
