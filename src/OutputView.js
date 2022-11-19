const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
    /**
     * 시작 안내 메시지를 출력한다.
     */
    printHello() {
        MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    },
    /**
     * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
     * @param {string[]} result
     */
    printMap(result) {
        let print = [[], []];
        for (let i in result) {
            let pos = result[i].slice(0, 1) === "D" ? 1 : 0;
            let value = result[i].at(-1);
            print[pos].push(value);
            print[pos === 0 ? 1 : 0].push(" ");
        }
        MissionUtils.Console.print(
            `[ ${print.map((x) => x.join(" | ")).join(" ]\n[ ")} ]`
        );
    },

    /**
     * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {number} input
     * @param {string[]} result
     * @param {number} count
     */
    printResult(input, result, count) {
        MissionUtils.Console.print("\n최종 게임 결과");
        this.printMap(result);
        MissionUtils.Console.print(
            `\n게임 성공 여부: ${
                input === 0 ? "성공" : "실패"
            }\n총 시도한 횟수: ${count + 1}`
        );
        MissionUtils.Console.close();
    },
};

module.exports = OutputView;
