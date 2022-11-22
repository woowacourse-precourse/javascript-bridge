/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
    /**
     * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    printMap(result) {
        this.printLine(result[0]);
        this.printLine(result[1]);
    },

    printLine(arr) {
        let str = "[ ";
        for (let i = 0; i < arr.length(); i++) {
            if (i === arr.length() - 1) {
                str += arr.get(i) + " ]";
                break;
            }
            str += arr.get(i) + " | ";
        }
        return str;
    },

    /**
     * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    printResult(result, isSuccess, attempts) {
        Console.print("최종 게임 결과");
        this.printMap(result);
        let resultStatus = "성공";
        if (!isSuccess) { resultStatus = "실패"; }
        Console.print("\n게임 성공 여부: " + resultStatus);
        Console.print("총 시도한 횟수: " + attempts);

    },
};

module.exports = OutputView;