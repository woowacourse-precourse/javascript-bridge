const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
    /**
     * 메시지를 출력한다.
     * @param {string} message
     */
    print(message) {
        MissionUtils.Console.print(message);
    },
    printHello() {
        this.print("다리 건너기 게임을 시작합니다.\n");
    },
    /**
     * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
     * @param {string[]} result
     */
    printMap(result) {
        let message = this.getMap(result);
        this.print(message);
    },
    /**
     *
     * @param {string[]} data
     * @returns {string}
     */
    getMap(data) {
        let result = [[], []];
        for (let i in data) {
            let pos = data[i].slice(0, 1) === "D" ? 1 : 0;
            let value = data[i].at(-1) === "X" ? "X" : "O";
            result[pos].push(value);
            result[pos === 0 ? 1 : 0].push(" ");
        }
        return `[ ${result.map((x) => x.join(" | ")).join(" ]\n[ ")} ]`;
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
        let map = this.getMap(result);
        this.print(
            `\n최종 게임 결과\n${map}\n\n게임 성공 여부: ${
                input === 0 ? "성공" : "실패"
            }\n총 시도한 횟수: ${count + 1}`
        );
        MissionUtils.Console.close();
    },
};

module.exports = OutputView;
