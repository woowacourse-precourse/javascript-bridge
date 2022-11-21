const BridgeGame = require("../src/BridgeGame");
let bridgeGame;

describe('현재 결과값 테스트', () => {
    beforeEach(() => {
        bridgeGame = new BridgeGame(3);
    });

    test.each([['D'], ['U']])('입력 값과 다리 상태를 비교하여 올바른 결과를 반환하는지 테스트', (input) => {
        const result = bridgeGame.checkAnswer(input);
        const bridgeState = bridgeGame.bridge[0];
        const compareValue = input === bridgeState ? true : false;

        expect(result).toBe(compareValue);
    });

    test.each([['U', true], ['U', false], ["D", true], ["D", false]])('입력 값과 다리 상태에 맞게 올바른 값이 저장되는지 확인하는 테스트', (moving, result) => {
        bridgeGame.updateState(moving, result);
        const checkState = moving === 'U' ? 'upState' : 'downState';
        const compareValue = bridgeGame.movingState[checkState][0];

        expect(result === true ? 'O' : 'X').toBe(compareValue);
    });
})

describe('재시작 및 종료를 결정하는 기능 테스트', () => {
    beforeEach(() => {
        bridgeGame = new BridgeGame(10);
        for(let i = 0; i < 10; i++) bridgeGame.updateState('U', true);
    });

    test("재시작 시 이동을 관리하는 객체가 초기화 되는지 확인하는 테스트", () => {
        testData = { attempts: bridgeGame.movingState.attempts + 1, currentLocation: 0, upState: [], downState: [], };
        expect(bridgeGame.movingState).not.toEqual(testData);
        bridgeGame.resetMovingState();
        expect(bridgeGame.movingState).toEqual(testData);
    });

    test.each([['R', true], ['Q', false]])("재시작 혹은 종료 시 해당되는 리턴값이 반환되는지 확인하는 테스트", (answer, returnValue) => {
        expect(bridgeGame.retry(answer)).toBe(returnValue);
    });
});

describe('게임 종료 로직 테스트', () => {
    beforeEach(() => {
        bridgeGame = new BridgeGame(10);
        for(let i = 0; i < 10; i++) {
            bridgeGame.resetMovingState();
        }
    });

    test("게임 종료 시 시도 횟수가 맞는지 확인하는 테스트", () => {
        expect(bridgeGame.movingState.attempts).toBe(11);
    });
});