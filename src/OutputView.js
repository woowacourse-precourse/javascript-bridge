const { STRUCTURE } = require("./constant/message.js");
const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
    /**
     * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * 메서드도 추가할 수 있다.
     */
    printMap(upBridge, downBridge) {
        console.log("OutputView.printMap-----------");
        Console.print(STRUCTURE.ENTRANCE + upBridge.join(STRUCTURE.LINK) + STRUCTURE.EXIT);
        Console.print(STRUCTURE.ENTRANCE + downBridge.join(STRUCTURE.LINK) + STRUCTURE.EXIT);
    },

    /**
     * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * 메서드도 추가할 수 있다.
     */
    printResult() {
        console.log("결과출력");
    },

    printFail() {},
};

module.exports = OutputView;
