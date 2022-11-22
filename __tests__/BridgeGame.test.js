const BridgeGame = require("../src/model/BridgeGame");
const Crosser = require("../src/model/Crosser");
let bridgeGame;
let crosser;

describe('이동할 때 관련 로직 테스트', () => {
    beforeEach(() => {
        bridgeGame = new BridgeGame(3);
        crosser = new Crosser();
    });

    test.each([['U', 0], ['D', 1]])('입력한 이동 위치에 따라 성공인지 실패인지 확인하는 테스트', (input, index) => {
        const bridgeState = bridgeGame.bridge[index];
        const result = bridgeState === input ? 'success' : 'failure';

        expect(bridgeGame.move(input, index)).toBe(result);
    });

    test.each([[0], [1], [2]])('bridge 리스트의 원소를 옳게 반환하는지 확인하는 테스트', (index) => {
        const bridgeState = bridgeGame.bridge[index];

        expect(bridgeGame.checkCorrect(index)).toBe(bridgeState);
    });

    test.each([[3, 'end'], [2, 'notYet']])('이동 값을 입력했을 하여 성공했을 때 다리의 끝인지 확인하는 테스트', (location, result) => {
        tempState = { location: location };

        expect(bridgeGame.endCheck(tempState)).toBe(result);
    })
});

describe('재시작 관련 로직 테스트', () => {
    test.each([['Q', 'end'], ['R', 'reset']])('입력 값에 따라 재시작할건지 끝낼건지 반환을 확인하는 테스트', (input, result) => {
        expect(bridgeGame.retry(input)).toBe(result);
    });
});
