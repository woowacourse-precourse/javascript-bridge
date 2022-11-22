const GameController = require("../src/controller/GameController");

describe('시작 시 로직 테스트', () => {
    test.each([[3], [5], [10]])('size 입력 시 bridgeGame 클래스 안에 bridge가 생성되는지 확인하는 테스트', (size) => {
        GameController.createBridgeGame(size);

        expect(GameController.models.bridgeGame.bridge.length).toBe(size);
    });

    test('size 입력 시 crosser 클래스가 생성되는지 확인하는 테스트', () => {
        GameController.createCrosser();

        expect(GameController.models.crosser).not.toBe('');
    });

    test.each([[-2, false], [0, false], [15, true], ['string', false], [' ', false]])('size 입력시 예외처리되어 올바른 반환을 하는지 테스트', (input, result) => {
        expect(GameController.sizeHandling(input)).toBe(result);
    });
});

describe('이동 시 로직 테스트', () => {
    beforeEach(() => {
        GameController.createBridgeGame(3);
    });

    test.each([[3], ['u'], ['D'], ['UP']])('이동 값 입력 시 올바른 반환을 하는지 테스트', (input) => {
        let result;
        if(input !== 'U' && input !== 'D') {
            result = 'failure';
            return;
        }
        result = GameController.models.bridgeGame.bridge[0] === input ? 'success' : 'failure';

        expect(GameController.movingHandling(input)).toBe(result);
    });

    test.each([['U'], ['D']])('이동 값 입력 시 이동한 결과를 반환 하는지 테스트', (input) => {
        GameController.createCrosser();
        const result = input === GameController.models.bridgeGame.bridge[0] ? 'success' : 'failure';

        expect(GameController.moveProcessing(input)).toBe(result);
    });

    test.each([['failure', 'readGameCommand'], ['notYet', 'readMoving']])('이동 값 입력 후 다음 기능 결정에 대한 값을 반환 하는지 테스트', (input, result) => {
        expect(GameController.determineNext(input)).toBe(result);
    });

    test.each([[2, 'notYet'], [3, 'end']])('이동 값 입력 후 끝에 도돨했는지 판단하여 반환한 값을 확인하는 테스트', (location, result) => {
        GameController.createCrosser();
        GameController.models.crosser.state.location = location;

        expect(GameController.endCheck()).toBe(result);
    })
});

describe('재시작 시 로직 테스트', () => {
    test.each([['R', 'reset'], ['Q', 'end'], [15, false], ['string', false]])('재시작 시 입력 값에 맞게 반환하는지 테스트', (input, result) => {
        expect(GameController.retryHandling(input)).toBe(result);
    });

    test('재시작 입력 값에 "R"을 입력시 맞는 값을 반환하는지 테스트', () => {
        expect(GameController.determineRetry('reset')).toBe(true);
    })
});


