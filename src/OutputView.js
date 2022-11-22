const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 
D
[   ]
[   ]

U
[ O | X ]
[   |   ]

D
[ O |   |   ]
[   | O | O ]
 
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */ // 인자로 upperMap이랑 lowerMap 받아서 그대로 출력만 하는 기능
  printMap(upperMap, lowerMap) {
	MissionUtils.Console.print(`${upperMap}\n`);
	MissionUtils.Console.print(`${lowerMap}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, attemptCount) {
	console.log('gazua');
	let resultMessage;
	if (bridge.checkTargetReached()) {
		resultMessage = "성공";
	} else if (!bridge.checkTargetReached()) {
		resultMessage = "실패";
	}
	MissionUtils.Console.print("최종 게임 결과\n");
	const [upperMap, lowerMap] = bridge.getMaps();
	this.printMap(upperMap, lowerMap);
	MissionUtils.Console.print(`게임 성공 여부: ${resultMessage}\n`);
	MissionUtils.Console.print(`총 시도한 횟수: ${attemptCount}\n`);
  }
};

module.exports = OutputView;