const { BridgeLengthInput, DirectionChoiceInput, RetryInput} = require('../src/Validator/Validator');

describe('다리길이 입력 기능 테스트', () => {
    it.each([['3'], ['20']])('올바른 입력값이 들어오면 true를 반환', (input) => {
        const userInput = new BridgeLengthInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(true);
    });
    it.each([["2"], ["4.99"], ["-1"], ["21"], ["a"], ['NaN'], ['undefined']])('다리 길이 입력 예외처리', (input) => {
        const userInput = new BridgeLengthInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(false);
    });
});

describe('다리 방향 입력 기능 테스트', () => {
    it.each([['U'], ['D']])('올바른 입력값이 들어오면 true를 반환', (input) => {
        const userInput = new DirectionChoiceInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(true);
    });
    it.each([["A"], ["-1"], ["1"], ['u'], ['d']])('다리 방향 입력 예외처리', (input) => {
        const userInput = new DirectionChoiceInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(false);
    });
});

describe('다시하기 입력 기능 테스트', () => {
    it.each([['Q'], ['R']])('올바른 입력값이 들어오면 true를 반환', (input) => {
        const userInput = new RetryInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(true);
    });
    it.each([["A"], ["-1"], ["1"], ['q'], ['r']])('다시하기 입력 예외처리', (input) => {
        const userInput = new RetryInput(input);
        const test = () => userInput.check();
        expect(test()).toBe(false);
    });
});