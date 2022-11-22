const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
    /**
     * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {BridgeGame} bridge
     * @param {string} choice
     */
    printMap(bridgeGame, choice) {
        const bridge = bridgeGame.getBridge();
        const position = bridgeGame.getPosition();
        const upperMap = this.getMapString(bridge, position, choice, 'U');
        const lowerMap = this.getMapString(bridge, position, choice, 'D');
        MissionUtils.Console.print(upperMap);
        MissionUtils.Console.print(lowerMap);
        MissionUtils.Console.print('');
    },

    /**
     * 다리의 위 또는 아래에 해당하는 문자열을 리턴한다.
     * @param {string[]} bridge
     * @param {number} position
     * @param {string} choice
     * @param {string} direction
     * @return {string} 요구사항에 맞는 문자열.
     */
    getMapString(bridge, position, choice, direction) {
        const result = ['['];
        for (let i = 0; i < position; i++) {
            if (bridge[i] === direction) result.push('O');
            else result.push(' ');
            if (i + 1 !== position) result.push('|');
        }
        return this.postProcessing(result, choice, direction);
    },

    /**
     * 문자열의 맨 마지막 부분 후처리.
     * @param {string[]} result
     * @param {string} choice
     * @param {string} direction
     * @return {string} 요구사항에 맞는 문자열.
     */
    postProcessing(result, choice, direction) {
        if (choice === direction && result[result.length - 1] === ' ') {
            result[result.length - 1] = 'X';
        } else if (choice !== direction && result[result.length - 1] === 'O') {
            result[result.length - 1] = ' ';
        }
        result.push(']');
        return result.join(' ');
    },

    /**
     * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
     * <p>
     * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {BridgeGame} bridgeGame
     * @param {string} lastChoice
     */
    printResult(bridgeGame, lastChoice) {
        MissionUtils.Console.print('최종 게임 결과');
        this.printMap(bridgeGame, lastChoice);
        if (bridgeGame.getLength() === bridgeGame.getPosition()) {
            MissionUtils.Console.print('게임 성공 여부: 성공');
        } else MissionUtils.Console.print('게임 성공 여부: 실패');
        MissionUtils.Console.print(
            `총 시도한 횟수: ${bridgeGame.getTryCount()}`
        );
        MissionUtils.Console.close();
    },
};

module.exports = OutputView;
