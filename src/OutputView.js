const { Console } = require('@woowacourse/mission-utils');

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
};
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
class OutputView {
	/**
	 * @param {String} userBridge 사용자가 입력한 다리
	 * @param {String} answerBridge 자동으로 생성된 다리
	 * @param {BRIDGE} type 다리의 타입 (UP | DOWN)
	 *
	 * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printMap = (userBridge, answerBridge, type) => {
		let compare = '[ ';
		[...userBridge].map((square, index) => {
			if (square === type) {
				compare += `${
					square === answerBridge[index] ? BRIDGE.CORRECT : BRIDGE.WRONG
				}`;
			} else compare += ' ';
			if (index !== userBridge.length - 1) compare += ' | ';
		});
		compare += ' ]';
		Console.print(compare);
	};

	/**
	 * @param {String} userBridge 사용자가 입력한 다리
	 * @param {String} answerBridge 자동으로 생성된 다리
	 * @param {{boolean, number}} result 게임 결과
	 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printResult = (userBridge, answerBridge, result) => {};
}

module.exports = OutputView;
