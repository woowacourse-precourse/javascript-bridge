const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, BRIDGE_VIEW, MOVING } = require('../utils/Constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
	printStart() {
		Console.print(MESSAGES.gameStart);
	},

	printEnter() {
		Console.print(MESSAGES.blank);
	},

	/**
	 * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printMap(movingLogs) {
		const { up, down } = this.createMap(movingLogs);
		Console.print(`${up}\n${down}\n`);
	},

	createMap(movingLogs) {
		const upside = this.drawUpside(movingLogs);
		const downside = this.drawDownside(movingLogs);
		const up = `${BRIDGE_VIEW.start}${upside.join(BRIDGE_VIEW.section)}${BRIDGE_VIEW.end}`;
		const down = `${BRIDGE_VIEW.start}${downside.join(BRIDGE_VIEW.section)}${BRIDGE_VIEW.end}`;

		return { up, down };
	},

	drawUpside(movingLogs) {
		const paper = new Array(movingLogs.length).fill(0);
		const image = paper.map((element, index) => {
			const log = movingLogs[index];

			if (log.moving !== MOVING.up) {
				return BRIDGE_VIEW.blank;
			}
			return log.state ? BRIDGE_VIEW.matched : BRIDGE_VIEW.notMatched;
		});

		return image;
	},

	drawDownside(movingLogs) {
		const paper = new Array(movingLogs.length).fill(0);
		const image = paper.map((element, index) => {
			const log = movingLogs[index];

			if (log.moving !== MOVING.down) {
				return BRIDGE_VIEW.blank;
			}
			return log.state ? BRIDGE_VIEW.matched : BRIDGE_VIEW.notMatched;
		});

		return image;
	},

	/**
	 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printResult(result) {
		Console.print(`${MESSAGES.winOrFail}${result}`);
	},

	printFinishMessage() {
		Console.print(MESSAGES.finalResultMessage);
	},

	printTryCount(tryCount) {
		Console.print(`${MESSAGES.tryCount}${tryCount}`);
		Console.close();
	},
};

module.exports = OutputView;
