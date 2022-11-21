const BridgeGame = require("../src/BridgeGame");
let bridgeGame;
let index = 0;

describe('현재 결과값 테스트', () => {
    beforeEach(() => {
        bridgeGame = new BridgeGame(3);
    });

    test.each([['D'], ['U']])('입력 값과 다리 상태를 비교하여 올바른 결과를 반환하는지 테스트', (input) => {
        const result = bridgeGame.checkAnswer(input);
        const bridgeState = bridgeGame.bridge[0];
        const compareValue = index === bridgeState ? true : false;

        expect(result).toBe(compareValue);

        index += 1;
    });

    test.each([['U', true], ['U', false], ["D", true], ["D", false]])('입력 값과 다리 상태에 맞게 올바른 값이 저장되는지 확인하는 테스트', (moving, result) => {
        bridgeGame.updateState(moving, result);
        const checkState = moving === 'U' ? 'upState' : 'downState';
        const compareValue = bridgeGame.movingState[checkState][0];

        expect(result === true ? 'O' : 'X').toBe(compareValue);
    });
})